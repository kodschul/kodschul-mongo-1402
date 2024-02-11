# Sharding in MongoDB

Sharding in MongoDB ist ein Verfahren zur Datenverteilung über mehrere Server, um die Skalierbarkeit von großen Datenmengen und hohen Durchsatzanforderungen zu bewältigen. Ein Sharded Cluster besteht aus drei Hauptkomponenten: Shards, Config Servern und Query Routern (mongos).

## Konfiguration eines Sharded Clusters

Die Einrichtung eines Sharded Clusters erfordert die Konfiguration von Shards (Datenhaltungsservern), Config Servern (Konfigurationsspeicherung) und mindestens einem Query Router, der die Clientanfragen verarbeitet.

### Beispiel 1: Einrichten eines Sharded Clusters

Dieses Beispiel zeigt, wie man einen einfachen Sharded Cluster mit einem Shard, einem Config Server und einem mongos Query Router einrichtet.

1. **Starten des Config Servers**
```shell
mongod --configsvr --dbpath /pfad/zum/configdb --port 27019
```
2. **Starten des Shards**
```shell
mongod --shardsvr --dbpath /pfad/zum/sharddb1 --port 27018
```
3. **Starten des mongos Query Routers**
```shell
mongos --configdb configServerHostname:27019 --port 27017
```
4. **Hinzufügen des Shards zum Cluster**
```shell
mongo --port 27017  # Verbindung zum mongos Query Router
> sh.addShard("shardHostname:27018")
```

