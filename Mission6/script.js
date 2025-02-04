// Exercice 1: Convertir Celsius en Fahrenheit
function convertirTemperature() {
    const celsius = prompt("Entrez la température en °C :");
    const fahrenheit = (celsius * 9 / 5) + 32;
    alert(`${celsius}°C = ${fahrenheit}°F`);
}

// Exercice 2: Ajuster la taille du texte
function augmenterTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille + 2) + 'px';
}

function reduireTaille() {
    let texte = document.getElementById('texte');
    let taille = parseInt(window.getComputedStyle(texte).fontSize);
    texte.style.fontSize = (taille - 2) + 'px';
}

// Exercice 3: Compter le nombre de clics
function incrementer() {
    let compteur = parseInt(document.getElementById('compteur').textContent);
    document.getElementById('compteur').textContent = compteur + 1;
}

// Exercice 4: Salutation selon l'heure
function saluer() {
    const heure = new Date().getHours();
    if (heure < 12) alert("Bonjour");
    else if (heure < 18) alert("Bon après-midi");
    else alert("Bonsoir");
}

// Exercice 5: Calculer l'âge
function calculerAge() {
    const anneeNaissance = prompt("Entrez votre année de naissance :");
    const anneeActuelle = new Date().getFullYear();
    alert(`Votre âge est : ${anneeActuelle - anneeNaissance}`);
}

// Exercice 6: Trouver le nombre maximum
function trouverMax() {
    const nombres = prompt("Entrez des nombres séparés par des virgules :").split(",");
    const max = Math.max(...nombres.map(Number));
    alert(`Le nombre maximum est : ${max}`);
}

// Exercice 7: Compter les voyelles
function compterVoyelles() {
    const texte = prompt("Entrez un texte :").toLowerCase();
    const voyelles = texte.match(/[aeiouy]/g);
    alert(`Nombre de voyelles : ${voyelles ? voyelles.length : 0}`);
}

// Exercice 8: Calculer le pourboire
function calculerPourboire() {
    const montant = parseFloat(prompt("Entrez le montant de l'addition (€):"));
    const pourboire = (montant * 0.15).toFixed(2);
    alert(`Le pourboire recommandé est : ${pourboire} €`);
}

// Exercice 9: Vérifier si un nombre est pair ou impair
function verifierPairImpair() {
    const nombre = parseInt(prompt("Entrez un nombre:"));
    const resultat = nombre % 2 === 0 ? "pair" : "impair";
    alert(`Le nombre ${nombre} est ${resultat}.`);
}

// Exercice 10: Calculer les calories brûlées
function calculerCalories() {
    const poids = parseFloat(prompt("Entrez votre poids (kg) :"));
    const temps = parseFloat(prompt("Entrez le temps de course (minutes) :"));
    const calories = (poids * 0.063) * temps;
    alert(`Vous avez brûlé environ ${calories.toFixed(2)} calories.`);
}

// Exercice 11: Calculer le périmètre d'un rectangle
function calculerPerimetre() {
    const longueur = parseFloat(prompt("Entrez la longueur du rectangle (cm) :"));
    const largeur = parseFloat(prompt("Entrez la largeur du rectangle (cm) :"));
    const perimetre = 2 * (longueur + largeur);
    alert(`Le périmètre du rectangle est : ${perimetre} cm`);
}

// Exercice 12: Créer un tableau dynamique
function creerTableau() {
    const taille = parseInt(prompt("Entrez la taille du tableau :"));
    const tableau = [];
    for (let i = 0; i < taille; i++) {
        tableau.push(prompt(`Entrez l'élément ${i+1}:`));
    }
    alert(`Tableau créé: ${tableau.join(', ')}`);
}

// Exercice 13: Vérifier si un mot est un palindrome
function verifierPalindrome() {
    const mot = prompt("Entrez un mot :");
    const motInverse = mot.split('').reverse().join('');
    alert(mot === motInverse ? "Le mot est un palindrome." : "Le mot n'est pas un palindrome.");
}

// Exercice 14: Convertir un nombre en binaire
function convertirBinaire() {
    const nombre = parseInt(prompt("Entrez un nombre :"));
    alert(`Le nombre ${nombre} en binaire est : ${nombre.toString(2)}`);
}

// Exercice 15: Animer un élément
function animerElement() {
    let elem = document.createElement('div');
    elem.textContent = "Je suis animé!";
    elem.style.position = "absolute";
    elem.style.left = "0px";
    elem.style.top = "0px";
    elem.style.backgroundColor = "red";
    elem.style.padding = "10px";
    document.body.appendChild(elem);

    let posX = 0;
    let posY = 0;
    function deplacer() {
        if (posX < window.innerWidth - 100) {
            posX += 5;
            posY += 3;
            elem.style.left = posX + "px";
            elem.style.top = posY + "px";
            requestAnimationFrame(deplacer);
        }
    }
    deplacer();
}

// Fonction pour afficher le code source
function afficherCode(id) {
    const codeBox = document.getElementById(id);
    codeBox.style.display = codeBox.style.display === 'none' ? 'block' : 'none';
}
