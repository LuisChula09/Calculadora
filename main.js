const numeros = document.getElementsByName('numero');

const operacion = document.getElementsByName('simbolo');

const igual = document.getElementsByName('igual')[0];

const borrar = document.getElementsByName('borrar')[0];

var result = document.getElementsByName('resul');
var numActual = "";
var numAnterior = "";
var oper = undefined;
numeros.forEach
    (
        function (boton) {
            boton.addEventListener('click', function () {
                agregarnumero(boton.innerText);
            })
        });

operacion.forEach
    (
        function (boton) {
            boton.addEventListener('click', function () {
                seleccionarOperador(boton.innerText);
            })
        });

igual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});

borrar.addEventListener('click', function () {
    limpiar();
    actualizarDisplay();
});

function agregarnumero(num) {
    numActual = numActual.toString() + num.toString();
}

function limpiar() {
    numActual = "";
    numAnterior = "";
    oper = undefined;
};

function actualizarDisplay() {
    result.value = numActual;
}