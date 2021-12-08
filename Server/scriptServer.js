"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const hostname = "127.0.0.1"; //localhost
const port = 3000;
const server = Http.createServer();
server.listen(port);
server.addListener("request", handleRequest);
console.log(`Server running at http://${hostname}:${port}`);
async function handleRequest(request, response) {
    // response.statusCode = 100; //100 = Status Loift
    response.setHeader("Content-Type", "text/plain");
    response.setHeader("Access-Control-Allow-Origin", "*"); //Dieser Header Definiert, ob der Response-Header mit de, Herkunftsort der Anfrage geteilt werden kann
    let url = Url.parse(request.url, true);
    switch (url.pathname) {
        case "/": //Default Pfad
            response.write("Server erreichbar");
            break;
        case "/convertDate": //DatumPfad
            let datum = url.query["datum"];
            let date = new Date(datum);
            response.write("Date: " + date.getDate() + ", Month: " + date.toLocaleString("en", { month: "long" }) + ", Year: " + date.getFullYear());
            break;
        default:
            response.statusCode = 404; // Wenn der Pfad nicht gefunden wurde, wollen wir eine 404-Fehlermeldung zurückgeben
    }
    response.end();
}
//# sourceMappingURL=scriptServer.js.map