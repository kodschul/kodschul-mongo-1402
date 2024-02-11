# Anwendungsentwicklung mit MongoDB in C#

Die Entwicklung von Anwendungen mit MongoDB in der .NET-Welt, insbesondere mit C#, ist dank des offiziellen MongoDB .NET/C# Treibers, der eine nahtlose Integration ermöglicht, effizient und leistungsfähig. Dieser Leitfaden führt durch die grundlegenden Schritte der Verwendung von MongoDB in einer C#-Anwendung, von der Einrichtung der Verbindung bis hin zu grundlegenden CRUD-Operationen.

## Voraussetzungen

- MongoDB-Server installiert und betriebsbereit.
- .NET Entwicklungsumgebung (z.B. Visual Studio).
- MongoDB .NET Driver installiert in Ihrem C#-Projekt. Dies kann über NuGet erfolgen:
  ```shell
  Install-Package MongoDB.Driver

## Beispiel 1: Aufbau einer Verbindung zu MongoDB

  Um mit MongoDB zu interagieren, müssen Sie zunächst eine Verbindung zur Datenbank herstellen. Der MongoDB .NET Treiber verwendet die MongoClient-Klasse, um eine Verbindung zur Datenbank herzustellen.
  
 ### Codebeispiel:
  ```csharp
  using MongoDB.Driver;

public class MongoDBConnector
{
    public IMongoDatabase ConnectToDatabase(string connectionString, string dbName)
    {
        var client = new MongoClient(connectionString);
        var database = client.GetDatabase(dbName);
        return database;
    }
}
```
## Beispiel 2: Durchführen von CRUD-Operationen

Nachdem die Verbindung hergestellt wurde, können Sie verschiedene Operationen (Erstellen, Lesen, Aktualisieren, Löschen) auf der Datenbank ausführen.

# Ein Dokument erstellen: 
  ```csharp
public async Task CreateDocument<T>(IMongoDatabase database, string collectionName, T document)
{
    var collection = database.GetCollection<T>(collectionName);
    await collection.InsertOneAsync(document);
}
```
# Dokumente lesen: 
  ```csharp
public async Task<List<T>> ReadDocuments<T>(IMongoDatabase database, string collectionName)
{
    var collection = database.GetCollection<T>(collectionName);
    var documents = await collection.Find(_ => true).ToListAsync();
    return documents;
}
```
# Ein Dokument aktualisieren: 
  ```csharp
public async Task UpdateDocument<T>(IMongoDatabase database, string collectionName, FilterDefinition<T> filter, UpdateDefinition<T> update)
{
    var collection = database.GetCollection<T>(collectionName);
    await collection.UpdateOneAsync(filter, update);
}
```
# Ein Dokument löschen: 
  ```csharp
public async Task DeleteDocument<T>(IMongoDatabase database, string collectionName, FilterDefinition<T> filter)
{
    var collection = database.GetCollection<T>(collectionName);
    await collection.DeleteOneAsync(filter);
}
```
#
