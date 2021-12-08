const url: string = "http://127.0.0.1:3000";
const path1: string = "/"; 
const path2: string = "/convertDate";

const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform"); //Referenzieren des Formulars
const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("datumEingabe"); //Referenzieren des Send-Buttons

sendButton.addEventListener("click", function(evt: Event){
        evt.preventDefault();
        sendForm(); // sendForm-Funktion aufrufen.
    });
async function sendForm(): Promise<void> {

        let formData: FormData = new FormData(myForm); //Formulardaten mit unserem Formular initialisieren.
        let query: URLSearchParams = new URLSearchParams(<any>formData); //Get-Parameter vorbereiten
        let urlWithQuery: string = url + path1 + "?" + query.toString(); //Formatierung der URL zum Senden an den Server
     
        let response: Response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
        let responseText: string = await response.text(); // Warten auf den Response-Text;
        console.log(responseText); // Ausgabe der Server-Antwort in der Konsole
    }