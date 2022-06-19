// ability scores to ability modifiers

function generateArrayOfNumbers(numbers) { // function to create number array stolen from internet
    return [...Array(numbers).keys()].slice(1)
};

let rolls = generateArrayOfNumbers(21); // dice rolls from 1-20
console.log(rolls); // view

function getMod(roll) { // what is the modifier for a given roll?
    return Math.round((roll - 11) / 2) //mods
    }; 

let mods = rolls.map(getMod)// vector of mods

console.log(mods); // view

//  challenge ratings to proficiency bonuses

let CRs = [0, 1/8, 1/4, 1/2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, // example CRs
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
console.log(CRs); // view

function getProf(CR) { // function to convert
    var prof = Math.round(1.4 + CR / 5) //mods
    if (prof < 2) {
        return 2
    } else {
        return prof
    }
    }; 

let profs = CRs.map(getProf) // vector of proficiencies
console.log(profs); // view

// player level to challenge rating

let levels = generateArrayOfNumbers(21); // player levels from 1-20
console.log(levels); // view

function levelToCR(level) { // converting player character level to challenge rating
    let playerCR = level * 1.25 
    if (playerCR < 1) {
        return playerCR
    } else {
        return Math.round(playerCR)
    }
    }; 

let playerCRs = levels.map(levelToCR);
console.log(playerCRs); // view

let playerProfs = playerCRs.map(getProf);
console.log(playerProfs); 

// dice rolling functions

function D4Roll(n=1) { // function to roll a d4
    return Array.from({length: n}, () => Math.ceil(Math.random() * 4));
}

function D6Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 6));
}

function D8Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 8));
}

function D10Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 10));
}

function D12Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 12));
}

function D20Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 20));
}

function D100Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 100));
}

// stats rolling

function sum(x) { // function to sum an array
    var tot = 0;
    for (var i=0; i<x.length; i++) {
        tot += Number(x[i])
    }
    return tot
}

function statsRoll() { // roll a single stat
    var diceRolls = D6Roll(4);
    let diceRollsSorted = diceRolls.sort().slice(1,4)
    return sum(diceRollsSorted)
}

function statsArrayRoll() { // roll all six stats
    return [statsRoll(),statsRoll(),statsRoll(),statsRoll(),statsRoll(),statsRoll()]
}


var diceRolls = Array(4);
newDiceRolls = diceRolls.map(D6Roll);
console.log(statsArrayRoll());