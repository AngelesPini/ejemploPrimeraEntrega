let usuario = prompt('ingrese su nombre');
let edad = prompt('ingrese su edad')

function arrojarDatos(){
if (edad < 21){
    alert('usted es inadmitido. Vuelva cuando cumpla 21 años')
}else if (edad >= 21){
    alert('bienvenido a nuestro a sistema!')
} else{
    alert('por favor ingrese una edad válida')
}
}
arrojarDatos()


// A ESTE CODIGO LE FALTA UN BUCLE PARA QUE SE REINICIE CUANDO UN USUARIO ES MENOR DE EDAD. INTENTAR RESOLVERLO