const fs = require("fs");
const people1 = require("./people/people1.json");
const people2 = require("./people/people2.json");

// console.log(people1, people2);

let merge = people1.concat(people2).sort();

// console.log(merge);

// fs.readdir("./people", function(err, files) {
// 	if (err) {
// 		console.error("Unable to read directory");
// 		console.error(err);
// 		return;
// 	}
// 	if (!files.length) {
// 		console.error("Directory is empty!");
// 		return;
// 	}
// // Print each file's name
// 	// console.log("All files in directory:");
// });
for (let i = 0; i < merge.length; i++) {
	merge[i];
	console.log(merge[i]);
}

fs.writeFile("./sorted_people.txt", JSON.stringify(merge), function(err) {
	if (err) {
		console.error("Could not save ");
		console.error(err);
		return;
	}
	console.log("File successfully saved");
});
