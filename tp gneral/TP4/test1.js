function test_age(){
    let age = prompt("Quel est votre âge");
    if (age < 18 ) {
        document.write("Vous etes mineur");
        document.body.style.backgroundColor="red";
    }
    else{
        document.write("Vous etes majeur");
        document.body.style.backgroundColor="green";
    }
}

function calcul_moyenne(){
    var n1 = prompt("Donner la première note");
    var n2 = prompt("Donner la deuxième note");
    var n3 = prompt("Donner la troisième note");

    var note1 = Number(n1);
    var note2 = Number(n2);
    var note3 = Number(n3);

    // Validation des notes
    if (note1 > 20 || note2 > 20 || note3 > 20 || note1 < 0 || note2 < 0 || note3 < 0) {
        document.write("Non valide");
        return;
    }

    var somme = note1 + note2 + note3;
    document.write("Voici la somme: " + somme + "<br>");

    var moyenne = somme / 3;
    document.write("Voici la moyenne: " + moyenne + "<br>");

    
    if (moyenne < 10) {
        document.write("Refusé");
        document.body.style.backgroundColor = "red";
    } else {
        document.write("Admis");
        document.body.style.backgroundColor = "green";
    }
}


function test_couleur(){
    let couleur = prompt("Donner une couleur");
    if (couleur == "rouge" ||couleur == "red") {
         document.body.style.backgroundColor = "red"
    }

     else if (couleur == "bleu" ||couleur == "bleu") {
        document.body.style.backgroundColor = "bleu"
    }

    else if (couleur == "green" ||couleur == "green") {
        document.body.style.backgroundColor = "green"
    }

    else if (couleur == "pink" ||couleur == "pink") {
        document.body.style.backgroundColor = "pink"
    }
    
    else{
        alert("Couleur non comprise")
    }
}


