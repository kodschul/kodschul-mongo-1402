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

