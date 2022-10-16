
///ARRAY notificador de quien ha ganado///

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
                
                interruptor = !interruptor;
                turnos = turnos - 1

                console.log(checkWinner())
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
                console.log(checkWinner())
            }
        }

     

    });
});

const checkWinner = () => {
    
return  (casillas[0].innerHTML != "" && casillas[0].innerHTML == casillas[1].innerHTML && casillas[0].innerHTML == casillas[2].innerHTML) ||
        (casillas[0].innerHTML != "" && casillas[0].innerHTML == casillas[3].innerHTML && casillas[0].innerHTML == casillas[6].innerHTML) ||
        (casillas[0].innerHTML != "" && casillas[0].innerHTML == casillas[4].innerHTML && casillas[0].innerHTML == casillas[8].innerHTML) ||
        (casillas[1].innerHTML != "" && casillas[1].innerHTML == casillas[4].innerHTML && casillas[1].innerHTML == casillas[7].innerHTML) ||
        (casillas[2].innerHTML != "" && casillas[2].innerHTML == casillas[5].innerHTML && casillas[2].innerHTML == casillas[8].innerHTML) ||
        (casillas[3].innerHTML != "" && casillas[3].innerHTML == casillas[4].innerHTML && casillas[3].innerHTML == casillas[5].innerHTML) ||
        (casillas[6].innerHTML != "" && casillas[6].innerHTML == casillas[7].innerHTML && casillas[6].innerHTML == casillas[8].innerHTML) ||
        (casillas[2].innerHTML != "" && casillas[2].innerHTML == casillas[4].innerHTML && casillas[2].innerHTML == casillas[6].innerHTML);

        
}





function reset() {
    document.querySelectorAll(".cell").forEach((casilla) => {
        casilla.innerHTML = "";
    });
}

const showWinner = () => {
    let nameWinner;
    if (p1Turn) {
        nameWinner=player2.nombre;
    } else {
        nameWinner=player1.nombre;
    }
    sessionStorage.setItem('winner', nameWinner);
    window.location="ganador.html";
}

