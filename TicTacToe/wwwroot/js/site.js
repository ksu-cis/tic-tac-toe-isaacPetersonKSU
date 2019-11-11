// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = 'it is player ${turn}'s turn';
}

function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") {
            turn = "o";
        }
        if (turn === "x") {
            turn = "x";
        }
        setTurn
    }
}