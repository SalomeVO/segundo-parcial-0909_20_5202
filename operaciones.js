var input_content = document.getElementById("calculo").value;

//Declaring functions to both sections (scientific calculator and basic calculos)
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