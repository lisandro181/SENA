let Pjugador1 = 0;
let Pjugador2 = 0;
let Jugador1turno = true; 
let jugando = true;
let plantarJugador1 = false;
let plantarJugador2 = false;

function lanzar() {
    if (!jugando) return; 

    if ((Jugador1turno && plantarJugador1) || (!Jugador1turno && plantarJugador2)) {
        alert("El jugador se plantó.");
    }

    const random = Math.floor(Math.random() * 10) + 1;

    if (Jugador1turno) {
        Pjugador1 += random;
    } else {
        Pjugador2 += random;
    }

    const Lanzar = `Lanzamiento: ${random}`; 
    const Puntaje = `Puntaje del Jugador 1: ${Pjugador1} | Puntaje del Jugador 2: ${Pjugador2}`;
    document.getElementById("resultado").innerHTML = `${Lanzar}<br>${Puntaje}`;

    if (Pjugador1 > 21 || Pjugador2 > 21) {
        jugando = false;
        const ganador = Pjugador1 <= 21 ? "Jugador 1" : "Jugador 2";
        const victoria = `¡${ganador} FELICIDADES!`;
        document.getElementById("resultado").innerHTML += `<br>${victoria}`;
        return;
    }
    
    Jugador1turno = !Jugador1turno;
    document.getElementById("turno").innerText = Jugador1turno ? "Turno del Jugador 1" : "Turno del Jugador 2";
}

function plantarse() {
    if (!jugando) return; 

    if (Jugador1turno && plantarJugador1) {
        alert("El Jugador 1 ya se plantó.");
    } 

    if (!Jugador1turno && plantarJugador2) {
        alert("El Jugador 2 ya se plantó.");
    }

    if (Jugador1turno) {
        plantarJugador1 = true;
    } else {
        plantarJugador2 = true;
    }

    const Plantado = Jugador1turno ? "Jugador 1 se plantó." : "Jugador 2 se plantó.";
    document.getElementById("resultado").innerHTML = Plantado + `<br>Jugador 1: ${Pjugador1} | Jugador 2: ${Pjugador2}`;


    if (plantarJugador1 && plantarJugador2) {
        jugando = false;
        let ganador = "";
        if (Pjugador1 > Pjugador2 && Pjugador1 <= 21) {
            ganador = "Jugador 1";
        } else if (Pjugador2 > Pjugador1 && Pjugador2 <= 21) {
            ganador = "Jugador 2";
        } else if (Pjugador1 === Pjugador2) {
            ganador = "Empate";
        } else {
            ganador = Pjugador1 > 21 ? "Jugador 2" : "Jugador 1";
        }
        document.getElementById("resultado").innerHTML += `<br>¡${ganador} Felicidades!`;
    } else {

        Jugador1turno = !Jugador1turno;
        document.getElementById("turno").innerText = Jugador1turno ? "Turno del Jugador 1" : "Turno del Jugador 2";
    }
}