var commands = require("./command.js");

/**
Required: output must be of type string

**/
function done(output) {
	process.stdout.write(output);
	process.stdout.write("\nprompt > ");
}

process.stdout.write("prompt > ");
process.stdin.on("data", function(data) {
	// console.log(process);
	var cmd = data.toString().trim(); // remove newline
	cmd = cmd.split(' ');
	// process.stdout.write(commands.toString());
	if(cmd[0] === "pwd") {
		done(commands.pwd());
	}

	if(cmd[0] === "date") {
		process.stdout.write(Date().toString());
	}

	if(cmd[0] === "ls") {
		(commands.ls());
	}


});