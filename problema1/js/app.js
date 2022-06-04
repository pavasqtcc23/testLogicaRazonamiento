console.log("Problema 1");


function multiplicar(){

     numeroA = parseInt(document.getElementById("value1").value);
     numeroB = parseInt(document.getElementById("value2").value);
   
    r = multiplica(numeroA,numeroB);
    document.getElementById("resultado").value = r;
  }


  function multiplica(x,y) {
    return x > 0 ? multiplica(x-1, y) + y : 0;
  }