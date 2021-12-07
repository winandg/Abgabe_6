/*Aufgabenstellung für Server
verpflichtend


Implementieren Sie einen lokalen Node.js Server, welcher zwei Routen (Pfadnamen) verarbeitet.

Der abgelegte Server soll auf dem Port 3000 erreichbar sein.

Die erste Route stellt den Default-Pfad ("/") dar und soll den String "Server erreichbar" zurückgeben.

Die zweite Route soll über den Pfad ("/convertDate)" erreichbar sein. Wenn der Pfad aufgerufen wird, soll ein Date-Parameter entgeben genommen, verarbeitet und in folgendem Format zurückgegeben werden:
// Beispielrückgabe
 Day: 3, Month: December, Year: 2021
Aufgabenstellung für Client
verpflichtend


Erstellen Sie eine neue HTML-Seite, welche ein Formular mit einem Input-Feld vom Typ Datum enthält (Diese Webseite soll als Client für den Server dienen).

Füge Sie ihrer HTML-Datei ein Button hinzu, welcher durch ein Click-Event die Formulardaten mit Hilde der HTTP-Anfragemethode GET an den Server weitergeben. Zum senden der Daten an den Server soll die Fetch-Funktion benutzt werden.

Die Rückgabe vom Server sollen auf der Webseite ausgegeben werden.
*/
//import* as http from "http";

let idElements: number = 0; //Counter fuer Klassenelemente

const hostname: string = "127.0.0.1";
const port: number = 3000;

//const server: http.Server = http.createServer(
 

class AngelegteEvents{

private kuenstler: string;
private preis: string;
private idElements: number;

constructor(k: string, p: string){

    this.kuenstler = k;
    this.preis = p;
    this.idElements = idElements;

    idElements++;
    
}
asString(): string {
    return `${this.kuenstler} kostet ${this.preis} id: ${this.idElements}`;
}

getKuenstler(): string {
    return this.kuenstler;
}

getPreis(): string {
    return this.preis;
}

getIDElements(): string {
    return this.idElements.toString();
}
}

class EventStorage {
    static loadEvents(): void {
        let eventsJSON: string = localStorage.getItem("events") || "[]";
        for (let plan of JSON.parse(eventsJSON)) {
            addgespeichertesEvent(plan.interpret, plan.price);
        }
    }

    static storeEvent(): void {
        localStorage.setItem("events", JSON.stringify(AngelegteEvents));
    }
}

let kuenstlerInput: HTMLInputElement = <HTMLInputElement>document.getElementById("inputKuenstler");
let preisInput: HTMLInputElement = <HTMLInputElement>document.getElementById("inputPrice");

let neuesEvent: AngelegteEvents[] = [];
let addB: HTMLElement = document.getElementById("hinzufuegenButton");
let abspeichern: Event[] = [];
addB.addEventListener("click", addEvent);

function addEvent(): void {
    if (kuenstlerInput.value == "" ||  preisInput.value == "") {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }
    let entry: AngelegteEvents = new AngelegteEvents(kuenstlerInput.value, preisInput.value);
    neuesEvent.push(entry);
    EventStorage.storeEvent();
    addTableEntry(entry);
}

function addgespeichertesEvent(interpret: string, price: string): void {
    if (interpret == "" || price == "") {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }
    let entry: AngelegteEvents = new AngelegteEvents(kuenstlerInput.value, preisInput.value);
    neuesEvent.push(entry);
    EventStorage.storeEvent();
    addTableEntry(entry);
}


function removeTableEntry(event: Event): void {
    let element: HTMLElement = <HTMLElement>event.currentTarget;
    let parent: HTMLElement = ( <HTMLElement>event.target ).parentElement;
    removeEvent(element.getAttribute("data-id"));
    parent.remove();
}

function removeEvent(itemid: string): void {
    neuesEvent.forEach((eventelem, index) => {
        if (eventelem.getIDElements() == itemid) neuesEvent.splice(index, 1);
    });
    EventStorage.storeEvent();
    console.log(neuesEvent);
}
function addTableEntry(eventitem: AngelegteEvents): void {
 
    let entry: HTMLTableRowElement =      document.createElement("tr");
    let kuenstler: HTMLTableCellElement = document.createElement("td");
    let preis: HTMLTableCellElement =     document.createElement("td");
    let deleteF: HTMLTableCellElement =     document.createElement("td");

    kuenstler.innerHTML = eventitem.getKuenstler();
    preis.innerHTML = eventitem.getPreis();

    deleteF.setAttribute("class", "trash");
    deleteF.setAttribute("data-id", eventitem.getIDElements());
    deleteF.addEventListener("click", removeTableEntry);

    entry.appendChild(kuenstler);
    entry.appendChild(preis);
    entry.appendChild(deleteF);

    document.getElementById("tabelleEvents")!.appendChild(entry); 
}

