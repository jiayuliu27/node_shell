var commands = require("./command.js");
console.log(Object.keys(process));
/**
Required: output must be of type string
**/
function done(output) {
	// console.log("done", output, typeof output)
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
		done(Date().toString());
	}

	if(cmd[0] === "ls") {
		// console.log(commands.ls(), typeof commands.ls())
		commands.hello(done);
	}

	if(cmd[0] === "echo") {
		done(commands.echo(cmd.slice(1)));
	}

	if(cmd[0] === "cat") {
		done(commands.cat(cmd[1]));
	}

	if(cmd[0] === "head") {
		done(commands.head(cmd[1]));
	}

	if(cmd[0] === "tail") {
		done(commands.tail(cmd[1]));
	}

	if(cmd[0] === "sort") {
		done(commands.sort(cmd[1]));
	}

	if(cmd[0] === "wc") {
		done(commands.wc(cmd[1]));
	}

	if(cmd[0] === "uniq") {
		done(commands.uniq(cmd[1]));
	}

	if(cmd[0] === "curl") {
		commands.curl(cmd[1], done);
	}
});