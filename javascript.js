const g_tierra = 9.8;

function marte (){
    const g_marte = 3.7;
    let peso = document.getElementById("peso").value;
    if (peso === '') {
        alert("Tal vez no introducido ningun número");
    } else {
        resultado = peso * g_marte / g_tierra;
        document.getElementById("planeta").innerHTML = '<b>Tu peso en <b style= color:rgb(107,107,179)>MARTE</b> es de:</b><br><img src="marte.jpg" width="180" height="180" alt="">';
        document.getElementById("respuesta").innerHTML = resultado.toFixed(2) + " Kilos";
    }
}

function jupiter (){
    const g_jupiter = 24.8;
    let peso = document.getElementById("peso").value;

    if (peso === '') {
        alert("Tal vez no introducido ningun número");
    }else{
        resultado = parseFloat(peso) * g_jupiter / g_tierra;
        document.getElementById("planeta").innerHTML = '<b>Tu peso en <b style= color:rgb(50,205,50)>JUPITER</b> es de:</b><br><img class"rounded" src="jupiter.jpg" width="180" height="180" alt="">';
        document.getElementById("respuesta").innerHTML = resultado.toFixed(2) + " Kilos";
    }  
}

function saturno (){
    const g_saturno = 10.4;
    let peso = document.getElementById("peso").value;

    if (peso === '') {
        alert("Tal vez no introducido ningun número");
    }else{
        resultado = parseFloat(peso) * g_saturno / g_tierra;
        document.getElementById("planeta").innerHTML = '<b>Tu peso en <b style= color:rgb(218,165,32)>SATURNO</b> es de:</b><br><img class"rounded" src="saturno.jpg" width="180" height="180" alt="">';
        document.getElementById("respuesta").innerHTML = resultado.toFixed(2) + " Kilos";
    }  
}


function limpiar() {
    document.getElementById("respuesta").innerHTML = "";
    document.getElementById("planeta").innerHTML = "";
    document.getElementById("peso").value = "";
}

