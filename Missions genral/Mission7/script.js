function checkAnswers() {
    let score = 0;
    const totalQuestions = 10;
    const correctAnswers = {
        q1: "a", 
        q2: "c", 
        q3: "a", 
        q4: "b", 
        q5: "c", 
        q6: "a", 
        q7: "b", 
        q8: "b", 
        q9: "b",
        q10: "a" 
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result").innerText = `Votre score est ${score} sur ${totalQuestions}.`;

    showCorrectAnswers();
}

function showCorrectAnswers() {
    const correctAnswersText = {
        q1: "HTTP", 
        q2: "Une adresse unique d'un appareil sur un réseau",
        q3: "Domain Name System",
        q4: "Relier différents réseaux entre eux",
        q5: "IPv6 a une longueur d'adresse plus grande",
        q6: "Assigner une adresse IP automatiquement",
        q7: "Un appareil qui connecte des ordinateurs sur un même réseau",
        q8: "Assurer une transmission fiable et ordonnée des données",
        q9: "Un service permettant de masquer l'adresse IP d'un utilisateur",
        q10: "Assurer la sécurité des communications via une connexion sécurisée"
    };

    let answersList = "<h3>Les bonnes réponses :</h3><ul>";
    

    for (let i = 1; i <= 10; i++) {
        answersList += `<li>Question ${i}: ${correctAnswersText[`q${i}`]}</li>`;
    }
    
    answersList += "</ul>";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML += answersList;
    resultDiv.classList.remove("hidden");
}
