
function aggiungi(nome) {
    document.getElementById("messaggio").textContent =
        nome + " è stato aggiunto al carrello.";

    document.getElementById("conferma").showModal();
}

function dettagli(nome, descrizione, prezzo, pulsante) {
    const immagine = pulsante.closest(".card").querySelector("img");

    document.getElementById("titolo").textContent = nome;
    document.getElementById("descrizione").textContent = descrizione;
    document.getElementById("prezzo").textContent = "€ " + prezzo;
    document.getElementById("immagine").src = immagine.src;
    document.getElementById("immagine").alt = nome;

    document.getElementById("modale").showModal();
}

function aggiornaTotale() {
    const quantita = document.querySelectorAll(".quantita");
    let totale = 0;

    quantita.forEach(input => {
        const numero = Math.max(1, Number(input.value) || 1);

        totale += Number(input.dataset.prezzo) * numero;
    });

    document.getElementById("totale").textContent =
        totale.toLocaleString("it-IT", {
            style: "currency",
            currency: "EUR"
        });
}

document.querySelectorAll(".quantita").forEach(input => {
    input.addEventListener("input", aggiornaTotale);
    input.addEventListener("change", () => {
        input.value = Math.max(1, Number(input.value) || 1);
        aggiornaTotale();
    });
});

if (document.querySelector(".quantita")) {
    aggiornaTotale();
}
