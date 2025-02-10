const a39_0x50cbb7 = require("fs-extra");
const {
  zokou: a39_0x3d67af
} = require(__dirname + "/../framework/zokou");
const {
  format: a39_0x5a8560
} = require(__dirname + "/../framework/mesfonctions");
const a39_0x5618fb = require("os");
const a39_0x5b4265 = require("moment-timezone");
const {
  chooseOneEmojie: a39_0xa2cf0c
} = require("../framework/emojie");
const a39_0x16b47f = require(__dirname + "/../set");
a39_0x3d67af({
  nomCom: "menu2",
  reaction: "📁",
  categorie: "Général",
  desc: "Affiche le menu des commandes du bot",
  alias: ["commandes"]
}, async (_0x5193ab, _0x518771, _0x23d342) => {
  let {
    ms: _0x35a308,
    repondre: _0x17a39e,
    prefixe: _0x4556d2,
    nomAuteurMessage: _0x499d51,
    mybotpic: _0x102421
  } = _0x23d342;
  let {
    cm: _0x431085
  } = require(__dirname + "/../framework//zokou");
  var _0x2eee7b = {};
  var _0x435ee8 = "public";
  if (a39_0x16b47f.MODE.toLowerCase() != "oui") {
    _0x435ee8 = "privé";
  }
  _0x431085.map(async (_0x22d242, _0x31d065) => {
    if (!_0x2eee7b[_0x22d242.categorie]) {
      _0x2eee7b[_0x22d242.categorie] = [];
    }
    _0x2eee7b[_0x22d242.categorie].push(_0x22d242.nomCom);
  });
  a39_0x5b4265.tz.setDefault("Etc/GMT");
  const _0x480c1e = a39_0x5b4265().format("HH:mm:ss");
  const _0x13dbb9 = a39_0x5b4265().format("DD/MM/YYYY");
  let _0x507b4c = "\n┏━━━━━━━━⚜️" + a39_0x16b47f.BOT + "⚜️━━━━━━━━┓\n┃   *Préfixe* : " + a39_0x16b47f.PREFIXE + "\n┃   *Owner* : " + a39_0x16b47f.NOM_OWNER + "\n┃   *Mode* : " + _0x435ee8 + "\n┃   *Commandes* : " + _0x431085.length + "\n┃   *Date* : " + _0x13dbb9 + "\n┃   *Heure* : " + _0x480c1e + "\n┃   *Mémoire* : " + a39_0x5a8560(a39_0x5618fb.totalmem() - a39_0x5618fb.freemem()) + "/" + a39_0x5a8560(a39_0x5618fb.totalmem()) + "\n┃   *Plateforme* : " + a39_0x5618fb.platform() + "\n┃   *Développeurs* : Djalega++ \n┃   & M๏𝓷keℽ D Lบffy\n┃\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ \n\n";
  let _0x558441 = "\n\n🎛️ 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬  \n━━━━━━━━━━━━━━━━━━━━━━━━━";
  for (const _0x181f7a in _0x2eee7b) {
    _0x558441 += "\n> ◈│▸ " + _0x181f7a + ""
  }
  _0x558441 += "\n━━━━━━━━━━━━━━━━━━━━━━━━━ \n\n";
  for (const _0x1defcf in _0x2eee7b) {
    _0x558441 += "\n*" + (a39_0xa2cf0c() + " " + _0x1defcf) + "*\n━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    for (const _0x242bf2 of _0x2eee7b[_0x1defcf]) {
      _0x558441 += "> ◈│▸ " + _0x242bf2 + "\n";
    }
    _0x558441 += "\n";
  }
  _0x558441 += "\n◇            ◇\n*»»————— ★ —————««*\nPour utiliser  une  commande, tapez  " + _0x4556d2 + "\"nom de la commande\"\n \n powered by SHADOW-XMD\n                                                \n*»»————— ★ —————««*\n";
  var _0x81a10 = _0x102421();
  if (_0x81a10.match(/\.(mp4|gif)$/i)) {
    try {
      const _0x4e86fa = {
        url: _0x81a10
      };
      const _0x444acd = {
        quoted: _0x35a308
      };
      _0x518771.sendMessage(_0x5193ab, {
        video: _0x4e86fa,
        caption: _0x507b4c + _0x558441,
        footer: "Je suis *Zokou-MD*, développé par Djalega++",
        gifPlayback: true
      }, _0x444acd);
    } catch (_0x46ebbd) {
      console.log("🥵🥵 Menu erreur " + _0x46ebbd);
      _0x17a39e("🥵🥵 Menu erreur " + _0x46ebbd);
    }
  } else if (_0x81a10.match(/\.(jpeg|png|jpg)$/i)) {
    try {
      const _0x2533d4 = {
        url: _0x81a10
      };
      const _0x24fbec = {
        quoted: _0x35a308
      };
      _0x518771.sendMessage(_0x5193ab, {
        image: _0x2533d4,
        caption: _0x507b4c + _0x558441,
        footer: "Je suis *Zokou-MD*, développé par Djalega++"
      }, _0x24fbec);
    } catch (_0x5b235e) {
      console.log("🥵🥵 Menu erreur " + _0x5b235e);
      _0x17a39e("🥵🥵 Menu erreur " + _0x5b235e);
    }
  } else {
    _0x17a39e(_0x507b4c + _0x558441);
  }
});