const fs = require("fs");
const people1 = require("./people1.json");
const people2 = require("./people2.json");

// console.log(people1, people2);

let merge = people1.concat(people2).sort();

console.log(merge);
