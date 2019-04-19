// requireds
const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    for(let g=1; g <= limite; g++){
        console.log( `${ base } * ${ g } = ${ base * g } \n`);
    }
}

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ){
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }else{

        }

        let data = '';

        for(let i = 1; i <= limite; i++){
        data += `${ base } * ${ i } = ${ base * i } \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data , (err) => {
            
            if (err)
                reject(err) 
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
