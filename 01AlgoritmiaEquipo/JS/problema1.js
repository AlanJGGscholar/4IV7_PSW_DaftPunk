function problema1(){
    numero1 = parseInt(document.getElementById().value);
    numero2 = parseInt(document.getElementById().value);

    validarNumeros(numero1, "en el campo 1");
    validarNumeros(numero2, "en el campo 2");
    if(document.getElementById().value == "" || document.getElementById().value == ""){
        alert("Ingrese los números");
    } else if(numero1 = numero2){
        document.getElementById().textContent = "El producto de ambos números es " + (numero1 * numero2);
    } else if(numero1 > numero2){
        document.getElementById().textContent = "La diferencia del numero 1 menos numero 2 es " + (numero1 - numero2);
    } else {
        document.getElementById().textContent = "La suma de ambos números es " + (numero1 + numero2);
    }

}

function validarNumeros(campo, nombreCampo){
    var checkOk = "1234567890";
    var checkStr = campo
    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
        }

        if(j == checkOk.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente números en " + nombreCampo);
        return false;
    }
}