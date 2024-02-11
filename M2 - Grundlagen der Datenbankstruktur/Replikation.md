# Replikation in MongoDB

Die Replikation in MongoDB ermöglicht es, Daten über mehrere Server zu verteilen, um die Datensicherheit zu erhöhen und die Datenverfügbarkeit zu verbessern. Ein Replikat-Set in MongoDB ist eine Gruppe von mongod Prozessen, die die gleichen Daten halten. Ein Replikat-Set besteht aus einem Primärknoten, der Lese- und Schreiboperationen akzeptiert, und mehreren Sekundärknoten, die Kopien der Daten des Primärknotens halten.

## Konfiguration eines Replikat-Sets

Die Einrichtung eines Replikat-Sets erfordert zunächst die Konfiguration der einzelnen mongod Instanzen mit Replikat-Set-Optionen und anschließend die Initialisierung des Replikat-Sets.

### Beispiel 1: Ein Replikat-Set Initialisieren

Um ein Replikat-Set zu initialisieren, starten Sie zuerst die mongod Instanzen mit der Replikat-Set-Option und verwenden dann den `rs.initiate()` Befehl im mongo Shell.

```shell
# Starten der MongoDB Instanzen mit Replikat-Set-Option
mongod --replSet meinReplikatSet --port 27017 --dbpath /pfad/zum/datenverzeichnis1
mongod --replSet meinReplikatSet --port 27018 --dbpath /pfad/zum/datenverzeichnis2
mongod --replSet meinReplikatSet --port 27019 --dbpath /pfad/zum/datenverzeichnis3

# Initialisieren des Replikat-Sets über die Mongo Shell
mongo --port 27017
> rs.initiate()

