# Sicherheit in MongoDB

Die Sicherheit ist ein kritischer Aspekt bei der Arbeit mit MongoDB, da Datenbanken oft sensible Informationen enthalten. MongoDB bietet eine Vielzahl von Sicherheitsfeatures, die helfen, Daten vor unbefugtem Zugriff zu schützen, darunter Authentifizierung, Autorisierung, Verschlüsselung, und Netzwerksicherheit.

## Beispiel 1: Authentifizierung und Autorisierung

Die Implementierung von Authentifizierung und Autorisierung ist grundlegend für die Sicherung des Zugriffs auf Ihre MongoDB-Datenbank. MongoDB unterstützt verschiedene Authentifizierungsmethoden, einschließlich SCRAM, x.509 Zertifikate und LDAP.

### Schritte zur Einrichtung der Authentifizierung:

1. **Konfigurieren der MongoDB-Instanz für die Authentifizierung**
   Aktivieren Sie die Authentifizierung in der MongoDB-Konfigurationsdatei (`mongod.conf`) durch Setzen der `security.authorization` Option auf "enabled".

   ```yaml
   security:
     authorization: enabled
   ```

2. **Erstellen von Benutzerkonten mit spezifischen Rollen**
   Verwenden Sie das MongoDB-Shell oder administrative Tools, um Benutzerkonten mit entsprechenden Rollen zu erstellen, die den Zugriff auf Datenbanken und Sammlungen steuern.
     ```shell
   use admin
   db.createUser({
     user: "meinBenutzer",
     pwd: "meinPasswort",
     roles: [{ role: "readWrite", db: "meineDatenbank" }]
   })
    ```

##
  
