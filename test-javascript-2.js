// function to create number array stolen from internet
function generateArrayOfNumbers(numbers) {
    return [...Array(numbers).keys()].slice(1)
};

// dice rolls from 1-20
var rolls = generateArrayOfNumbers(21);
console.log(rolls); // view

// what is the modifier for a given roll?
function getMod(roll) {
    let mod = Math.round((roll - 11) / 2); // this is how the mods work
    console.log(mod);
}; // why is this console log? why doesn't return work?

// apply that function to the rolls array
var mods = rolls.forEach(getMod);

console.log(rolls);
console.log(mods);