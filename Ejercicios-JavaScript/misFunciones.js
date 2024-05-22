/**
 * Permite convertir metros, pies, pulgadas y yardas
 * @method convertirUnidades
 * @param {String} nombre - Recibe: metro, pie, pulgada, yarda
 * @param {number} valor - Recibe el valor ingresado en el input
 */
function convertirUnidades(nombre, valor){

    if(isNaN(valor)){
        alert("El valor ingresado no es correcto");
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
    }else if(nombre==="metro"){
        document.getElementById("pulgada").value = valor*39.3701;
        document.getElementById("pie").value = valor*3.28084;
        document.getElementById("yarda").value = valor*1.09361;
    }else if(nombre==="pulgada"){
        document.getElementById("metro").value = valor*0.0254;
        document.getElementById("pie").value = valor*0.0833333;
        document.getElementById("yarda").value = valor*0.0277778;
    }else if(nombre==="pie"){
        //TAREA
    }else if(nombre==="yarda"){
        //TAREA
    }
}