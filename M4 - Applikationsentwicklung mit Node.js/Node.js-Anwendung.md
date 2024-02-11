# Entwicklung von Node.js-Anwendungen mit MongoDB

Die Entwicklung von Node.js-Anwendungen mit MongoDB ist dank des nativen MongoDB Node.js-Treibers und höherer Abstraktionen wie Mongoose weit verbreitet. Diese Tools erleichtern die Interaktion mit MongoDB-Datenbanken durch einfache und effiziente APIs. In diesem Leitfaden betrachten wir, wie man eine einfache Node.js-Anwendung mit MongoDB erstellt.

## Voraussetzungen

- MongoDB-Datenbank: Installiert und ausgeführt auf Ihrem lokalen System oder als gehosteter Dienst.
- Node.js: Installiert auf Ihrem Entwicklungscomputer.

## Beispiel 1: Verbindung zu MongoDB herstellen

Bevor Sie Daten in MongoDB speichern oder abrufen können, müssen Sie eine Verbindung zu Ihrer MongoDB-Instanz herstellen. Der folgende Code demonstriert, wie Sie dies mit dem nativen MongoDB Node.js-Treiber tun können.

```javascript
const { MongoClient } = require('mongodb');

async function connectToDatabase() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Erfolgreich mit MongoDB verbunden');
    // Weitere Operationen hier
  } finally {
    await client.close();
  }
}

connectToDatabase().catch(console.error);
```
## Beispiel 2: CRUD-Operationen durchführen 

Nachdem die Verbindung hergestellt wurde, können Sie mit CRUD-Operationen fortfahren. Hier sehen wir, wie man ein Dokument in einer Sammlung erstellt (C) und liest (R).
```javascript
async function createDocument(collection, document) {
  const result = await collection.insertOne(document);
  console.log(`Dokument mit der ID ${result.insertedId} erstellt`);
}

// Verwendung im Kontext der connectToDatabase Funktion
```
Dokumente abrufen:
```javascript
async function findDocuments(collection) {
  const documents = await collection.find({}).toArray();
  console.log('Gefundene Dokumente:', documents);
}

// Verwendung im Kontext der connectToDatabase Funktion
```
