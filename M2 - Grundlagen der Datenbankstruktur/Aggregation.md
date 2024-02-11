# Aggregation

Aggregation in MongoDB ermöglicht das Verarbeiten von Daten und die Rückgabe von berechneten Ergebnissen, indem Dokumente in Sammlungen gruppiert und Operationen auf diesen Gruppen ausgeführt werden.

## Beispiel 1: Einfache Aggregation

Diese Aggregation gruppiert Dokumente nach einem bestimmten Feld und berechnet die Gesamtzahl der Dokumente in jeder Gruppe.

```javascript
async function aggregateDocumentsSimple(client, dbName, collectionName) {
  const collection = client.db(dbName).collection(collectionName);
  const aggregation = [
    { $group: { _id: "$someField", total: { $sum: 1 } } }
  ];
  const result = await collection.aggregate(aggregation).toArray();
  console.log(result);
}

