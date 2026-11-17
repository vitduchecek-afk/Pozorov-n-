# Pokyny pro nasazení (pro druhý chat / správce hostingu)

Cíl: zveřejnit statickou stránku na **https://pozorovani.dukvit.cz**.

1. Web tvoří jediný soubor: `index.html`. Vezmi ho z tohoto repozitáře (větev main). Složka `apps-script/` a soubory `.md` na web nepatří. Starý soubor `config.js` na hostingu už není potřeba a lze ho smazat.
2. Vytvoř poddoménu `pozorovani.dukvit.cz`, nasměruj ji na složku s `index.html` a zapni HTTPS.
3. Je to čistě statická stránka, žádný server ani databáze. Do souboru nic nepřidávej a nic v něm neměň.
4. Ověř, že `https://pozorovani.dukvit.cz` otevře stránku s polem "Text", tlačítkem "Diktovat", polem "Heslo" s ikonou oka a tlačítkem "Odeslat". Po aktualizaci zkus tvrdé obnovení (Ctrl+F5), prohlížeč si stránku pamatuje.

Do stránky ani do repozitáře nikdy nevkládej heslo ani data o dětech.
