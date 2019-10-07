import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class PlanetsTable extends Component {
  state = {
    name: '',
    description: ''
  }

  setAttributeValue = (attribute, value) => this.setState({ [attribute]:  value });

  handleClickSave = () => {
    const { handleOnClickSave } = this.props;
    return handleOnClickSave(this.state)
  }

  render() {
    const { isOpen, rowData, handleClickOpen } = this.props;
    return (
      <div>
        <Dialog open={isOpen} onClose={handleClickOpen} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Moon to {rowData.name} </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={this.state.name}
              onChange={(event) => this.setAttributeValue('name', event.target.value)}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={this.state.description}
              onChange={(event) => this.setAttributeValue('description', event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickOpen} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClickSave} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
};