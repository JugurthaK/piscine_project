var argv = require('minimist')(process.argv.slice(2));
const {createDir} = require('./src/createDir');


createDir(argv.dir, argv.file, argv.sign, argv.out, argv.tag);