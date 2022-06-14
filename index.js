/*Esta es la lista de las variables que se han de tener, revisamos que las funciones vienen en relación al archivo con el objeto document y el metodo getElementById y querySelectorAll*/
/*Para la primer parte del display donde viene el historial de numeros*/const display_valorAnterior = document.getElementById('valor_anterior');
/*Para el valor del display actual, el que carga los valores que vas metiendo en el momento*/const display_valorActual = document.getElementById('valor_actual');
/*Para todos los botones activadores de los valores numericos*/const botones_numeros = document.querySelectorAll('.numero');
/* para todos los valores con operadores */ const botones_operadores = document.querySelectorAll('.operador');

const display = new Display(display_valorActual, display_valorAnterior);

botones_numeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregar_numero(boton.innerHTML));
});

botones_operadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value));
});
