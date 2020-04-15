# React Form
Formularul va crea un profil pentru fiecare utilizator care va completa corespunzator campurile si il va afisa in lista utilizatorilor

## Functionalitati ale formularului
* Formularul poate fi validat doar daca toate campurile obligatorii sunt completate corect.

* La submiterea formularului, pentru fiecare camp obligatoriu necompletat, formularul nu se va trimite iar sub campurile respective va fi afisat cu rosu mesajul "Campul trebuie completat!".

* Campurile care sunt de tip "checkbox" sau "radio" nu sunt obligatorii.

* De asemenea, pentru ca formularul sa fie trimis trebuie ca cele 2 parole sa coincida iar campul de email sa aiba un format valid, altfel vor fi afisate alerte.

* Daca toate conditiile sunt indeplinite si formularul este validat, acesta va transmite toate datele primite catre lista utilizatorilor unde vor fi afisate intr-un chenar.

* In functie de selectarea optiunii "Barbat" sau "Femeie" din formular, in chenarul corespunzator acelui utilizator va fi afisata imaginea unui barbat sau a unei femei. In caz ca utilizatorul nu selecteaza nicio optiune, in chenar va fi afisat simbolul unui utilizator oarecare.

* De asemenea daca este selectata optiunea "Client GOLD", chenarul corespunzator acelui utilizator va avea culoarea aurie.

* Dupa trimiterea formularului, toate campurile sunt sterse si debifate.

### Alte functionalitati ale proiectului
* Doua inputuri de tip culoare care modifica culoarea fundalului si culoarea textului
* Doua butoane, "Afiseaza useri" si "Afiseaza postari", care atunci cand sunt apasate actualizeaza lista de useri sau lista de postari afisata pe ecran.
* Cele doua liste vor contine date de la API-ul JSONPlaceholder.
* Fiecare user afisat in lista utilizatorilor va avea un buton de stergere.
