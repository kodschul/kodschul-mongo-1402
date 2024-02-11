# CRUD-Operationen in MongoDB

CRUD-Operationen stehen für Create, Read, Update und Delete. Diese Operationen bilden die Grundlage für das Interagieren mit Datenbanken. Im Folgenden werden Beispiele für jede dieser Operationen in MongoDB mit Node.js vorgestellt.

## Beispiel 1: Dokumente erstellen (Create)

Diese Funktion fügt ein neues Dokument in eine Sammlung ein.

```javascript
async function createDocument(client, dbName, collectionName, document) {
  const collection = client.db(dbName).collection(collectionName);
  const result = await collection.insertOne(document);
  console.log(`Neues Dokument hinzugefügt mit der _id: ${result.insertedId}`);
}

