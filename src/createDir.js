const fs = require('fs');
const hb = require('handlebars')
function readSource(path)
{
    return fs.readFileSync(path, {encoding : 'utf-8'});
}
function createDir(dirname, filename, signature, out)
{
    if (!fs.existsSync(`./${dirname}`))
    {
        fs.mkdirSync(`./${dirname}`);
        console.log(`   🗂  ${dirname}`);
        
        let tmplt = hb.compile(readSource('/Users/jk/scripts/piscine/src/bundles/function.h.source'));
        let content = tmplt({"signature": signature});
        let headfile = filename;
        headfile == undefined ? headfile = dirname + ".h" : headfile += ".h";
        fs.writeFileSync(`${dirname}/${headfile}`, content);
        console.log(`       📝  ${dirname}/${headfile}`);

        tmplt = hb.compile(readSource('/Users/jk/scripts/piscine/src/bundles/function.c.source'));
        content = tmplt({"header" : headfile, "signature": signature});
        let cFile = filename;
        cFile == undefined ? cFile = dirname + ".c" : cFile += ".c";
        fs.writeFileSync(`${dirname}/${cFile}`, content);
        console.log(`       📝  ${dirname}/${cFile}`);

        tmplt = hb.compile(readSource('/Users/jk/scripts/piscine/src/bundles/main.c.source'));
        content = tmplt({"header" : headfile});
        fs.writeFileSync(`${dirname}/main.c`, content);
        console.log(`       📝  ${dirname}/main.c`);
        
        tmplt = hb.compile(readSource('/Users/jk/scripts/piscine/src/bundles/Makefile.source'));
        out == undefined ? out = "a.out" : 0;
        content = tmplt({functionFile: cFile, output: out})
        fs.writeFileSync(`${dirname}/Makefile`, content);
        console.log(`       📝  ${dirname}/Makefile`);

    }
    else  
        console.error("Sorry, directory already exists");
}

module.exports = {createDir}