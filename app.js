//const multiplicar = require('./multiplicar/multiplicar')
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv


//let base = '5'

//console.log(module)
//console.log(multiplicar.crearArchivo)
//console.log(process)
//console.log(process.argv)
//let argv2 = process.argv
//let parametro = argv[2]
//let base = parametro.split('=')[1]
//console.log(argv.base)
//console.log('limite:',argv.limite)
//console.log(argv2)

let commando = argv._[0]

switch(commando){
	case 'listar':
		listarTabla(argv.base,argv.limite)
		.catch(e => console.log(e))
		break

	case 'crear':
		crearArchivo(argv.base)
		.then(archivo => console.log(`Archivo creado: ${archivo}`))
		.catch(e => console.log(e))
		break
}

/*crearArchivo(base)
	.then(archivo => console.log(`Archivo creado: ${archivo}`))
	.catch(e => console.log(e))*/