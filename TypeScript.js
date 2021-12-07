"use strict";
// -- [Aufgabe 1]
/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
let age = 23;
/**
 * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
 */
let firstName = `Aurel`;
function func1(age) {
    return 2021 - age;
}
let output = func2(firstName);
function func3(meal) {
    console.log(`Ich esse gerne ${meal || "Pizza"}.`);
    return func1(age) > 1995
        ? `Ich gehöre zur Generation Z`
        : `Ich gehöre zur Generation Y`;
}
console.log(output);
function func2(name) {
    console.log(`Ich heiße ${name}.`);
    return func3();
}
/* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
 * Ich heiße Aurel.
Ich esse gerne Pizza.
Ich gehöre zur Generation Z
 */
// -- [Aufgabe 2]
let events = [
    ["Mark Knopfler", 10.1],
    ["Pink Floyd", 15.9],
    ["Metallica", 20.1],
    ["Michael Bublé", 11.1],
    ["Dire Straits", 12.2],
    ["Mariah Carey", 1.1],
    ["Cat Stevens", 12.99],
    ["Mark Forster", 2.1],
    ["Helene Fischer", 3.1],
    ["Bee Gees", 25.2],
];
// -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
// Lösung a) ...
console.log(events.length);
// Lösung b) ...   /* Korrektur: for schleife eingebunden */
for (let i = 0; i < events.length; i++) {
    console.log(events[i][0]);
    console.log(events[i][1]);
}
// Lösung c) ...
function Ticket(array) {
    let result = 0;
    for (let i = 1; i < array.length; i++) {
        let one = events[i][1];
        if (one > result)
            result = one;
    }
    return result;
}
console.log(Ticket(events));
// Lösung d) ...
function Künstlername(name) {
    for (let i = 0; i < events.length; i++) {
        if (name == events[i][0])
            return true;
    }
    return false;
}
// Lösung e) ...
function factorial(n) {
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    console.log(result);
}
factorial(10);
// Lösung f) ... /* Korrektur: Methodenaufruf eingefügt */
function TeilbarDurch3() {
    for (let i = 1; i < 33; i++) {
        console.log(i * 3);
    }
    console.log(100 % 3);
}
TeilbarDurch3();
// Lösung g) ...
class ConcertEvent {
    interpret;
    price;
    constructor(interpret, price) {
        this.interpret = interpret;
        this.price = price;
    }
    show() {
        console.log(this.interpret);
        console.log(this.price);
    }
}
// Lösung h) ... 
let events2 = [
    new ConcertEvent("Mark Knopfler", 10.1),
    new ConcertEvent("Pink Floyd", 15.9),
    new ConcertEvent("Metallica", 20.1),
    new ConcertEvent("Michael Bublé", 11.1),
    new ConcertEvent("Dire Straits", 12.2),
    new ConcertEvent("Mariah Carey", 1.1),
    new ConcertEvent("Cat Stevens", 12.99),
    new ConcertEvent("Mark Forster", 2.1),
    new ConcertEvent("Helene Fischer", 3.1),
    new ConcertEvent("Bee Gees", 25.2),
];
for (let i = 0; i < events2.length; i++) {
    events2[i].show();
}
//# sourceMappingURL=TypeScript.js.map