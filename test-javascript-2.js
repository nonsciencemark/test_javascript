// ability scores to ability modifiers

function generateArrayOfNumbers(numbers) { // function to create number array stolen from internet
    return [...Array(numbers).keys()].slice(1)
};

let rolls = generateArrayOfNumbers(21); // dice rolls from 1-20

function getMod(roll) { // what is the modifier for a given roll?
    return Math.round((roll - 11) / 2) //mods
    }; 

let mods = rolls.map(getMod)// vector of mods

console.log(rolls); // view
console.log(mods); // view

var rollsToMods = [{
    "Ability Score": rolls,
    "Ability Modifier": mods
}]

console.log(rollsToMods);

// player level to challeng rating

let levels = generateArrayOfNumbers(21); // player levels from 1-20
console.log(levels); // view

function levelToCR(level) { // what is the modifier for a given roll?
    let playerCR = level / 4 //mods
    if (playerCR < 1) {
        return playerCR
    } else {
        return Math.round(playerCR)
    }
    }; 

let playerCRs = levels.map(levelToCR);
console.log(playerCRs); // view

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

var CRToProfs = [{ // create table
    "Challenge Rating": CRs,
    "Proficiency Bonus": profs
}]

console.log(CRToProfs); // view