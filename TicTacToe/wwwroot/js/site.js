// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var squares = document.getElementsByClassName("square");
for (int i = 0; i < squares.length; i++) {
    squares[i].addEventListener('drop', onDrop);

}

function onDragEnter(event) {
    event.target.style.backgroundColor = "yellow";
}

function onDrop(event) {
    console.log(event);
    /*
     * this thing doesnt work and i have no idea why NOR any desire to find out
     * i wat tot go home 
     * 
     * please mr bean let me leave its friday and ive been up sice 3:45 this morning
     * 
     */
}

function onDragExit(event) {
    event.target.style.backgroundColor = "default";
}