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

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigosLista.length; i++){
        let li = document.createElement("li");
        li.textContent = amigosLista[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");

    if(amigosLista.length != 0){
        let amigoSorteado = amigosLista[Math.floor(Math.random() * amigosLista.length)];
        lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
    }else{
        alert("No hay amigos en la lista.");
    }
    
}

