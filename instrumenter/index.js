var exec = require('child_process').exec;

exec('npm start', {
	cwd: './client',
}, function callback(error, stdout, stderr) {
	stdout && console.log(stdout)
	stderr && console.error(stderr)
	error && console.error(error)
});

exec('npm start', {
	cwd: './api',
}, function callback(error, stdout, stderr) {
	stdout && console.log(stdout)
	stderr && console.error(stderr)
	error && console.error(error)
});
