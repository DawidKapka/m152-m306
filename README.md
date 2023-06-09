# Antonio's Pizza
> Noah Buchs, Leonie Roth, Julia Stadler, Dawid Kapka

Antonio's Pizza ist eine mit Angular und Express.js erstellte Pizzeria-Webseite. Sie bietet die Möglichkeit, Pizzen zu bestellen und den Bestellstatus zu verfolgen.
Das Menu kann direkt durch die Datenbank verwaltet werden und die Bestellungen werden in einer Datenbank gespeichert.
Als Architektur wurde das MVC-Modell verwendet, wobei die Express.js App die Model und Controller beinhaltet und die Angular Applikation als View dient.

**Wichtigsten Arbeitsschritte**
<br>
- Angular Projekt aufsetzen
- Menu-Page erstellen
- Warenkorb-Funktionalität erstellen
- Bestellungs-Page erstellen
- Bestellprozess definieren und in Bestellungs-Page implementieren
  - Schritt 1: Artikel erfassen und zusammengefasst mit Total-Preis anzeigen
  - Schritt 2: Lieferinfos wie Adresse, Name & Telefonnummer erfassen
  - Schritt 3: Bestellung überprüfen und abschliessen
- Bestellstatus-Page erstellen
- Bestellstatus abspeichern
- Bestellung mit ID vom Backend holen
- Bestellstatus mithilfe von Websockets einbinden
- Bestellstatus im Backend automatisch aktualisieren
- Kontakt-Page erstellen
- Impressum-Page erstellen

**sinnvolle, korrekte und qualitative grafische Darstellungen**

![Main Page](./img/ss_01.png "'Main Page'")
![Main Page](./img/ss_02.png "'Main Page'")
![Main Page](./img/ss_03.png "'Main Page'")



**Lessons-Learned**

- Webseiten mithilfe von Angular erstellen.
- Erstellen einer Applikation basierend auf der MVC-Architektur
  - Express backend: Model & Controller
  - Angular frontend: View
- Einbindung von Datenbanken in einer Web-Applikation
- Erstellen von RESTful APIs
- Verwendung von Websockets

**Starten der Applikation**

Um die Applikation zu starten wird ein Docker-Container mit einem MySQL-Server benötigt.
Wenn dieser erstellt ist, kann die Datenbank mithilfe des Skripts unter ```antonios-backend/db/create-db.sql``` erstellt werden.
<br>
Danach muss das Backend und das Frontend gestartet werden.

- Frontend starten: 
  ```cd antonios-frontend``` -> ```npm install``` -> ```npm run start```
- Backend starten:
  ```cd antonios-backend``` -> ```npm install``` -> ```npm run start```
