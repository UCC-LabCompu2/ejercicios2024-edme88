/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirUnidades(nombre, valor){
    console.log("Entro a la funcion de convertir Unidades")

    if(isNaN(valor)){
        alert("El valor ingresado no es un número");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    }else if(nombre=="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = 3.28084*valor;
        document.getElementById("yarda").value = 1.09361*valor;
    }else if(nombre=="pulgada"){
        //TAREA
    }else if(nombre=="pie"){
        //TAREA
    }else if(nombre=="yarda"){
        //TAREA
    }
}