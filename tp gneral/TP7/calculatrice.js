function addition() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    document.getElementById('t3').value = t1 + t2;
}

function soustraction() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    document.getElementById('t3').value = t1 - t2;
}

function multiplication() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    document.getElementById('t3').value = t1 * t2;
}

function division() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    if (t2 === 0) {
        document.getElementById('t3').value = 'Erreur : Division par zéro';
    } else {
        document.getElementById('t3').value = t1 / t2;
    }
}

function parite() {
    const t1 = parseInt(document.getElementById('t1').value);
    if (!isNaN(t1)) {
        document.getElementById('t4').value = t1 % 2 === 0 ? 'Pair' : 'Impair';
    } else {
        document.getElementById('t4').value = 'Entrez un nombre';
    }
}

function permuter() {
    const t1 = document.getElementById('t1').value;
    const t2 = document.getElementById('t2').value;
    document.getElementById('t1').value = t2;
    document.getElementById('t2').value = t1;
}
