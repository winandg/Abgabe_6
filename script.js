"use strict";
let idElements = 0; //Counter fuer Klassenelemente
class AngelegteEvents {
    kuenstler;
    preis;
    idElements;
    constructor(k, p) {
        this.kuenstler = k;
        this.preis = p;
        this.idElements = idElements;
        idElements++;
    }
    asString() {
        return `${this.kuenstler} kostet ${this.preis} id: ${this.idElements}`;
    }
    getKuenstler() {
        return this.kuenstler;
    }
    getPreis() {
        return this.preis;
    }
    getIDElements() {
        return this.idElements.toString();
    }
}
class EventStorage {
    static loadEvents() {
        let eventsJSON = localStorage.getItem("events") || "[]";
        for (let plan of JSON.parse(eventsJSON)) {
            addgespeichertesEvent(plan.interpret, plan.price);
        }
    }
    static storeEvent() {
        localStorage.setItem("events", JSON.stringify(AngelegteEvents));
    }
}
let kuenstlerInput = document.getElementById("inputKuenstler");
let preisInput = document.getElementById("inputPrice");
let neuesEvent = [];
let addB = document.getElementById("hinzufuegenButton");
let abspeichern = [];
addB.addEventListener("click", addEvent);

function addEvent() {
    if (kuenstlerInput.value == "" || preisInput.value == "") {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }
    let entry = new AngelegteEvents(kuenstlerInput.value, preisInput.value);
    neuesEvent.push(entry);
    EventStorage.storeEvent();
    addTableEntry(entry);
}
function addgespeichertesEvent(interpret, price) {
    if (interpret == "" || price == "") {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }
    let entry = new AngelegteEvents(kuenstlerInput.value, preisInput.value);
    neuesEvent.push(entry);
    EventStorage.storeEvent();
    addTableEntry(entry);
}
function removeTableEntry(event) {
    let element = event.currentTarget;
    let parent = event.target.parentElement;
    removeEvent(element.getAttribute("data-id"));
    parent.remove();
}
function removeEvent(itemid) {
    neuesEvent.forEach((eventelem, index) => {
        if (eventelem.getIDElements() == itemid)
            neuesEvent.splice(index, 1);
    });
    EventStorage.storeEvent();
    console.log(neuesEvent);
}
function addTableEntry(eventitem) {
    let entry = document.createElement("tr");
    let kuenstler = document.createElement("td");
    let preis = document.createElement("td");
    let deleteF = document.createElement("td");
    kuenstler.innerHTML = eventitem.getKuenstler();
    preis.innerHTML = eventitem.getPreis();
    deleteF.setAttribute("class", "trash");
    deleteF.setAttribute("data-id", eventitem.getIDElements());
    deleteF.addEventListener("click", removeTableEntry);
    entry.appendChild(kuenstler);
    entry.appendChild(preis);
    entry.appendChild(deleteF);
    document.getElementById("table2").appendChild(entry);
}
//# sourceMappingURL=script.js.map