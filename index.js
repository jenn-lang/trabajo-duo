//FORMA DE SOLUCION HACER TRES VARIABLES EN FUNTION PONER ...ARRAYS Y CREA UN UNA LET  YREASIGNA VALOR;CANTAC USA EN ALGUN MOMENTO. 



const listaNumeros= ('');

function mergeArrays (listaNumeros){
    let lista = listaNumeros;
    let posicion = 0;
    while (posicion <= listaNumeros.lenght){
        lista = lista + listaNumeros[posicion];
        posicion ++;
    }
    return listaNumeros;
 
}