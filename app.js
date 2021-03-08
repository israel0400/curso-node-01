const fs = require('fs');

console.clear();

const multiplicar = ( base ) => {
	console.log('===================');
	console.log(`Tabla del ${base}`);
	console.log('===================');
	for(let i = 1; i <= 10; i++){
		resultado = base * i;
		salida += `${base} x ${i} = ${resultado}\n`
	}
	console.log(salida);
	fs.writeFileSync( `tabla-${base}.txt`,salida, (err) => {
		if(err) throw err;
		console.log(`Tabla-${base}.txt creado`);
	})
}
const base = 4;
let salida = '';

multiplicar(base);