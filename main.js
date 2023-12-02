heure = document.getElementById("heure");

// Actualisation de l'horloge chaque seconde
setInterval(() => {
    heure.innerText = moment().format("HH:mm:ss");
}, 1000);