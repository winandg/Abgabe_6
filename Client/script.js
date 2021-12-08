"use strict";
const url = "http://127.0.0.1:3000";
const path1 = "/";
const path2 = "/convertDate";
const myForm = document.getElementById("myform"); //Referenzieren des Formulars
const datumeingabe = document.getElementById("datumEingabe");
const sendButton = document.getElementById("hinzufuegenButton"); //Referenzieren des Send-Buttons
const ausgabeHtml = document.getElementById("ausgabeID");
sendButton.addEventListener("click", function (evt) {
    // evt.preventDefault();
    sendForm(); // sendForm-Funktion aufrufen.
});
async function sendForm() {
    //let formData: FormData = new FormData(myForm); //Formulardaten mit unserem Formular initialisieren.
    let query = new URLSearchParams(); //Get-Parameter vorbereiten
    query.append("datum", datumeingabe.value);
    let urlWithQuery = url + path2 + "?" + query.toString(); //Formatierung der URL zum Senden an den Server
    let response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
    let responseText = await response.text(); // Warten auf den Response-Text;
    ausgabeHtml.innerHTML = responseText;
    console.log(responseText); // Ausgabe der Server-Antwort in der Konsole
}
//# sourceMappingURL=script.js.map