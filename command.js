var fs = require("fs");

module.exports = {
	pwd: function() {
		return process.env.PWD;
	},

	ls: function() {
		fs.readdir('.', function(err, files) {
			if(err) throw err;
			var output = "";
			files.forEach(function(file) {
				// console.log(typeof file);
				output += file.toString();
				output += '\n';
			});
			console.log("---", typeof output);
			return output;
		});
		// fs.readdir('.', function(err, files) {
		//   if (err) throw err;
		//   files.forEach(function(file) {
		//     process.stdout.write(file.toString() + "\n");
		//   })
		//   process.stdout.write("prompt > ");
		// });
	},


}