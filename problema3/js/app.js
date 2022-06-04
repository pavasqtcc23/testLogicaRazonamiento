



var letrasMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var letrasMayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'
,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var caracteres = ['!','@','#','$','%','ˆ','&','*','-','_','+','=','?',' ']

contrasenia = "df&8gAj35k$Bxcv7"

const validarLongitud =(password) =>{
      return password.length >= 16
}

const contieneMinusculas= (password) =>{
     pass = password.split('')
     var flag = false;
    for(let i =0;i < password.length;i++){
       if(letrasMinusculas.includes(pass[i])){
         flag = true;
       }
    }
    return flag;
}

const contieneMayusculas= (password) =>{
  pass = password.split('')
  var flag = false;
 for(let i =0;i < password.length;i++){
    if(letrasMayusculas.includes(pass[i])){
      flag = true;
    }
 }
 return flag;
}


const tieneLetraDuplicadaConsecutiva = (password)=>{
       var flag =false;
       for(var i = 0; i < password.length; i++){
          if((password[i] === password[i+1]) && 
             (letras.includes(password[i]) && letras.includes(password[i+1]))){
            flag=true;
          }
       }
return flag;
}


const tieneDosNumerosDuplicadas = (password)=>{
  var flag =false;
  for(var i = 0; i < password.length; i++){
     if((password[i] === password[i+1]) && 
        (password[i] >= '0' && password[i] <= '9') && 
        password[i+1] >= '0' && password[i+1] <= '9'){
        flag=true;
     }
  }
return flag;
}

const tieneAlMenosCuatroNumeros = (password)=>{
  var contador=0;
  var flag=false;
  for(var i = 0; i < password.length; i++){
    if (password[i] >= '0' && password[i] <= '9') { 
      contador++;
    }
  }
  if(contador >= 4){
    flag = true;
  }
  return flag;
}

const tieneMinimoDosCaracteres = (password) =>{
  var contador =0;
  var flag=false;
  for(var i = 0; i < password.length; i++){
    if(caracteres.includes(password[i])){
      contador++;
      }
  }
  if(contador >= 2) {
    flag = true
  }
return flag;     
}


const noTieneCaracterRepetido = (password) =>{
  
 var contador =  password.split('').filter((c, i, a)=>a.indexOf(c) !== i 
                 && caracteres.includes(c)).length
 return contador !== 1;
}


const validarContrasenia = (password) => {
      return validarLongitud(password) &&
             contieneMinusculas(password) &&
             contieneMayusculas(password) &&
             !tieneLetraDuplicadaConsecutiva(password) &&
             tieneAlMenosCuatroNumeros(password) &&
             tieneMinimoDosCaracteres(password) &&
             noTieneCaracterRepetido(password)           
}


