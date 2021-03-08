const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
		.option('b',{
			alias: 'base',
			type: 'number',
			demandOption: true
		})
		.check(( argv, options) => {
			if(isNaN(argv.b)){
				throw 'La base debe ser un numero'
			}
			return true;
		})
		.option('l',{
			alias: 'list',
			type: 'boolean',
			default: false,
			demandOption: false
		})
		.option('h',{
			alias: 'hasta',
			type: 'number',
			default: 10,
			demandOption: false,
			description: 'Hasta este numero llegara la tabla'
		})
		.argv;

console.clear();
//console.log(process.argv);
console.log(argv);


//const base = 3;

crearArchivo( argv.b,argv.l,argv.h )
	.then(nombreArchivo => console.log(nombreArchivo,'creado'))
	.catch(err => console.log(err));