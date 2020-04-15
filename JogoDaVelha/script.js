var x = [];
var o = [];
var tab = [];

var jogador;

function Choose() {
    if (Math.floor(Math.random() * 2) == 0) {
        jogador = "o"; //define o jogador O como atual
        var j = jogador.toString();
        document.getElementById("J").textContent = "JOGADOR:  " + j.toUpperCase();
        console.log(jogador);
    } else {
        jogador = "x"; //define o jogador X como atual
        var j = jogador.toString();
        document.getElementById("J").textContent = "JOGADOR:  " + j.toUpperCase();
        console.log(jogador);
    }
}
function Casa(cs) {
    if (jogador == "x") {

        if (!o.includes(cs)) {
            document.getElementById(cs).src = "JogoDaVelha/"+jogador + ".png";
            document.getElementById("J").textContent = "JOGADOR: O ";
            x.push(cs);
            tab.push(cs);
            VerifyGame();
            jogador = (jogador == "x") ? "o" : "x";

            console.log(x + "array x");
            console.log(o + "array o");
            console.log(jogador);
        }

    } else if (jogador == "o") {

        if (!x.includes(cs)) {
            document.getElementById(cs).src = "JogoDaVelha/" +jogador + ".png";
            document.getElementById("J").textContent = "JOGADOR: X ";
            o.push(cs);
            tab.push(cs);
            VerifyGame();
            jogador = (jogador == "x") ? "o" : "x";

            console.log(x + "array x");
            console.log(o + "array o");
            console.log(jogador);
        }
    }

}

function VerifyGame() { //verticais
    if (x.includes("cs1") && x.includes("cs4") && x.includes("cs7") ||
        x.includes("cs2") && x.includes("cs5") && x.includes("cs8") ||
        x.includes("cs3") && x.includes("cs6") && x.includes("cs9") ||
        //horizontais
        x.includes("cs1") && x.includes("cs2") && x.includes("cs3") ||
        x.includes("cs4") && x.includes("cs5") && x.includes("cs6") ||
        x.includes("cs7") && x.includes("cs8") && x.includes("cs9") ||
        //diagonais
        x.includes("cs1") && x.includes("cs5") && x.includes("cs9") ||
        x.includes("cs7") && x.includes("cs5") && x.includes("cs3")) {
        alert("x ganhou");
        Resete();
    } else if (//verticais
        o.includes("cs1") && o.includes("cs4") && o.includes("cs7") ||
        o.includes("cs2") && o.includes("cs5") && o.includes("cs8") ||
        o.includes("cs3") && o.includes("cs6") && o.includes("cs9") ||
        //horizontais
        o.includes("cs1") && o.includes("cs2") && o.includes("cs3") ||
        o.includes("cs4") && o.includes("cs5") && o.includes("cs6") ||
        o.includes("cs7") && o.includes("cs8") && o.includes("cs9") ||
        //diagonais
        o.includes("cs1") && o.includes("cs5") && o.includes("cs9") ||
        o.includes("cs7") && o.includes("cs5") && o.includes("cs3")) {
        Resete();
        alert("o ganhou");

    } else if (tab.includes("cs1") && tab.includes("cs2") && tab.includes("cs3") && tab.includes("cs4") && tab.includes("cs5") && tab.includes("cs6") && tab.includes("cs7") && tab.includes("cs8") && tab.includes("cs9")) {
        alert("Ninguem ganhou");
        Resete();
    }

}

function Resete() {
    o = [];
    x = [];
    for (i = 1; i <= 9; i++) {
        console.log("cs" + i);
        document.getElementById("cs" + i).src = "";
        document.getElementById("J").textContent = "JOGADOR:  ";
        jogador = null;
    }

}
