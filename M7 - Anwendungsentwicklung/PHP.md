# Anwendungsentwicklung mit MongoDB in PHP

Die Entwicklung von Anwendungen mit MongoDB in PHP wird durch die MongoDB PHP Library erleichtert, die eine hochgradig abstrahierte Schnittstelle zur Interaktion mit MongoDB bietet. Dieser Leitfaden beschreibt die grundlegenden Schritte, um MongoDB in einer PHP-Anwendung zu verwenden, von der Einrichtung der Verbindung bis hin zu grundlegenden CRUD-Operationen.

## Voraussetzungen

- MongoDB-Server installiert und betriebsbereit.
- PHP Entwicklungsumgebung mit PHP 7.0 oder höher.
- MongoDB PHP Driver und die MongoDB PHP Library installiert in Ihrem PHP-Projekt. Die Installation kann über Composer erfolgen:
  ```shell
  composer require mongodb/mongodb


## Beispiel 1: Aufbau einer Verbindung zu MongoDB

 Zum Aufbau einer Verbindung zur MongoDB-Datenbank verwenden Sie die Client-Klasse der MongoDB PHP Library.
 
 ### Codebeispiel:
  ```php
<?php
require 'vendor/autoload.php'; // Autoload-Dateien von Composer

use MongoDB\Client;

function connectToDatabase($connectionString) {
    $client = new Client($connectionString);
    return $client;
}
?>
```
## Beispiel 2: Durchführen von CRUD-Operationen

Nachdem die Verbindung hergestellt wurde, können Sie CRUD-Operationen (Erstellen, Lesen, Aktualisieren, Löschen) durchführen.

# Ein Dokument erstellen: 
  ```php
<?php
use MongoDB\Collection;

function createDocument(Collection $collection, array $document) {
    $result = $collection->insertOne($document);
    echo "Dokument mit der ID '{$result->getInsertedId()}' erstellt.";
}
?>
```
# Dokumente lesen: 
  ```php
<?php

function readDocuments(Collection $collection) {
    $documents = $collection->find();
    foreach ($documents as $document) {
        echo $document['_id'], ': ', var_export($document, true), PHP_EOL;
    }
}
?>

```
# Ein Dokument aktualisieren: 
  ```php
<?php

function updateDocument(Collection $collection, array $filter, array $update) {
    $result = $collection->updateOne($filter, ['$set' => $update]);
    echo $result->getModifiedCount() . " Dokument(e) aktualisiert.";
}
?>

```
# Ein Dokument löschen: 
  ```php
<?php

function deleteDocument(Collection $collection, array $filter) {
    $result = $collection->deleteOne($filter);
    echo $result->getDeletedCount() . " Dokument(e) gelöscht.";
}
?>
```
#
