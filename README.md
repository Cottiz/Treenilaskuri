# Projektin nimi
Lydia ja Katin supertreenilaskuri

## Linkki sovellukseen
Pääset supertreenilaskuriimme täältä: 

## Työnjako
Yhteistyömme sujui mutkattomasti ja saimme jaettua tehtävät hyvin ja reilusti.

Kati teki suurimman työn koodatessaan pohjan sovelluksellemme. Työstimme lopuksi kuitenkin yhdessä JavaScript toimintoja ja viimeistelimme sivun ulkomuodon. Lydialla oli päävastuu raportin kirjoittamisessa, mutta kaiken kaikkiaan teimme projektin pääosin yhdessä miettien. Koimme tekemisen helpommaksi ns. ”kaksien silmien ja aivojen taktiikalla”. 

## Sisältö:

- [Tiedot sovelluksesta](#Tiedot-sovelluksesta)
- [Kuvia sovelluksesta](#Kuvia-sovelluksesta)
- [Käytetyt menetelmät](#Käytetyt-menetelmät)
- [Sovelluksen käyttö](#Sovelluksen-käyttö)
- [Status](#status)
- [Tekijät ja lähteet](#Tekijät-ja-lähteet)
- [Lisenssi](#Lisenssi)

## Tiedot sovelluksesta
Luomamme sovelluksen nimi on Lydian ja Katin supertreenilaskuri.
Sovelluksemme tarkoitus on pitää kirjaa käyttäjän treeneistä. Sovellukseen voi kirjata mitä lajia on harjoittanut, montako tuntia, lisätä tarkemman kuvauksen treenistä ja merkitä päivämäärän.

Tiedot kirjautuvat Treeniyhteenveto-taulukkoon ja ne pysyvät muuttumattomina niin kauan, kunnes käyttäjä tyhjentää tiedot. 
Taulukon alle, sovellus laskee kategorioittain prosentteina ja tunteina, kuinka paljon mitäkin urheilulajia on harjoitettu. Taulukon voi tyhjentää helposti käyttämällä tyhjennä nappulaa, jolloin ohjelma antaa käyttäjälle ilmoituksen, että olet tyh-jentämässä taulukon.

## Kuvia sovelluksesta
![Sovelluksen kuvakaappaus](kuvalaskurista.png)

## Käytetyt menetelmät
Teknologiat, joita käytimme tämän projektin tekemiseen olivat HTML, CSS sekä Javascript.

HTML:ää käytimme verkkosivun rakenteen ja sisällön luomiseen. Jokainen sovelluksen osa, kuten lomake treenitietojen syöttämiseksi ja taulukko yhteenvetojen näyttämiseksi, on rakennettu HTML-elementeillä. Lisäksi käytimme HTML:ää luomaan painikkeet, kuten "Tyhjennä taulukko" -toiminnon, ja varmistimme, että sivusto on selkeästi jäsennelty ja helppokäyttöinen. 

CSS:ällä määrittelimme sovelluksen tarkemman ulkomuodon, kuten värityksen, elementtien koot, muodot sekä fontit.

JavaScriptillä loimme sovelluksen toiminnallisuudet ja interaktiivisuuden. Se vastaa mm. treenitietojen tallentamisesta ja laskemisesta sekä treeniyhteenvedon päivittämisestä. Käytimme JavaScriptiä seuraaviin toimintoihin:

- Tietojen syöttäminen ja validointi: Käyttäjän syöttämät tiedot, kuten treenin laji ja kesto, tallennetaan taulukkoon.
- Laskenta: Sovellus laskee automaattisesti urheilulajien prosenttijakauman ja yhteistreenimäärät.
- Tiedonhallinta: Treenitietojen poistaminen onnistuu "Tyhjennä" -painikkeella, joka myös varmistaa käyttäjältä, ennen kuin tiedot poistetaan pysyvästi.
- Tiedon tallentaminen: Käytimme JavaScriptin localStorage-ominaisuutta tietojen tallentamiseen, jotta tiedot säilyvät selaimen päivittämisen tai sulkemisen välillä, kunnes käyttäjä päättää tyhjentää ne.

## Sovelluksen käyttö
Alla ohjeet käyttäjälle sovelluksen käyttöönottoon:
- Lataa kaikki tiedostot omalle koneelle 
- Avaa treeni.html tiedosto haluamallasi selaimella
- Voit joko ladata tai kloonata repositorin 

## Status
Lydian ja Katin supertreenilaskuri on vielä kehitystyön alla. Lisää toiminnallisuuksia tulossa sovelluksen versiossa 2.0, joka julkaistaan helmikuussa 2025.

## Tekijät ja lähteet
Sovelluksen ovat tehneet Lydia Palosaari ja Kati Tuukkanen.

Sovelluksen tekemisessä on käytetty apuna ChatGPT:tä ja CoPilottia. Käytimme tekoälyä sovelluksen Javascript toimintojen kehittämiseen ja loimme sovelluksellemme pohjan HTML koodin.

Tekoäly auttoi meitä ymmärtämään paremmin Javascrpit toimintoja ja niiden käyttöä. Opimme sen avulla paljon uutta mm. funktioista ja taulukkojen tekemisestä.

## Lisenssi
MIT license


