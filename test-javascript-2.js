// function to create number array
function generateArrayOfNumbers(numbers) {
    return [...Array(numbers).keys()].slice(1)
};

// rolls from 1-20
var rolls = generateArrayOfNumbers(21);
console.log(rolls); // view

// what is the modifier for a given roll?
function getMod(roll) {
    let mod = Math.round((roll - 11) / 2);
    return mod;
};

// apply that function to the rolls array
console.log(getMod.apply(null, rolls));
// why is this wrong?