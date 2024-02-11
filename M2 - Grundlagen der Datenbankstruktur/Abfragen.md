# Abfragen von MongoDB

Abfragen ermöglicht das Suchen von Dokumenten in Sammlungen basierend auf spezifischen Kriterien und Bedingungen.

## Beispiele

Hier ein paar Beispiele: 

'''Javascript 
async function findDocuments(client, dbName, collectionName) {
  const collection = client.db(dbName).collection(collectionName);
  const documents = await collection.find({}).toArray();
  console.log(documents);
}
'''



