function login() {
    var login = document.getElementById('t1').value;
    var password = document.getElementById('h1').value;

    if (login === 'admin' && password === 'admin00') {
        window.location.href = 'yes.html'; 
    } else {
        alert("Identifiants non reconnus"); 
        window.location.href = 'no.html'; 
    }
}

function retour(){
    window.location.href='index.html';
}

