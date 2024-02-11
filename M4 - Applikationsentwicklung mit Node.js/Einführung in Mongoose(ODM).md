# Einführung in Mongoose für MongoDB

Mongoose ist ein Object Data Modeling (ODM)-Tool für MongoDB und Node.js. Es bietet eine schemabasierte Lösung, um mit MongoDB zu arbeiten, was die Validierung, Abfrageerstellung und Geschäftslogik einfacher macht. Mongoose ermöglicht es Entwicklern, ihre Daten als stark strukturierte Modelle zu definieren, die dann auf die dynamische und flexible Natur von MongoDB abgebildet werden.

## Beispiel 1: Definieren eines Schemas und eines Modells

Ein Schema in Mongoose definiert die Struktur der Dokumente innerhalb einer Sammlung. Modelle sind konstruierbare Objekte, die auf einem Schema basieren und die direkte Interaktion mit der Datenbank ermöglichen.

### Schritte zum Erstellen eines Schemas und Modells:

1. **Installation von Mongoose**
   Fügen Sie Mongoose zu Ihrem Projekt hinzu, indem Sie es über npm installieren.
    ```shell
   npm install mongodb

## **Ein Schema und Modell definieren**
   ```javascript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String
});

const User = mongoose.model('User', userSchema);
```
## Beispiel 2: Erstellen und Abrufen von Dokumenten

Nachdem Sie ein Modell definiert haben, können Sie dieses verwenden, um Dokumente in Ihrer MongoDB-Datenbank zu erstellen und abzurufen.

```javascript
async function createUser() {
  await mongoose.connect('mongodb://localhost:27017/testDB');

  const newUser = new User({
    name: 'Alice',
    age: 30,
    email: 'alice@example.com'
  });

  await newUser.save();
  console.log('Ein neuer Benutzer wurde erstellt!');
}

createUser();
```
