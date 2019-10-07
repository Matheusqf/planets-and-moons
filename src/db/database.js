export const db = [{ 
    id: 1,
    name: 'Mercury',
    description: `The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.`, 
    orbitDistance: 57909227, 
    rings: false,
    parentId: null
   },
   {
     id: 2,
     name: 'Venus',
     description: 'One day on Venus lasts 243 Earth days because Venus spins backwards, with its sun rising in the west and setting in the east.',
     orbitDistance: 108209475,
     rings: false,
     parentId: null
   },
   {
     id: 3,
     name: 'Earth',
     description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
     orbitDistance: 	149598262,
     rings: false,
     parentId: null
   },
   {
     id: 4,
     name: 'Mars',
     description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
     orbitDistance: 227943824,
     rings: false,
     parentId: null
   },
   {
     id: 5,
     name: 'Jupiter',
     description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
     orbitDistance: 778340821,
     rings: true,
     parentId: null
   },
   {
     id: 6,
     name: 'Saturn',
     description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system.',
     orbitDistance: 1426666422,
     rings: true,
     parentId: null
   },
   {
     id: 7,
     name: 'Uranus',
     description: 'Uranus is an ice giant. Most of its mass is a hot, dense fluid of "icy" materials – water, methane and ammonia – above a small rocky core.',
     orbitDistance: 	2870658186,
     rings: true,
     parentId: null
   },
   {
     id: 8,
     name: 'Neptune',
     description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.',
     orbitDistance: 4498396441,
     rings: true,
     parentId: null
   },
   {
     id: 9,
     name: '*Pluto',
     description: '*Pluto is officially classified as a dwarf planet.',
     orbitDistance: 5906376272,
     rings: false,
     parentId: null
   },
   {
     id: 10,
     name: `Earth's Moon`,
     description: `Earth's Moon is the only place beyond Earth where humans have set foot.`,
     parentId: 3
   },
   {
     id: 11,
     name: `Mars Moons - Deimos`,
     description: `Deimos is the smaller of Mars' two moons. Being only 9 by 7 by 6.8 miles in size (15 by 12 by 11 kilometers), Deimos whirls around Mars every 30 hours.`,
     parentId: 4
   },
   {
     id: 12,
     name: `Mars Moons - Phobos`,
     description: `Phobos, gouged and nearly shattered by a giant impact crater and beaten by thousands of meteorite impacts, is on a collision course with Mars.`,
     parentId: 4
   },
   {
     id: 13,
     name: `Jupiter Moons - Adrastea`,
     description: `Adrastea was discovered in July 1979 by the Voyager science team.`,
     parentId: 5
   },
   {
     id: 14,
     name: `Jupiter Moons - Callisto`,
     description: `Callisto is Jupiter’s second largest moon and the third largest moon in our solar system and may have an underground salty ocean making it a potential habitat for life.`,
     parentId: 5
   },
   {
     id: 15,
     name: `Jupiter Moons - Dia`,
     description: `With a prograde orbit and a radius of about 1.2 miles (2 km), Dia is among the smallest member of the Himalia group (made up of Himalia, Leda, Lysithea, and Elara).`,
     parentId: 5
   },
   {
     id: 16,
     name: `Jupiter Moons - Europa`,
     description: `Scientists are almost certain that hidden beneath the icy surface of Europa is a salty-water ocean thought to contain twice as much water as Earth’s oceans combined.`,
     parentId: 5
   },
   {
     id: 17,
     name: `Jupiter Moons - Ganymede`,
     description: `Ganymede is the largest moon in our solar system and the only moon with its own magnetic field.`,
     parentId: 5
   },
   {
     id: 18,
     name: `Jupiter Moons - Io`,
     description: `Jupiter's moon Io is the most volcanically active world in the Solar System, with hundreds of volcanoes, some erupting lava fountains dozens of miles (or kilometers) high.`,
     parentId: 5
}];

export default {};