var fs = require("fs");
var request = require("request");

module.exports = {
	pwd: function() {
		// console.log(process.env.PWD, typeof process.env.PWD)
		return process.env.PWD;
	},

	hello: function(done) {
		// issue with async deferring function to the end of program
		var output = "";
		fs.readdir('.', function(err, files) {
			if(err) {
				console.log(chalk.bold.red(err.toString()));
				throw err;
			}
			files.forEach(function(file) {
				output += file.toString();
				output += '\n';
			});	
			done(output);
		});
		// console.log("here", output, typeof output);
		// process.stdout.write(output);
		
		// fs.readdir('.', function(err, files) {
		//   if (err) throw err;
		//   files.forEach(function(file) {
		//     process.stdout.write(file.toString() + "\n");
		//   })
		//   process.stdout.write("prompt > ");
		// });
	},
	echo: function(args) {
		return args.join(" ");
	},

	cat: function(fileName) {
		// readFileSync() returns a string
		return fs.readFileSync(fileName);
		// fs.readFile(fileName, (err, data) => {
		// 	return data.toString();
		// });

	},
	head: function(fileName) {
		var content = fs.readFileSync(fileName).toString().split("\n");
		return content.slice(0, Math.min(5, content.length)).join("\n");
	},
	tail: function(fileName) {
		var content = fs.readFileSync(fileName).toString().split("\n");
		return content.slice(Math.max(content.length - 6, 0), content.length).join("\n");
	},
	sort: function(fileName) {
		var content = fs.readFileSync(fileName).toString().split("\n");
		return content.sort().join("\n");

	},
	wc: function(fileName) {
		var content = fs.readFileSync(fileName).toString().split("\n");
		return content.length.toString();

	},
	uniq: function(fileName) {
		var content = fs.readFileSync(fileName).toString().split("\n");
		var duplicates = {};
		return content.filter(function(line) {
			return duplicates.hasOwnProperty(line) ? false : (duplicates[line] = true);
		}).join("\n");

	},
	curl: function(argument) {
		// body...
	}


}