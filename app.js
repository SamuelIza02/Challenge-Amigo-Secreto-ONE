let amigosLista = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;

    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
    }else{
        amigosLista.push(amigo);
        console.log(amigosLista);
    }
    
    limpiarCaja();
    actualizarLista();
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}