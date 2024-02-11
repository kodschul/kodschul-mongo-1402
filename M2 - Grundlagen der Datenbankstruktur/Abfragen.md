# Abfragen

Abfragen ermöglicht das Suchen von Dokumenten in Sammlungen basierend auf spezifischen Kriterien und Bedingungen.

## Beispiel 1: Dokumente Abfragen
```javascript
async function findDocuments(client, dbName, collectionName) {
  const collection = client.db(dbName).collection(collectionName);
  const documents = await collection.find({}).toArray();
  console.log(documents);
}
```
## Beispiel 2: Dokumente mit Filtern Abfragen
```javascript
async function findDocumentsWithQuery(client, dbName, collectionName, query) {
  const collection = client.db(dbName).collection(collectionName);
  const documents = await collection.find(query).toArray();
  console.log(documents);
}
```
