
/**
 * VARIABLES GLOBALES
 */
var nickname;
var cartas; // contenedor de las cartas
var ranking; // contenedor ranking modo fácil
var reloj; // contenedor del cronómetro

var modo; // posibles valores 0, 1, 2, 3 [fácil, medio, difícil, variante a 3]
var cartas_variante; // indica la variante (2 o 3 cartas)
var cartas_giradas; // array de cartas giradas durante el turno actual
var bloqueado; // bloquear clicks

var total_mostradas; // total de cartas mostradas

var crono; // cronómetro
var timeout; // tiempo restante

var jmodos; // parse JSON 
var tiempo;

/**
 * CONSTANTES
 */
// tiempo para volver a tapar las cartas destapadas (en msec)
const TAPAR = 1000;
// cantidad de cartas según el modo [fácil, medio, difícil, variante a 3]
const NCARTAS = [8, 16, 24, 36];
// longitud del ranking
const RANKING_MAX = 5;



window.onload = function () {
    document.getElementById("jugar").addEventListener("click", empezarPartida);
    cartas = document.getElementById("contenedor_cartas");
    ranking = document.getElementById("ranking-list");
    reloj = document.getElementById("crono");

    //xtoni - si no, hauria de fer include d'aquest js i és un avorriment!
    jmodos = [{"modo": "facil", "tiempo": 80}, {"modo": "medio", "tiempo": 180}, { "modo": "dificil", "tiempo": 300}, {"modo": "variante", "tiempo": 420}];
}

/**
 * Inicializa la partida
 * 
 * Comprueba que se ha introducido un nombre y lo guarda.
 * También obtiene el modo de dificultad (fácil = 0, medio = 1, difícil = 2, variante a 3 = 3)
 */
function empezarPartida() {
    reset();
    nickname = document.getElementById("nickname").value.trim();
    if (isEmpty(nickname)) {
        alert("Debes introducir un nombre"); // alerta si no se introduce el nombre
    } else {
        var radios = document.getElementsByName("modo");
        var variante = document.getElementById("variante");

        // obtenemos el modo [fácil, medio, difícil, variante a 3] == [0, 1, 2, 3]
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                modo = parseInt(radios[i].value);
                break;
            }
        }
        if (modo == 2 && variante.checked) { // modo difícil con 3 cartas
            modo++;
        }
        prepararTablero();
    }
}

/**
 * Comprobar si un String está vacío 
 */
function isEmpty(s) {
    return (s.length === 0);
}

/**
 * Resetear la partida
 */
function reset() {
    nickname = null;
    modo = null;
    bloqueado = false;
    cartas_giradas = [];
    total_mostradas = 0;
    cartas.innerHTML = "";
    reloj.innerHTML = "";
    clearInterval(crono);
}

/**
 * Preparar el tablero de cartas
 * 
 * Cambia el tamaño del contenedor de cartas según el modo.
 * Inicicializa la cantidad de cartas que se pueden destapar a la vez por modo.
 * Añade las cartas mezcladas al contenedor de cartas.
 */
function prepararTablero() {
    switch (modo) {
        case 0:
        case 1:
            cartas_variante = 2; // variante de 2 cartas
            cartas.style.width = "700px";
            break;
        case 2:
            cartas_variante = 2; // variante de 2 cartas
            cartas.style.width = "1050px";
            break;
        case 3:
            cartas_variante = 3; // variante de 3 cartas
            cartas.style.width = "1050px";
            break;
    }

    // seleccionar el tiempo según el modo
    tiempo = jmodos[modo].tiempo;

    // calcula el número de cartas diferentes
    var n = NCARTAS[modo] / cartas_variante;

    // mostrar el cronómetro
    mostrarReloj(tiempo);

    // por cada carta diferente añadir 2-3 copias según el modo
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < cartas_variante; j++) {
            var carta = document.createElement("div");
            carta.className = "carta";
            carta.addEventListener("click", girarCarta);

            var p = document.createElement("p");
            p.innerHTML = i;
            p.className = "front";
            carta.appendChild(p);

            cartas.appendChild(carta);
        }
    }

    // mezclar las cartas de forma pseudo-aleatoria
    for (let i = cartas.children.length; i > 0; i--) {
        cartas.appendChild(cartas.children[Math.floor(Math.random() * i)]);
    }

    // inicia la cuenta atrás
    cuentaAtras();

}

/**
 * Girar una carta clicada
 * 
 * Sólo si el tablero no está bloqueado y no es una carta girada en el turno actual
 * Gira la carta añadiéndole la clase "girada"
 * Finalmente compara las cartas giradas
 */
function girarCarta() {
    if (!bloqueado && !cartas_giradas.includes(this)) {
        this.classList.add("girada");
        cartas_giradas.push(this);
        if (cartas_giradas.length == cartas_variante) {
            bloqueado = true;
            compararCartas();
        }
    }
}

/**
 * Compara las cartas giradas
 * 
 * Si las cartas son iguales se deshabilitan
 * Si son diferentes se vuelven a tapar
 * También comprueba si se ha terminado la partida
 */
function compararCartas() {
    if (sonIguales()) {
        // Deshabilitar click en cartas giradas
        cartas_giradas.map(carta => carta.removeEventListener("click", girarCarta));
        total_mostradas += cartas_variante;
        resetTurno();

        // Comprobar si se ha terminado
        if (total_mostradas == NCARTAS[modo]) {
            clearInterval(crono);
            alert("Has terminado");
            if (modo == 0) actualizarRanking(); // actualizar ranking en modo fácil
            reset();
        }

    } else {
        // Tapar cartas giradas no iguales
        setTimeout(() => {
            cartas_giradas.map(carta => carta.classList.remove("girada"));
            resetTurno();
        }, TAPAR);
    }
}

/**
 * Comprobar si las cartas giradas son iguales
 * Recorre el array de cartas giradas para ver si todas son iguales
 */
function sonIguales() {
    for (let i = 1; i < cartas_giradas.length; i++) {
        if (cartas_giradas[0].firstChild.innerHTML != cartas_giradas[i].firstChild.innerHTML) {
            return false;
        }
    }
    return true;
}

/**
 * Fin de turno
 */
function resetTurno() {
    bloqueado = false;
    cartas_giradas = [];
}

/**
 * Añadir al ranking el nick y puntuación
 */
function actualizarRanking() {

    // crear la entrada nueva (nombre - puntos)
    var nuevo = document.createElement("div");
    var nombre = document.createElement("p");
    nombre.innerHTML = nickname;
    var puntos = document.createElement("p");
    puntos.innerHTML = timeout * 100;
    nuevo.appendChild(nombre);
    nuevo.appendChild(puntos);

    // recorrer las entradas del ranking para colocar la nueva entrada en orden según los puntos
    var children = ranking.children;
    for (let i = 0; i < children.length; i++) {
        if (parseInt(nuevo.lastChild.textContent) > parseInt(children[i].lastChild.textContent)) {
            ranking.insertBefore(nuevo, children[i]);
            longRanking(); // ajusta la cantidad de entradas en el ranking
            return;
        }
    }
    ranking.appendChild(nuevo);
    longRanking(); // ajusta la cantidad de entradas en el ranking
}

/**
 * Elimina la última entrada del ranking si supera la longitud máxima permitida 
 */
function longRanking() {
    if (ranking.children.length > RANKING_MAX) {
        ranking.removeChild(ranking.childNodes[RANKING_MAX]);
    }
}

/**
 * Iniciar la cuenta atrás de la partida
 * 
 * Cuando finaliza la cuenta atrás muestra un mensaje y finaliza la partida
 */
function cuentaAtras() {
    timeout = tiempo - 1;
    crono = setInterval(function () {
        mostrarReloj(timeout);
        if (timeout == 0) { // Fin cuenta atrás
            clearInterval(crono);
            bloqueado = true;
            alert("¡Se ha acabado el tiempo!");
            if (modo == 0) actualizarRanking();
            reset();
        } else {
            timeout--;
        }
    }, 1000);
}

/**
 * Mostrar el tiempo en formato 00:00
 * @param {tiempo en segundos} t 
 */
function mostrarReloj(t) {
    var min = Math.floor(t / 60);
    var sec = Math.floor(t % 60);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);
    reloj.innerHTML = min + ":" + sec;
}

