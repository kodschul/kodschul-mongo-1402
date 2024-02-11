# Anwendungsentwicklung mit MongoDB in Python

Die Entwicklung von Anwendungen mit MongoDB in Python wird durch PyMongo, den offiziellen MongoDB Python-Treiber, unterstützt. Dieser Leitfaden durchläuft die grundlegenden Schritte der Verwendung von MongoDB in einer Python-Anwendung, vom Aufbau der Verbindung bis zu grundlegenden CRUD-Operationen.

## Voraussetzungen

- MongoDB-Server installiert und betriebsbereit.
- Python Entwicklungsumgebung.
- PyMongo in Ihrem Python-Projekt installiert. Die Installation kann über pip erfolgen:
  ```shell
  pip install pymongo

## Beispiel 1: Aufbau einer Verbindung zu MongoDB

Um mit MongoDB zu interagieren, müssen Sie zunächst eine Verbindung zur Datenbank herstellen. PyMongo verwendet die MongoClient-Klasse, um eine Verbindung herzustellen.

 
 ### Codebeispiel:
  ```python
from pymongo import MongoClient

def connect_to_database(connection_string):
    client = MongoClient(connection_string)
    return client

```
## Beispiel 2: Durchführen von CRUD-Operationen

Nachdem die Verbindung hergestellt wurde, können Sie verschiedene Operationen (Erstellen, Lesen, Aktualisieren, Löschen) auf der Datenbank durchführen.

# Ein Dokument erstellen: 
  ```python
def create_document(collection, document):
    result = collection.insert_one(document)
    print(f"Dokument mit der ID {result.inserted_id} erstellt.")
```
# Dokumente lesen: 
  ```python
def read_documents(collection, query={}):
    documents = collection.find(query)
    for document in documents:
        print(document)
```
# Ein Dokument aktualisieren: 
  ```python
def update_document(collection, filter, update):
    result = collection.update_one(filter, {'$set': update})
    print(f"{result.modified_count} Dokument(e) aktualisiert.")
```
# Ein Dokument löschen: 
  ```python
def delete_document(collection, filter):
    result = collection.delete_one(filter)
    print(f"{result.deleted_count} Dokument(e) gelöscht.")
```
#
