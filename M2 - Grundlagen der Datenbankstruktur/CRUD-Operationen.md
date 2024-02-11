# CRUD-Operationen in MongoDB

CRUD steht für Create, Read, Update, und Delete - die vier grundlegenden Operationen, die in Datenbanksystemen durchgeführt werden können. MongoDB, eine NoSQL-Datenbank, ermöglicht die flexible Arbeit mit JSON-ähnlichen Dokumenten.

## Beispiel 1: Dokumente Lesen (Read)

Um Dokumente aus einer Sammlung zu lesen, verwenden Sie die Methode `find`. Sie können alle Dokumente abfragen oder einen Filter verwenden, um spezifische Dokumente zu suchen.

```javascript
async function findDocuments(client, dbName, collectionName, query) {
  const collection = client.db(dbName).collection(collectionName);
  const documents = await collection.find(query).toArray();
  console.log(documents);
}
```
## Beispiel 2: Dokument Löschen (delete) 
```javascript
async function deleteDocument(client, dbName, collectionName, query) {
  const collection = client.db(dbName).collection(collectionName);
  const result = await collection.deleteOne(query);
  if(result.deletedCount === 1) {
    console.log("Erfolgreich ein Dokument gelöscht.");
  } else {
    console.log("Kein Dokument gelöscht.");
  }
}
```
