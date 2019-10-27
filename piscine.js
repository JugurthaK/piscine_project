var argv = require('minimist')(process.argv.slice(2));
const {createDir} = require('./src/createDir');

if (!argv.dir || !argv.sign)
    console.error(`How to use this script ?
        this_script --dir "dir-name" [--file "file_name"] --sign "int function(int a, int b)" [--out "my_binary_file"]`);

else
    createDir(argv.dir, argv.file, argv.sign, argv.out, argv.tag);