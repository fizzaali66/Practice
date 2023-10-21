const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(element => element.name);
console.log("Names Array Using Map:")
console.log(names)
//2. Get array of all heights
const heights = characters.map(element => element.height);
console.log("Height Array Using Map:")
console.log(heights)
//3. Get array of objects with just name and height properties
const nameheights = characters.map(element => ({name: element.name,height: element.height}));
console.log("Name and Height Array Using Map:")
console.log(nameheights)
//4. Get array of all first names
const firstName = characters.map(element => element.name.split(" ")[0]);
console.log("First Name Array Using Map:")
console.log(firstName)

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 80
const filteredBymass = characters.filter( character => {
    return character.mass > 80;
})
console.log("Mass Greater than 80")
console.log(filteredBymass)
//2. Get characters with height less than 200
const filteredByHeight = characters.filter( character => {
    return character.height > 150;
})
console.log("Height Greater than 150")
console.log(filteredByHeight)
//3. Get all male characters
const filteredByMale = characters.filter( character => {
    return character.gender == "male";
})
console.log("Male Characters")
console.log(filteredByMale)
//4. Get all female characters
const filteredByFemale = characters.filter( character => {
    return character.gender == "female";
})
console.log("Female Characters")
console.log(filteredByFemale)

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
const hasMale = characters.some( character => {
    return character.gender == "male";
})
console.log("Has Male??")
console.log(hasMale);
//2. Is there at least one character with blue eyes?
const hasBlueEyes = characters.some( character => {
    return character.eye_color == "blue";
})
console.log("Has BlueEyed Character??")
console.log(hasBlueEyes);
//3. Is there at least one character taller than 210?
const isTaller = characters.some( character => {
    return character.height > 210;
})
console.log("Is Taller then 210??")
console.log(isTaller);
//4. Is there at least one character that has mass less than 50?
const isSkinny = characters.some( character => {
    return character.mass < 50;
})
console.log("Is Skinny??")
console.log(isSkinny);