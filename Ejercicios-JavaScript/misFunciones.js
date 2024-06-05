/**
 * Permite convertir metros, pies, pulgadas y yardas
 * @method convertirUnidades
 * @param {String} nombre - Recibe: metro, pie, pulgada, yarda
 * @param {number} valor - Recibe el valor ingresado en el input
 */
let convertirUnidades = (nombre, valor) => {
    //TODO: Debería admitir números con coma
    let metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("El valor ingresado no es correcto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(nombre==="metro"){
        metro = valor;
        pulgada = valor*39.3701;
        pie = valor*3.28084;
        yarda = valor*1.09361;
    }else if(nombre==="pulgada"){
        pulgada = valor;
        metro = valor*0.0254;
        pie = valor*0.0833333;
        yarda = valor*0.0277778;
    }else if(nombre==="pie"){
        pie = valor;
        pulgada = valor*39.3701;
        metro = valor*3.28084;
        yarda = valor*1.09361;
    }else if(nombre==="yarda"){
        yarda = valor;
        pulgada = valor*39.3701;
        pie = valor*3.28084;
        metro = valor*1.09361;
    }

    document.getElementById("metro").value = Math.round(metro*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgada*100)/100;
    document.getElementById("pie").value = pie.toFixed(2);
    document.getElementById("yarda").value = yarda.toFixed(2);
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

    //Escribir en el EJe X
    //TODO: Calcular numX en base al ancho del canvas y el paso
    //TODO: Centrar el número con el eje
    let numX=-20;
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "blue";
    for(let i=0;i<anchoMax;){
        ctx.fillText(String(numX), i, alturaMax/2);
        i += paso;
        numX++;
    }

    //Escribir en el EjeY
    //TODO: Calcular numY en base al alto del canvas y el paso
    //TODO: Centrar el número con el eje
    let numY = -15;
    for(let i = 0; i<alturaMax;){
        ctx.fillText(String(numY), anchoMax/2, i);
        i += paso;
        numY++;
    }
}

/**
 * Permite mostrar u ocultar un div en base a la selección de un radio button
 * @method mostrar_ocultar
 * @param {String} valor - Contiene: val_mostrar, val_ocultar
 */
let mostrar_ocultar = (valor) => {
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else if(valor==="val_ocultar"){
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Permite sumar 2 números ingresados por el usuario
 * @method suma
 */
let suma = () => {
    const s1 = Number(document.getElementById("nums1").value);
    const s2 = document.getElementById("nums2").value;

    document.getElementById("totalS").innerHTML = s1+Number(s2);
}

//TODO: TAREA: resta, multiplicación y División

function pasarValores(){
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;

    //window.open("segundaWeb.html#"+distancia+"#"+unidad);
    window.open(`segundaWeb.html#${distancia}#${unidad}`);
}

function tomarValores(){
    let urlCompleta = window.location.href;

    urlCompleta = urlCompleta.split("#");
    const dist = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${dist} ${unidad}`;
}

function guardarLS(){
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("2_web.html");
}

function cargarLS(){
    const dist = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");

    document.getElementById("dist").value = `${dist} ${unid}`;
}

let dibujarImagen = (posX, posY) => {
    const canvas= document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    console.log(posX, posY);
    canvas.width = canvas.width;
    const img = new Image();
    img.src = "images/auto.png";
    console.log(algo)
    if(posX<0 || posY<0){
        mostrarDialog();
    }else if(posX>canvas.width || posY>canvas.height){
        mostrarDialog();
    }else{
        img.onload = function (){
            ctx.drawImage(img, posX, posY);
        }
    }
}

x = 0;
function animarAuto(){
    const canvas= document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += 2;
    if(x>canvas.width){
        x = 0;
    }
}

var animarId;
function animarAutoNuevo(){
    const canvas= document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        animarID = requestAnimationFrame(animarAutoNuevo);
    }
    x += 2;
    if(x>canvas.width){
        x = 0;
    }
}

function animarNuevo(){
    setTimeout(cancelarNuevaAnimacion, 6000);
    requestAnimationFrame(animarAutoNuevo);
}

function cancelarNuevaAnimacion(){
    console.log(`LLamo cancelar Nueva animacion`);
    cancelAnimationFrame(animarId);
}

var intervalId;
function comenzarAnimacion(){
    intervalId = setInterval(animarAuto, 15);
    setTimeout(detenerAuto, 6000);
}

function detenerAuto(){
    clearInterval(intervalId);
}

function mostrarDialog(){
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

function cerrarDialog(){
    const dialog = document.getElementById("myDialog");
    dialog.close();
}