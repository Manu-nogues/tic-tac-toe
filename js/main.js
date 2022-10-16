
///ARRAY notificador de quien ha ganado///

const STATUS_DISPLAY = document.querySelector('.game-notification'),
    GAME_STATE = ["", "", "", "", "", "", "", "", ""],
    WINNINGS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    WIN_MESSAGE = () => `El jugador ${casilla} ha ganado!`,
    DRAW_MESSAGE = () => `El juego ha terminado en empate!`,
    CURRENT_PLAYER_TURN = () => `Turno del jugador ${casilla}`




///Funcion para escribir y sobre escribir el tablero///

let turnos = 6
let interruptor = true;
let casillas = Array.from(document.getElementsByClassName("cell"))
casillas.map((casilla, /*index*/) => {
    casilla.addEventListener("click", () => {
        let pepito;
        if (turnos > 0) {
            if (casilla.innerHTML == "") {
                casilla.innerHTML = (interruptor) ? "X" : "O"
                pepito = casilla.innerHTML
                console.log(interruptor)
                interruptor = !interruptor;
                turnos = turnos - 1


            }

            ///funcion para poder mover las las fichas de sitio///

        } else {
            if (casilla.innerHTML == "X") {
                interruptor = true;
                (casilla.innerHTML = "")
                turnos = turnos + 1
            } else if (casilla.innerHTML == "O") {
                interruptor = false;
                (casilla.innerHTML = "")
                turnos = turnos + 1
            }
        }

        console.log(pepito)

    });
});



function reset() {
    document.querySelectorAll(".cell").forEach((casilla) => {
        casilla.innerHTML = "";
    });
}



