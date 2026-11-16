# Pozorování – web pro sběr zápisů

Jednoduchá stránka s jedním textovým polem a heslem. Text se uloží do Google tabulky "Pozorování – Inbox" a Claude ho pak zpracuje do listů jednotlivých dětí. V repozitáři nejsou žádná data o dětech ani heslo.

## Soubory
- `index.html` – stránka (pole, heslo, tlačítko Odeslat)
- `config.js` – adresa Apps Scriptu (vyplní se po nasazení skriptu)
- `apps-script/Code.gs` – skript, který zapisuje do tabulky Inbox
- `NASAZENI.md` – pokyny pro nasazení na pozorovani.dukvit.cz

## Jednorázové zprovoznění skriptu (asi 5 minut)
1. Otevřete tabulku **Pozorování – Inbox** v Google Disku.
2. Menu **Rozšíření > Apps Script**. Smažte případný výchozí kód a vložte obsah `apps-script/Code.gs`. Uložte.
3. Vlevo **Nastavení projektu** (ozubené kolo) > **Vlastnosti skriptu** > **Přidat vlastnost**: název `HESLO`, hodnota je vaše heslo k webu. Uložte.
4. Vpravo nahoře **Nasadit > Nové nasazení** > typ **Webová aplikace**. Spustit jako: **já**. Kdo má přístup: **kdokoli**. Nasadit a potvrdit oprávnění.
5. Zkopírujte adresu webové aplikace (končí `/exec`) a dejte ji do `config.js` jako `scriptUrl`.

"Kdokoli" znamená jen to, že skript přijme požadavek. Bez hesla do tabulky nic nezapíše a nic z ní nevrátí.

## Soukromí
Stránka nic z tabulky nezobrazuje. Data zůstávají v tabulkách na Google Disku.
