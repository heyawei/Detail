var child_process = require('child_process');
 var child = child_process.spawn(process.execPath,['console.js']);
child.stdout.pipe(process.stdout);