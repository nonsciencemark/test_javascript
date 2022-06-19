// function to create number array stolen from internet
function generateArrayOfNumbers(numbers) {
    return [...Array(numbers).keys()].slice(1)
};

// dice rolls from 1-20
let rolls = generateArrayOfNumbers(21);

// what is the modifier for a given roll?
function getMod(roll) {
    let mods = [];
    roll.forEach(item => mods.push(Math.round((item - 11) / 2)));
    return mods
    }; 

// vector of mods
let mods = getMod(rolls);

// combine into array
let rollsToMods = {
    rolls,
    mods
}

// show
console.log(rollsToMods);