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

/**
 * Permite guardar distancia y unidad en el localStorage
 * @method guardarLS
 */
function guardarLS(){
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("2_web.html");
}

/**
 * Toma los valores de distancia y unidad del localStorage
 * para mostrarlos en un input
 * @method cargarLS
 */
function cargarLS(){
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

function dibujarCirculoCuadrado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const xMax = canvas.width;
    const yMax = canvas.height;
    ctx.fillStyle = "#ff0bb2";
    const lado = 100;
    const margen = 10;
    ctx.fillRect(0+margen,yMax-lado-margen , lado, lado);

    ctx.fillStyle = "rgba(76,175,80,0.99)";
    ctx.arc(xMax/2, yMax/2, 50, 0, 2*Math.PI);
    ctx.fill();

}

/**
 * Carga la función de dibujar en el lienzo canvas cuando
 * el usuario mueve el mouse
 * @method cargarListeners
 */
function cargarListeners(){
    document.getElementById("lienzo").addEventListener("mousemove",dibujar);
}

var bandera;

/**
 * Dibuja una línea en la posicion que determino el usuario con el mouse
 * @method dibujar
 * @param {Event} event - Evento del movimiento del mouse
 */
function dibujar(event){
    const canvas = document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    ctx.fillStyle = "#0b34ff";
    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
    }
}

/**
 * Borra el contenido del canvas
 * @method limpiarCanvas
 */
function limpiarCanvas(){
    let canvas = document.getElementById("lienzo");
    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;

    ctx.strokeStyle = "rgba(165,217,200,0.73)";
    //Dibujo de Lineas Horizontales
    for(let i = paso; i<alturaMax; ){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax,i);
        ctx.stroke();
        ctx.closePath();
        i = i+paso;
    }

    //Dibujo de Lineas Verticales
    for(let i = paso; i<anchoMax; ){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i,alturaMax);
        ctx.stroke();
        ctx.closePath();
        i = i+paso;
    }

    ctx.strokeStyle = "#ef0d0d";
    //Dibujar Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.stroke();
    ctx.closePath();

    //Dibujar Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.stroke();
    ctx.closePath();
}