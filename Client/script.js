"use strict";
const url = "http://127.0.0.1:3000";
const path1 = "/";
const path2 = "/convertDate";
const myForm = document.getElementById("myform"); //Referenzieren des Formulars
const sendButton = document.getElementById("datumEingabe"); //Referenzieren des Send-Buttons
sendButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    sendForm(); // sendForm-Funktion aufrufen.
});
async function sendForm() {
    let formData = new FormData(myForm); //Formulardaten mit unserem Formular initialisieren.
    let query = new URLSearchParams(formData); //Get-Parameter vorbereiten
    let urlWithQuery = url + path1 + "?" + query.toString(); //Formatierung der URL zum Senden an den Server
    let response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
    let responseText = await response.text(); // Warten auf den Response-Text;
    console.log(responseText); // Ausgabe der Server-Antwort in der Konsole
}
//# sourceMappingURL=script.js.map