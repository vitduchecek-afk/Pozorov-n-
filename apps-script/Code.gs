// Zápis pozorování do tabulky "Pozorování – Inbox".
// Skript patří do této tabulky (Rozšíření > Apps Script).
// Heslo se NEUKLÁDÁ sem, ale do Vlastností skriptu pod názvem HESLO.

var TZ = 'Europe/Prague';

function doGet() {
  return out_({ ok: true, info: 'Pozorování – Inbox' });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      return out_({ ok: false, error: 'bad_request' });
    }

    var pass = PropertiesService.getScriptProperties().getProperty('HESLO');
    if (!pass || data.heslo !== pass) {
      Utilities.sleep(1500);
      return out_({ ok: false, error: 'bad_password' });
    }

    var text = String(data.text || '').trim();
    if (!text) return out_({ ok: false, error: 'empty' });
    if (text.length > 30000) text = text.substring(0, 30000);

    var sh = SpreadsheetApp.getActive().getSheetByName('Inbox');
    var id = String(data.id || '').substring(0, 64);

    var last = sh.getLastRow();
    if (id && last > 1) {
      var ids = sh.getRange(2, 6, last - 1, 1).getValues();
      for (var i = 0; i < ids.length; i++) {
        if (ids[i][0] === id) return out_({ ok: true, duplicate: true });
      }
    }

    var now = new Date();
    var stamp = Utilities.formatDate(now, TZ, 'yyyy-MM-dd HH:mm');
    var parts = Utilities.formatDate(now, TZ, 'yyyy-MM-dd').split('-');
    var week = isoWeek_(+parts[0], +parts[1], +parts[2]) + '. týden';

    var row = last + 1;
    sh.getRange(row, 1, 1, 6).setNumberFormat('@');
    sh.getRange(row, 1, 1, 6).setValues([[stamp, week, text, 'nové', '', id]]);
    return out_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function isoWeek_(y, m, d) {
  var t = new Date(Date.UTC(y, m - 1, d));
  var day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  var start = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t - start) / 86400000 + 1) / 7);
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
