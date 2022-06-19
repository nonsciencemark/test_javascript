// ability scores to ability modifiers

export function generateArrayOfNumbers(numbers) { // function to create number array stolen from internet
    return [...Array(numbers).keys()].slice(1)
};

export function getMod(roll) { // what is the modifier for a given roll?
    return Math.round((roll - 11) / 2) //mods
    }; 

//  challenge ratings to proficiency bonuses

export function getProf(CR) { // function to convert
    var prof = Math.round(1.4 + CR / 5) //mods
    if (prof < 2) {
        return 2
    } else {
        return prof
    }
    }; 

// player level to challenge rating

export function levelToCR(level) { // converting player character level to challenge rating
    let playerCR = level * 1.25 
    if (playerCR < 1) {
        return playerCR
    } else {
        return Math.round(playerCR)
    }
    }; 

// dice rolling functions

export function D4Roll(n=1) { // function to roll a d4
    return Array.from({length: n}, () => Math.ceil(Math.random() * 4));
}

export function D6Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 6));
}

export function D8Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 8));
}

export function D10Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 10));
}

export function D12Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 12));
}

export function D20Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 20));
}

export function D100Roll(n=1) { // function to roll a d6
    return Array.from({length: n}, () => Math.ceil(Math.random() * 100));
}

// stats rolling

export function sum(x) { // function to sum an array
    var tot = 0;
    for (var i=0; i<x.length; i++) {
        tot += Number(x[i])
    }
    return tot
}

export function statsRoll() { // roll a single stat
    var diceRolls = D6Roll(4);
    let diceRollsSorted = diceRolls.sort().slice(1,4)
    return sum(diceRollsSorted)
}

export function statsArrayRoll() { // roll all six stats
    return [statsRoll(),statsRoll(),statsRoll(),statsRoll(),statsRoll(),statsRoll()]
}
