# Pokyny pro nasazení (pro druhý chat / správce hostingu)

Cíl: zveřejnit statickou stránku na **https://pozorovani.dukvit.cz**.

1. Vezmi z tohoto repozitáře jen soubory `index.html` a `config.js` (složka `apps-script/` a markdown soubory na web nepatří).
2. Vytvoř poddoménu `pozorovani.dukvit.cz`, nasměruj ji na složku s těmito dvěma soubory a zapni HTTPS.
3. Nic dalšího neinstaluj, není tu žádný server ani databáze. Stránka je čistě statická.
4. Ověř, že `https://pozorovani.dukvit.cz` otevře stránku s polem "Text" a polem "Heslo".
5. Pokud v `config.js` zůstává `scriptUrl: ""`, je to v pořádku. Adresu doplní Magda po nasazení Apps Scriptu (viz README). Po jejím doplnění soubor `config.js` na hostingu aktualizuj.

Do stránky ani do repozitáře nikdy nevkládej heslo ani data o dětech.
