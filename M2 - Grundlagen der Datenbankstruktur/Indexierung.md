# Indexierung in MongoDB

Die Indexierung ist ein wesentliches Feature in MongoDB, das die Effizienz von Abfrageoperationen verbessert. Indizes unterstützen die MongoDB-Datenbank dabei, Abfragen schneller auszuführen, indem sie einen schnellen Zugriffspfad zu den Dokumenten bieten. Ohne Indizes muss MongoDB eine Sammlung dokumentweise durchsuchen, um die Dokumente zu finden, die den Abfragekriterien entsprechen.

## Beispiel 1: Einen Index Erstellen

Um die Abfrageleistung zu verbessern, können Sie einen Index auf einem Feld oder mehreren Feldern in einer Sammlung erstellen. Die Methode `createIndex` wird verwendet, um einen Index zu erstellen.

```javascript
async function createIndex(client, dbName, collectionName, indexKey) {
  const collection = client.db(dbName).collection(collectionName);
  const result = await collection.createIndex(indexKey);
  console.log(`Index erstellt: ${result}`);
}


