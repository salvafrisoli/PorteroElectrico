
let numAgregado = 0;

const agregarNumero = (numEnviado) => {
    console.log("llegamo")
    let pisos = document.getElementById("piso").value;


    numAgregado = numAgregado + 1;
    if (numAgregado <= 2) {
        document.getElementById("piso").value = pisos + numEnviado;
    }   else if (numAgregado == 3) {
        document.getElementById("dpto").value = numEnviado;
        }
}

const llamarDpto = () => {
    let pisos = parseInt(document.getElementById("piso").value);
    let dptos = parseInt(document.getElementById("dpto").value);

    if (pisos >= 0 && pisos <= 42) {
        if (dptos >= 1 && dptos <= 8) {
            document.getElementById("mensaje").value = `Llamando al piso ${pisos} departamento ${dptos}`;

        }
        else {
            document.getElementById("mensaje").value = `Ingrese un departamento valido`;

        }
    }
    else {
        document.getElementById("mensaje").value = `Ingrese un piso valido`;
    }

}

const borrarTodo = () => {
    document.getElementById("piso").value = null;
    document.getElementById("dpto").value = null;
    document.getElementById("mensaje").value = null;
    numAgregado = 0;
}

