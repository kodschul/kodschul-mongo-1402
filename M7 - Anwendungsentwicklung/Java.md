# Anwendungsentwicklung mit MongoDB in Java

Die Entwicklung von Anwendungen mit MongoDB in Java wird durch den offiziellen MongoDB Java Driver unterstützt, der eine nahtlose Integration ermöglicht. Dieser Leitfaden führt durch die grundlegenden Schritte der Verwendung von MongoDB in einer Java-Anwendung, von der Einrichtung der Verbindung bis hin zu grundlegenden CRUD-Operationen.

## Voraussetzungen

- MongoDB-Server installiert und betriebsbereit.
- Java Entwicklungsumgebung (z.B. Eclipse, IntelliJ IDEA).
- MongoDB Java Driver in Ihrem Java-Projekt eingebunden. Dies kann über Maven oder Gradle erfolgen:
  ```xml
  <!-- Maven -->
  <dependency>
      <groupId>org.mongodb</groupId>
      <artifactId>mongodb-driver-sync</artifactId>
      <version>4.2.3</version>
  </dependency>

## Beispiel 1: Aufbau einer Verbindung zu MongoDB

  Um mit MongoDB zu interagieren, müssen Sie zunächst eine Verbindung zur Datenbank herstellen. Der MongoDB .NET Treiber verwendet die MongoClient-Klasse, um eine Verbindung zur Datenbank herzustellen.
  
 ### Codebeispiel:
  ```java
 import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

public class MongoDBConnector {
    public MongoDatabase connectToDatabase(String connectionString, String dbName) {
        var mongoClient = MongoClients.create(connectionString);
        var database = mongoClient.getDatabase(dbName);
        return database;
    }
}
```
## Beispiel 2: Durchführen von CRUD-Operationen

Nachdem die Verbindung hergestellt wurde, können Sie verschiedene Operationen (Erstellen, Lesen, Aktualisieren, Löschen) auf der Datenbank ausführen.

# Ein Dokument erstellen: 
  ```java
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public void createDocument(MongoDatabase database, String collectionName, Document document) {
    MongoCollection<Document> collection = database.getCollection(collectionName);
    collection.insertOne(document);
}
```
# Dokumente lesen: 
  ```java
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.FindIterable;
import org.bson.Document;

public void readDocuments(MongoDatabase database, String collectionName) {
    MongoCollection<Document> collection = database.getCollection(collectionName);
    FindIterable<Document> documents = collection.find();
    for (Document document : documents) {
        System.out.println(document.toJson());
    }
}
```
# Ein Dokument aktualisieren: 
  ```java
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import org.bson.Document;

public void updateDocument(MongoDatabase database, String collectionName, Document filter, Document update) {
    MongoCollection<Document> collection = database.getCollection(collectionName);
    collection.updateOne(filter, new Document("$set", update));
}
```
# Ein Dokument löschen: 
  ```java
**public async Task DeleteDocument<T>(IMongoDatabase database, string collectionName, FilterDefinition<T> filter)
{
    var collection = database.GetCollection<T>(collectionName);
    await collection.DeleteOneAsync(filter);
}**
```
#
