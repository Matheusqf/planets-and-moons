import React, { Component } from 'react';
import MaterialTable from 'material-table';
import FormDialog from './dialog';

import { db } from '../db/database';

export default class PlanetsTable extends Component {
  state = {
    isModalAddMoonOpen: false,
    selectedPlanet: {},
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Orbit Distance(km)', field: 'orbitDistance', type: 'numeric' },
      {
        title: 'Rings',
        field: 'rings',
        lookup: { false: 'No', true: 'Yes' },
      }
    ]
  };

  componentDidMount() {
    // simulate a get on the db
    this.setState({ data: db });
  }

  onRowAdd = newData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.data];
        data.push(newData);
        this.setState({ ...this.state, data });
      }, 600);
    });

  onRowUpdate = (newData, oldData) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.data];
        data[data.indexOf(oldData)] = newData;
        this.setState({ ...this.state, data });
      }, 600);
    });

  onRowDelete = oldData =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        const data = [...this.state.data];
        data.splice(data.indexOf(oldData), 1);
        this.setState({ ...this.state, data });
      }, 600);
    })
    
  onAddMoon = (event, rowData) => {
    this.setState({ isModalAddMoonOpen: true, selectedPlanet: rowData });
  }
  
  toogleModalAddMoon = () => {
    this.setState({ isModalAddMoonOpen: !this.state.isModalAddMoonOpen })
  }

  onSaveMoon = moon => {
    const { data, selectedPlanet } = this.state

    const newMoon =  {
      id: 15,
      parentId: selectedPlanet.id,
      ...moon
    }
    this.setState({ data: [...data, newMoon], selectedPlanet: {}, isModalAddMoonOpen: false })
  }

  render() {
    const { columns, data, isModalAddMoonOpen, selectedPlanet } = this.state;
    return (
      <div>
        <MaterialTable
          title="Solar System Planets"
          columns={columns}
          data={data}      
          parentChildData={(row, rows) => rows.find(a => row.parentId && (a.id === row.parentId))}
          options={{
            pageSize: 10,
            actionsColumnIndex: -1,
            rowStyle: rowData => ({
              backgroundColor: rowData.parentId == null ? '#EEE' : '#FFF'
            })
          }}
          editable={{
            onRowAdd: this.onRowAdd,
            onRowUpdate: this.onRowUpdate,
            onRowDelete: this.onRowDelete,
          }}
          actions={[
            rowData => ({
              icon: 'add_circle',
              tooltip: 'Add Moon',
              disabled: !(rowData.parentId == null),
              onClick: this.onAddMoon
            })
          ]}
        />
        {isModalAddMoonOpen && <FormDialog handleClickOpen={this.toogleModalAddMoon} handleOnClickSave={this.onSaveMoon} rowData={selectedPlanet} isOpen={isModalAddMoonOpen} />}
      </div>
    );
  }

  
}
