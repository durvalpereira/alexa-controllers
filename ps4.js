const wemore = require('wemore');
var exec = require('child_process').exec;

var turn_on = 'npx ps4-waker';
var turn_off = 'npx ps4-waker standby';

const ps4 = wemore.Emulate({
	friendlyName: "PS4",
	port: 49218
})

ps4.on('listening', function() {
  console.log('PS4 listening on', this.port)
})

ps4.on('off', function() {
	exec(turn_off, function(error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
	console.log("Turn OFF PS4");
});

ps4.on('on', function() {
	exec(turn_on, function(error, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
	});
	console.log("Turn ON PS4");
})