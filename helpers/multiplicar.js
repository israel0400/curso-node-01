const fs = require('fs');
const colors = require('colors');
colors.enable();

let salida = '';
let consola = '';

const crearArchivo = ( base = 5, list = false, hasta = 10) => {
	return new Promise((resolve,reject ) => {
		if(list === true){
			console.log(colors.red('==================='));
			console.log(colors.red(`Tabla del ${base}`));
			console.log(colors.red('==================='));
		}
			for(let i = 1; i <= hasta; i++){
				resultado = base * i;
				salida += `${base} x ${i} = ${resultado}\n`
				consola += colors.rainbow(`${base} x ${i} = ${resultado}\n`)
			}
		if(list === true){	
			console.log(consola);
		}
		
		fs.writeFileSync( `./salida/tabla-${base}.txt`,salida);
			resolve(`Tabla-${base}.txt`.rainbow)			
	})
}

module.exports = {
	crearArchivo
}