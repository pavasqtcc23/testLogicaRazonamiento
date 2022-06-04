
numeros = [2,6,7,7,54,34000,4,67,45,3]





function maximo(array){
      return  Math.max(...array);
}


function minimo(array){
    return Math.min(...array);
} 

function cantidadElementos(arreglo){
     return arreglo.length
}


function porcentajeDePares(arreglo){
    var contPositivos=0;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i] % 2 === 0){
           contPositivos ++;
        }}
    return (contPositivos*100)/(arreglo.length);
}
function porcentajeDeImpares(arreglo){
    var contNegativos=0;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i] % 2 !== 0){
           contNegativos ++;
        }}
    return (contNegativos*100)/(arreglo.length);

}

function porcentajeNumerosMayoresA1000(arreglo){
    var cont=0;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i] > 1000){
            cont++;
        }
    }
    return (cont*100)/(arreglo.length);
}



function porcentajeDelNumeroMinimo(array){
       numeroMaximo = parseFloat(maximo(array));
       numeroMinimo = parseFloat(minimo(array));
    return  (numeroMinimo*100)/(numeroMaximo);
}

function porcentajeDelPromedio(array){
    numeroMaximo =  parseFloat(maximo(array));
    promedioNumeros = parseFloat(sumaArrayNumeros(array)/array.length)
    return (promedioNumeros*100)/(numeroMaximo);
}

const sumaArrayNumeros = (array) =>{
    var suma=0;
    for(let i=0;i<array.length;i++){
        suma += array[i];
    }
    return suma;
}





