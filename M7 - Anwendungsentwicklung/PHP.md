# Anwendungsentwicklung mit MongoDB in PHP

Die Entwicklung von Anwendungen mit MongoDB in PHP wird durch die MongoDB PHP Library erleichtert, die eine hochgradig abstrahierte Schnittstelle zur Interaktion mit MongoDB bietet. Dieser Leitfaden beschreibt die grundlegenden Schritte, um MongoDB in einer PHP-Anwendung zu verwenden, von der Einrichtung der Verbindung bis hin zu grundlegenden CRUD-Operationen.

## Voraussetzungen

- MongoDB-Server installiert und betriebsbereit.
- PHP Entwicklungsumgebung mit PHP 7.0 oder höher.
- MongoDB PHP Driver und die MongoDB PHP Library installiert in Ihrem PHP-Projekt. Die Installation kann über Composer erfolgen:
  ```shell
  composer require mongodb/mongodb

