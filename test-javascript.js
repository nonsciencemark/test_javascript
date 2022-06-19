let mountains = [ // mountain information array of lists
    {
        Name: "Monte Falco",
        Height: 1658,
        Place: "Parco Foreste Casentinesi"
    },
    {
        Name: "Monte Falterona",
        Height: 1654,
        Place: "Parco Foreste Casentinesi"
    },
    {
        Name: "Poggio Scali",
        Height: 1520,
        Place: "Parco Foreste Casentinesi"
    },
    {
        Name: "Pratomagno",
        Height: 1592,
        Place: "Parco Foreste Casentinesi"
    },
    {
        Name: "Monte Amiata",
        Height: 1738,
        Place: "Siena"
    }
];

function generateTableHead(table, data) {
    let thead = table.createTHead(); // create table header
    let row = thead.insertRow(); // create rows
    for (let key of data) { // loop over the provided data
        let th = document.createElement("th"); // create element to store row data
        let text = document.createTextNode(key); // create text
        th.appendChild(text); // put in text
        row.appendChild(th); // put the row at the bottom
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(mountains[0]);

generateTableHead(table, data);
generateTable(table, mountains);

import statsArrayRoll from './dnd-funcs-javascript.js';

//let stats = statsArrayRoll();
//$("#display").val(parsed);   