import * as http from "http";

const hostname: string = "127.0.0.1"; //localhost
const port: number = 3000;

const server: http.Server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
   
      response.statusCode = 100; //100 = Status Loift

      response.setHeader("Content-Type", "date/plain"); 
      response.setHeader("Access-Control-Allow-Origin", "*"); //Dieser Header Definiert, ob der Response-Header mit de, Herkunftsort der Anfrage geteilt werden kann

      let url: URL = new URL(request.url || "",`http://${request.headers.host}`);

      // Welchen Pfad verarbeitet der Server
      switch (url.pathname) {
        case "/": //Default Pfad
          response.write("Server erreichbar");
          break;
        case "/convertDate": //DatumPfad
          let date: string = url.searchParams.get("datumEingabe");
          console.log(date);
          response.write("Wir haben den: " + date + ", die Abgabe ist heute!");
          break;
        default:
          response.statusCode = 404; // Wenn der Pfad nicht gefunden wurde, wollen wir eine 404-Fehlermeldung zurückgeben
      }
      response.end();
    }
  );
  //Auf welchen Host und port warten wir
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); //Wenn der Server erreichbar ist, soll folgendes ausgegeben werden.
  });
// Ausführen mit "node ./Server/server.js" in der Kommandozeile ausführen