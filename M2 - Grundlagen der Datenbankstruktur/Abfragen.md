
## Grundlagen

### Verbindung herstellen

Um eine Verbindung zu einer MongoDB-Datenbank herzustellen, verwenden Sie die MongoDB Client-Bibliothek für Ihre Programmiersprache. Hier ist ein Beispiel in Python mit `pymongo`:

```python
from pymongo import MongoClient

# Verbindung zur MongoDB-Instanz herstellen
client = MongoClient('mongodb://localhost:27017/')

# Auswahl der Datenbank
db = client['meineDatenbank']

