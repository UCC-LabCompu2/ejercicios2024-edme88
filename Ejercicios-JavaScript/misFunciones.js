/**
 * Permite convertir metros, pies, pulgadas y yardas
 * @method convertirUnidades
 * @param {String} nombre - Recibe: metro, pie, pulgada, yarda
 * @param {number} valor - Recibe el valor ingresado en el input
 */
function convertirUnidades(nombre, valor){
    //TODO: Debería admitir números con coma
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

/**
 * Permite convertir grados a radianes y viceversa
 * @method convertirGR
 * @param {String} id - grados - radianes
 */
function convertirGR(id){
    let grad, rad;

    //TODO: Agregar mensaje de error cuando se ingresan letras
    //TODO: Debería admitir números con coma
    if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;
        document.getElementById("radianes").value = rad;
    }else if(id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
        document.getElementById("grados").value = grad;
    }
}