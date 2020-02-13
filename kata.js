function returnObjeto (objeto){
    let keysObjetos= Object.keys(objeto);
    let devolver = "";
    let valorObjeto = "";
    let keySeleccionada = ""

    for (let i = 0; i<keysObjetos.length;i++){
        keySeleccionada = keysObjetos[i];
        valorObjeto = objeto[keySeleccionada];

        devolver += keySeleccionada + ': ' + valorObjeto + ', ';
    }
    devolver = devolver.substr(0, devolver.length - 2)

    return devolver;
}

const objetoKike = {
    name:'kike',
    surname:'mejia',
    age:25
};

console.log(returnObjeto(objetoKike))