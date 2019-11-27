//requireds
const fs = require('fs')

let listarTabla = (base, limite = 10) => {
	return new Promise ((resolve,reject) =>{
		if (!Number(base)){
			reject(`El valor introducido de base ${base} no es número`)
			return
		}
		if (!Number(limite)){
			reject(`El valor introducido de limite ${limite} no es número`)
			return
		}
		for (let i=1; i<=limite; i++){
			resolve (console.log(`${base} * ${i} = ${base*i}`))	
		}
	})
}

let crearArchivo = (base, limite = 10) => {
	return new Promise ((resolve,reject)=>{
		
		if (!Number(base)){
			reject(`El valor introducido ${base} no es número`)
			return
		}
		
		let data = ''

		for (let i=1; i<=limite; i++){
			data+= `${base} * ${i} = ${base*i}\n`	
		}
		
		fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
			if (err) 
			  reject(err);
			else
				resolve(`tabla-${base}.txt`)
		})
	})
}

module.exports ={
	crearArchivo,
	listarTabla
}