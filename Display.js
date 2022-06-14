//Esta es la clase encargada de mostrar en pantalla y de interactuar con los botones para saber que procedimientos debe hacer y como debe operar según la accion de los botones.
class Display{
    constructor(display_valorAnterior, display_valorActual){
        this.display_valorActual = display_valorActual;
        this.display_valorAnterior = display_valorAnterior;
        this.calculadora = new Calculador();
        this.tipo_operacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            divi: '/',
            multi: 'x',
            restar: '-'
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrar_todo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipo_operacion = undefined;
        this.imprimirValores();
    }

    agregar_numero(numero){
        if(numero === '.' && this.valorActual.includes('.')) return //Revisa si existe un punto dentro del display y si el proximo valor es un punto, cancela toda acción, sólo deja agregar un valor.
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();

    }

    imprimirValores(){
        this.display_valorActual.textContent = this.valorActual;
        this.display_valorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipo_operacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorAnterior) || isNaN(valorActual)){
            return 
        }else{
            this.valorActual = this.calculadora[this.tipo_operacion](valorAnterior, valorActual);
        }
    }

    computar(tipo){
        this.tipo_operacion !=='igual' && this.calcular();
        this.tipo_operacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = ' ';
        this.imprimirValores();
    }
}