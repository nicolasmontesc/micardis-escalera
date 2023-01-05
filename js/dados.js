let turno = 2;


function lanzardados() {
    let dado1 = getNumRand(1, 6);

    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    });

    if (turno == 1) {
        document.getElementById("turnos").src = "../img/dados/llave1.png";
    }
    if (turno == 2) {
        document.getElementById("turnos").src = "../img/dados/llave2.png";
    }
    if (turno == 3) {
        document.getElementById("turnos").src = "../img/dados/llave3.png";
        turno = 0;
    }
    turno += 1;
    console
    document.getElementById("ImgDado1").src = "../img/dados/" + dado1 + ".png";
    document.getElementById("ImgDado2").src = "../img/dados/" + dado2 + ".svg";


}

function startDrag(e) {
    // determine event object
    if (!e) {
        var e = window.event;
    }
    if (e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') { return };
    // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;

    // assign default values for top and left properties
    if (!targ.style.left) { targ.style.left = '0px' };
    if (!targ.style.top) { targ.style.top = '0px' };

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
    document.onmousemove = dragDiv;
    return false;

}
function dragDiv(e) {
    if (!drag) { return };
    if (!e) { var e = window.event };
    // var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left = coordX + e.clientX - offsetX + 'px';
    targ.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
}
function stopDrag() {
    drag = false;
}
window.onload = function () {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
}