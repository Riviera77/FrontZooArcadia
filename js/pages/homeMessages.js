fetch("/data/messages.json")
    .then(res => res.json())
    .then(messages => {
        const index = Math.floor(Math.random() * messages.length);
        const message = messages[index];

        const element = document.querySelector("#message-accueil");
        if (element) {
            element.innerText = message;
        }
    })
    .catch(error => {
        console.error("Erreur Fetch messages.json :", error);
    });
