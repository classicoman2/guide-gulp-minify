
window.onload = function () {
    document.getElementById("jugar").addEventListener("click", empezarPartida);
}


function empezarPartida() {
    document.getElementById("result").innerHTML = document.getElementById("nickname").value
}

