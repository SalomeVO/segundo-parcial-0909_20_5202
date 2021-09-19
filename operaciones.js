var input_content = document.getElementById("calculo").value;

function todoEliminado (tecla) {    
    switch(tecla) {
    
                    case 'C':
                        document.getElementById("calculo").value = ' ';
                    break;
    
                    case '=':
                    var resultado = eval(document.getElementById("calculo").value);
                    document.getElementById("calculo").value = resultado;
                    break;
    
                    default:
                        document.getElementById("calculo").value = document.getElementById("calculo").value + tecla;
                    break;
    }
}

function unEliminado(){
    var actual = document.getElementById("calculo").value;
    var nuevoIngreso = actual.substring(0, actual.length-1);

    document.getElementById("calculo").value = nuevoIngreso;
}

function masMenos(){
    var actual = document.getElementById("calculo").value;
    var nuevoIngreso = actual * -1;
    document.getElementById("calculo").value = nuevoIngreso;
}

function sin(dato_1){
    r = Math.sin(dato_1);
    return r ;
}

function cos(dato_1){ 
    r = Math.cos(dato_1);
    return r;
}

function tan(dato_1){
    r = Math.tan(dato_1);
    return r;
}

function raiz(dato_1){
    r = Math.sqrt(dato_1);
    return r;
}

function pow(dato_1, dato_2){
    r = Math.pow(dato_1, dato_2);
    return r;
}

function prc(dato_1, dato_2){
    r = ((dato_1/100)*dato_2);
    return r;
}

function log(dato_1){
    r = Math.log10(dato_1);
    return r;
}

