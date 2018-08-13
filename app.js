//import the whole exports of multiply
//const multiply = require('./multiply/multiply');
//import just the function!!!!



const { createFile, listarBase } = require('./multiply/multiply');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];
//let base = argv.base;
//console.log(argv);

switch (comando) {
    case 'listar':
        listarBase(argv.base, argv.limite);
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(file => console.log(`File ${file}  created!!`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

//let base = '5';

//console.log(module);

//let argv2 = process.argv;
//let param = argv[2];
//let base = param.split('=')[1];
//console.log(argv.base);
//console.log(argv2);