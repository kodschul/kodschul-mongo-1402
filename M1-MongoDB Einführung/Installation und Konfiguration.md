## Installation von MongoDB

Die Installation von MongoDB kann je nach Betriebssystem variieren. Hier sind Anleitungen für die Installation auf Windows, Linux und MacOS.

### Windows

1. Laden Sie den MongoDB Community Server von der [offiziellen MongoDB-Website](https://www.mongodb.com/try/download/community) herunter.
2. Führen Sie das heruntergeladene MSI-Installationsprogramm aus.
3. Folgen Sie den Anweisungen im Installationsassistenten.

### MacOS
Die einfachste Methode zur Installation von MongoDB auf MacOS ist die Verwendung von Homebrew: 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


## Grundlagen

### Verbindung herstellen

Um eine Verbindung zu einer MongoDB-Datenbank herzustellen, verwenden Sie die MongoDB Client-Bibliothek für Ihre Programmiersprache. Hier ist ein Beispiel in Python mit `pymongo`:

```python
from pymongo import MongoClient

# Verbindung zur MongoDB-Instanz herstellen
client = MongoClient('mongodb://localhost:27017/')

# Auswahl der Datenbank
db = client['meineDatenbank']
