const {
  makeWASocket: a70_0x3c4936,
  fetchLatestBaileysVersion: a70_0x2900f7,
  useMultiFileAuthState: a70_0x77afa2,
  makeCacheableSignalKeyStore: a70_0x2f9168,
  DisconnectReason: a70_0x48e42a,
  getContentType: a70_0x47bd27,
  jidDecode: a70_0x2d419f,
  delay: a70_0x7c66f3,
  downloadContentFromMessage: a70_0x550264,
  makeInSQLiteStore: a70_0x1f720b
} = require("@faouzkk/baileys");
const {
  Boom: a70_0x4e8657
} = require("@hapi/boom");
const {
  default: a70_0xda0df7
} = require("pino");
const a70_0x5e2b5f = require("./set");
const a70_0x2b9a6f = require("fs-extra");
let a70_0x352979 = require("./framework/zokou");
const {
  reagir: a70_0x8f0df0
} = require("./framework/app");
let a70_0x447eee = require("path");
const a70_0xbe32eb = require("file-type");
const {
  Sticker: a70_0x291c9f,
  StickerTypes: a70_0x3779bb
} = require("wa-sticker-formatter");
var a70_0x45cbd2 = a70_0x5e2b5f.session.replace(/SHADOW-MD-WHATSAPP-BOT;;;=>/g, "");
const {
  checkIfInstalledPlugin: a70_0x42c4ea
} = require("./framework/mesfonctions");
const a70_0x2f762c = require("node-cache");
const a70_0x106087 = require("node-cron");
const a70_0x562316 = a70_0x5e2b5f.PREFIXE;
const {
  verifierEtatJid: a70_0x2727b9,
  recupererActionJid: a70_0x1ac774
} = require("./bdd/antilien");
const {
  atbverifierEtatJid: a70_0x4152c9,
  atbrecupererActionJid: a70_0x4faec8
} = require("./bdd/antibot");
const {
  isUserBanned: a70_0x65c254,
  addUserToBanList: a70_0x1afbf7,
  removeUserFromBanList: a70_0x4ee425
} = require("./bdd/banUser");
const {
  addGroupToBanList: a70_0x4cf468,
  isGroupBanned: a70_0x26bbbd,
  removeGroupFromBanList: a70_0x444e49
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin: a70_0x455d56,
  addGroupToOnlyAdminList: a70_0xc28fce,
  removeGroupFromOnlyAdminList: a70_0x5db34a
} = require("./bdd/onlyAdmin");
const {
  recupevents: a70_0x1cfb8f
} = require("./bdd/welcome");
const {
  isGroupspam: a70_0x5c920b
} = require("./bdd/antispam");
const {
  dbCache: a70_0x10d895,
  wcgCache: a70_0xd9195
} = require("./cache");
const a70_0x7eba1 = require("./bdd/plugin");
const {
  ajouterOuMettreAJourUserData: a70_0x56a4b4
} = require("./bdd/level");
const a70_0x226c77 = require("./bdd/mention");
const {
  getCron: a70_0x559728,
  createTablecron: a70_0x42b7d8
} = require("./bdd/cron");
const {
  randomInt: a70_0x35a8d1
} = require("crypto");
const {
  default: a70_0x10895b
} = require("axios");
const {
  chooseOneEmojie: a70_0x2fa0c4
} = require("./framework/emojie");
const {
  getParainList: a70_0x27a481
} = require("./bdd/parrain");
const a70_0x5dbfbd = require("./bdd/afk");
async function a70_0x41ddf6() {
  try {
    if (!a70_0x2b9a6f.existsSync(__dirname + "/auth/creds.json") && a70_0x45cbd2 != "zokk") {
      console.log("connexion depuis la variable session_id");
      a70_0x2b9a6f.writeFileSync(__dirname + "/auth/creds.json", atob(a70_0x45cbd2), "utf8");
    } else if (a70_0x2b9a6f.existsSync(__dirname + "/auth/creds.json") && a70_0x45cbd2 != "zokk") {
      console.log("-------------en cours----------------");
      a70_0x2b9a6f.writeFileSync(__dirname + "/auth/creds.json", atob(a70_0x45cbd2), "utf8");
    }
  } catch (_0x5a6dce) {
    console.log("Session Invalide " + _0x5a6dce);
    return;
  }
}
a70_0x41ddf6();
const a70_0x5630f6 = a70_0xda0df7({
  level: "silent"
});
const a70_0x147472 = new a70_0x2f762c({
  stdTTL: 20,
  checkperiod: 120
});
const a70_0x20b169 = new a70_0x2f762c({
  stdTTL: 6000,
  checkperiod: 5000
});
const a70_0x55b408 = new a70_0x2f762c({
  stdTTL: 60,
  checkperiod: 60
});
async function a70_0x58e03f(_0x1d6a7c = null, _0x183997 = null) {
  let _0x294db4;
  let _0x5b98a5;
  if (!_0x1d6a7c && !_0x183997) {
    _0x5b98a5 = await a70_0x77afa2("./auth");
    _0x294db4 = await a70_0x1f720b("1", "./store.db", a70_0xda0df7({
      level: "silent"
    }));
  } else {
    const _0x35ec82 = a70_0x447eee.join(__dirname, "parainage", _0x1d6a7c.split("@")[0]);
    const _0x580783 = a70_0x447eee.join(_0x35ec82, "creds.json");
    if (!a70_0x2b9a6f.existsSync(_0x580783)) {
      a70_0x2b9a6f.mkdirSync(_0x35ec82, {
        recursive: true
      });
      a70_0x2b9a6f.writeFileSync(_0x580783, _0x183997, "utf8");
    }
    _0x5b98a5 = await a70_0x77afa2(_0x35ec82);
    _0x294db4 = await a70_0x1f720b(_0x1d6a7c.split("@")[0], "./store.db", a70_0xda0df7({
      level: "silent"
    }));
  }
  const {
    state: _0x15315d,
    saveCreds: _0x31406a
  } = _0x5b98a5;
  const {
    version: _0xf8dfa4,
    isLatest: _0x33037f
  } = await a70_0x2900f7();
  const _0x69c7e0 = _0x294db4;
  const _0x292a3 = a70_0x3c4936({
    version: _0xf8dfa4,
    logger: a70_0x5630f6,
    browser: ["Zokou-md", "safari", "1.0.0"],
    emitOwnEvents: true,
    syncFullHistory: true,
    printQRInTerminal: true,
    markOnlineOnConnect: false,
    receivedPendingNotifications: true,
    generateHighQualityLinkPreview: true,
    auth: {
      creds: _0x15315d.creds,
      keys: a70_0x2f9168(_0x15315d.keys, a70_0x5630f6)
    },
    keepAliveIntervalMs: 30000,
    getMessage: async _0x2ad30a => {
      if (_0x69c7e0) {
        const _0x45bfeb = await _0x69c7e0.loadMessage(_0x2ad30a.remoteJid, _0x2ad30a.id);
        return _0x45bfeb?.message || undefined;
      }
    }
  });
  _0x69c7e0?.bind(_0x292a3.ev, _0x292a3);
  const _0x474bc2 = new a70_0x2f762c({
    stdTTL: 120,
    checkperiod: 240
  });
  let _0x5e2fa1 = a70_0x5e2b5f.URL;
  if (_0x5e2fa1.startsWith("http")) {
    a70_0x5e2b5f.ARRAY_LIENS = _0x5e2fa1.split(",");
  } else {
    let _0x46180e = (await a70_0x10895b.get("https://raw.githubusercontent.com/Luffy2ndAccount/zokou-themes/refs/heads/main/themes.json", {
      responseType: "json"
    })).data;
    a70_0x5e2b5f.THEMES_KEYS = Object.keys(_0x46180e);
    if (a70_0x5e2b5f.THEMES_KEYS.includes(_0x5e2fa1.toUpperCase())) {
      a70_0x5e2b5f.ARRAY_LIENS = _0x46180e[_0x5e2fa1.toUpperCase()];
    } else {
      a70_0x5e2b5f.ARRAY_LIENS = _0x46180e.LUFFY;
    }
  }
  _0x292a3.ev.on("messages.upsert", async _0x351a48 => {
    const {
      messages: _0x4b89a6
    } = _0x351a48;
    const _0x421e89 = _0x4b89a6[0];
    if (!_0x421e89.message) {
      return;
    }
    const _0x3b8f91 = _0x659300 => {
      if (!_0x659300) {
        return _0x659300;
      }
      if (/:\d+@/gi.test(_0x659300)) {
        let _0x32b35a = a70_0x2d419f(_0x659300) || {};
        return _0x32b35a.user && _0x32b35a.server && _0x32b35a.user + "@" + _0x32b35a.server || _0x659300;
      } else {
        return _0x659300;
      }
    };
    var _0x23f4a8 = a70_0x47bd27(_0x421e89.message);
    var _0x2a0341 = _0x23f4a8 == "conversation" ? _0x421e89.message.conversation : _0x23f4a8 == "imageMessage" ? _0x421e89.message.imageMessage?.caption : _0x23f4a8 == "videoMessage" ? _0x421e89.message.videoMessage?.caption : _0x23f4a8 == "extendedTextMessage" ? _0x421e89.message?.extendedTextMessage?.text : _0x23f4a8 == "documentMessage" ? _0x421e89.message.documentMessage?.caption : _0x23f4a8 == "buttonsResponseMessage" ? _0x421e89.message.buttonsResponseMessage?.selectedButtonId : _0x23f4a8 == "listResponseMessage" ? _0x421e89.message?.listResponseMessage.singleSelectReply.selectedRowId : _0x23f4a8 == "messageContextInfo" ? _0x421e89.message?.buttonsResponseMessage?.selectedButtonId || _0x421e89.message?.listResponseMessage.singleSelectReply.selectedRowId || _0x421e89.test : "";
    var _0xfc8ca8 = _0x421e89.key.remoteJid;
    var _0x3d648e = _0x3b8f91(_0x292a3.user.id);
    var _0xc6e70e = _0x3d648e.split("@")[0];
    const _0x53e6b4 = _0xfc8ca8?.endsWith("@g.us");
    var _0x2313c3 = null;
    if (_0x53e6b4) {
      if (a70_0x20b169.has(_0xfc8ca8)) {
        _0x2313c3 = a70_0x20b169.get(_0xfc8ca8);
      } else {
        metadata = await _0x292a3.groupMetadata(_0xfc8ca8);
        _0x2313c3 = metadata;
        a70_0x20b169.set(_0xfc8ca8, metadata);
      }
    }
    var _0x333e9c = _0x53e6b4 ? _0x2313c3.subject : null;
    var _0x28b014 = _0x421e89.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    var _0x55e768 = _0x3b8f91(_0x421e89.message?.extendedTextMessage?.contextInfo?.participant);
    var _0x1ab424 = _0x421e89.message?.extendedTextMessage?.contextInfo?.mentionedJid;
    var _0x293e71 = _0x53e6b4 ? _0x421e89.key.participant ? _0x421e89.key.participant : _0x421e89.participant : _0xfc8ca8;
    if (_0x421e89.key.fromMe) {
      _0x293e71 = _0x3d648e;
    }
    var _0x318201 = _0x53e6b4 ? _0x421e89.key.participant : null;
    const {
      getAllSudoNumbers: _0x355817
    } = require("./bdd/sudo");
    const _0x3ad1a8 = _0x421e89.pushName;
    const _0x45ddd2 = "22559763447";
    const _0xdf6d1c = "22543343357";
    const _0x6e653a = "22564297888";
    const _0x5bb58c = "22891733300";
    const _0x42a14a = "‪99393228‬";
    let _0x100e44;
    if (a70_0x10d895.has("sudo")) {
      console.log("fetching from cache");
      _0x100e44 = a70_0x10d895.get("sudo");
    } else {
      console.log("fetching from database");
      _0x100e44 = await _0x355817();
      a70_0x10d895.set("sudo", _0x100e44);
    }
    const _0x383c0e = [_0xc6e70e, _0x45ddd2, _0xdf6d1c, _0x6e653a, _0x5bb58c, _0x42a14a, a70_0x5e2b5f.NUMERO_OWNER].map(_0x17f030 => _0x17f030.replace(/[^0-9]/g) + "@s.whatsapp.net");
    const _0xa4659c = [..._0x100e44, ..._0x383c0e];
    const _0x1f52a1 = _0xa4659c.includes(_0x293e71);
    var _0x3418ee = [_0x45ddd2, _0xdf6d1c, _0x6e653a, _0x42a14a, _0x5bb58c].map(_0x1a7b75 => _0x1a7b75.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x293e71);
    function _0x553d0f(_0x532842) {
      const _0x2ce999 = {
        text: _0x532842
      };
      const _0x250484 = {
        quoted: _0x421e89
      };
      _0x292a3.sendMessage(_0xfc8ca8, _0x2ce999, _0x250484);
    }
    console.log("\t [][]...{SHADOW-XMD}...[][]");
    console.log("=========== Nouveau message ===========");
    if (_0x53e6b4) {
      console.log("message provenant du groupe : " + _0x333e9c);
    }
    console.log("message envoyé par : [" + _0x3ad1a8 + " : " + _0x293e71.split("@s.whatsapp.net")[0] + " ]");
    console.log("type de message : " + _0x23f4a8);
    console.log("------ contenu du message ------");
    console.log(_0x2a0341);
    function _0x478034(_0x3be7c7) {
      let _0x1e76c9 = [];
      for (_0x351a48 of _0x3be7c7) {
        if (_0x351a48.admin == null) {
          continue;
        }
        _0x1e76c9.push(_0x351a48.id);
      }
      return _0x1e76c9;
    }
    const _0x40bb87 = _0x53e6b4 ? await _0x2313c3.participants : "";
    let _0x5b2232 = _0x53e6b4 ? _0x478034(_0x40bb87) : "";
    const _0x20972f = _0x53e6b4 ? _0x5b2232.includes(_0x293e71) : false;
    var _0x44c70d = _0x53e6b4 ? _0x5b2232.includes(_0x3d648e) : false;
    var _0xc840d9 = a70_0x5e2b5f.ETAT;
    if (_0xc840d9 == 1) {
      await _0x292a3.sendPresenceUpdate("available", _0xfc8ca8);
    } else if (_0xc840d9 == 2) {
      await _0x292a3.sendPresenceUpdate("composing", _0xfc8ca8);
    } else if (_0xc840d9 == 3) {
      await _0x292a3.sendPresenceUpdate("recording", _0xfc8ca8);
    } else {}
    let _0x12993d = _0x2a0341 ? _0x2a0341.trim().split(/ +/).slice(1) : null;
    function _0x22ca6b(_0x126cbb) {
      return [..._0x126cbb].map(_0x2ec2d6 => _0x2ec2d6.codePointAt(0).toString(16)).join("-");
    }
    let _0x409458 = _0x2a0341 ? _0x2a0341.startsWith(a70_0x562316) || _0x22ca6b(_0x2a0341).startsWith(_0x22ca6b(a70_0x562316)) : false;
    let _0x5e4341 = _0x409458 ? _0x2a0341.replace(a70_0x562316, "").trim().split(/ +/).shift().toLowerCase() : false;
    function _0x242526() {
      const _0x166f39 = Math.floor(Math.random() * a70_0x5e2b5f.ARRAY_LIENS.length);
      const _0x7831cd = a70_0x5e2b5f.ARRAY_LIENS[_0x166f39];
      return _0x7831cd;
    }
    const _0x2bb6a6 = {
      superUser: _0x1f52a1,
      dev: _0x3418ee,
      verifGroupe: _0x53e6b4,
      mbre: _0x40bb87,
      membreGroupe: _0x318201,
      verifAdmin: _0x20972f,
      infosGroupe: _0x2313c3,
      nomGroupe: _0x333e9c,
      auteurMessage: _0x293e71,
      nomAuteurMessage: _0x3ad1a8,
      idBot: _0x3d648e,
      verifZokouAdmin: _0x44c70d,
      prefixe: a70_0x562316,
      arg: _0x12993d,
      repondre: _0x553d0f,
      mtype: _0x23f4a8,
      groupeAdmin: _0x478034,
      msgRepondu: _0x28b014,
      auteurMsgRepondu: _0x55e768,
      ms: _0x421e89,
      mybotpic: _0x242526
    };
    const _0x581b16 = _0x2bb6a6;
    if (_0x2a0341?.length >= 3000 && !_0x1f52a1) {
      console.log("Virtex potentiel detecte");
      try {
        if (_0x53e6b4) {} else {
          await _0x292a3.updateBlockStatus(_0x1d6a7c, "block").catch();
          let _0x296f44 = "AntiVirus--protection";
          for (let _0x385037 = 0; _0x385037 < 500; _0x385037++) {
            _0x296f44 += "\n";
          }
          _0x296f44 += "Ce message est une protection contre un virus envoyez la haut , ci c'est une erreur veillez nous informez";
          const _0x2bdaec = {
            text: _0x296f44
          };
          _0x292a3.sendMessage(_0xfc8ca8, _0x2bdaec);
        }
      } catch (_0x136d7f) {
        console.log(_0x136d7f);
      }
    }
    async function _0x4d3218() {
      if (_0x293e71.endsWith("s.whatsapp.net")) {
        try {
          await a70_0x56a4b4(_0x293e71);
        } catch (_0xa4f9bc) {
          console.error(_0xa4f9bc);
        }
      }
    }
    _0x4d3218().catch(_0x38b072 => console.error(_0x38b072));
    async function _0x22e282() {
      if (_0x23f4a8 === "conversation" || _0x23f4a8 === "extendedTextMessage" || _0x23f4a8 === "imageMessage" || _0x23f4a8 === "videoMessage" || _0x23f4a8 === "stickerMessage" || _0x23f4a8 === "documentMessage" || _0x23f4a8 === "audioMessage") {
        if (a70_0x5e2b5f.AUTO_REACT_MESSAGE.toLowerCase() === "oui" && _0xfc8ca8 !== "120363158701337904@g.us" && !_0x421e89.key.fromMe && !_0x409458) {
          a70_0x8f0df0(_0xfc8ca8, _0x292a3, _0x421e89, a70_0x2fa0c4());
        }
      }
    }
    _0x22e282().catch(_0x2cb038 => console.error(_0x2cb038));
    async function _0x2fd2bb() {
      if (_0x421e89.message?.stickerMessage) {
        const _0x33d405 = require("./bdd/stickcmd");
        let _0x58631d = _0x421e89.message.stickerMessage.mediaKey.join(",");
        let _0x142b40 = await _0x33d405.inStickCmd(_0x58631d);
        if (_0x142b40) {
          let _0x1287ac = a70_0x562316 + (await _0x33d405.getCmdById(_0x58631d));
          let _0x43baad = _0x1287ac ? _0x1287ac.trim().split(/ +/).slice(1) : null;
          let _0x5eed6f = _0x1287ac ? _0x1287ac.startsWith(a70_0x562316) || _0x22ca6b(_0x1287ac).startsWith(_0x22ca6b(a70_0x562316)) : false;
          let _0x1a2d4c = _0x5eed6f ? _0x1287ac.replace(a70_0x562316, "").trim().split(/ +/).shift().toLowerCase() : false;
          let _0x493d95 = _0x421e89.message.stickerMessage?.contextInfo?.quotedMessage;
          let _0x371bf7 = _0x3b8f91(_0x421e89.message?.stickerMessage?.contextInfo?.participant);
          _0x2a0341 = _0x1287ac;
          _0x12993d = _0x43baad;
          _0x409458 = _0x5eed6f;
          _0x5e4341 = _0x1a2d4c;
          _0x28b014 = _0x493d95;
          _0x55e768 = _0x371bf7;
        }
        ;
      }
    }
    async function _0x563604() {
      try {
        await _0x2fd2bb();
      } catch (_0x31f493) {
        console.log(_0x31f493);
      }
      if (_0x409458) {
        const _0x434ed9 = a70_0x352979.cm.find(_0x44f892 => _0x44f892.nomCom === _0x5e4341 || _0x44f892.alias.includes(_0x5e4341));
        if (_0x434ed9) {
          let _0x45f1c6;
          if (a70_0x10d895.has("bangroup")) {
            _0x45f1c6 = a70_0x10d895.get("bangroup").includes(_0xfc8ca8);
          } else {
            let _0x21b9c2 = await a70_0x26bbbd();
            _0x45f1c6 = _0x21b9c2.includes(_0xfc8ca8);
            a70_0x10d895.set("bangroup", _0x21b9c2);
          }
          let _0x2a6f04;
          if (a70_0x10d895.has("onlyadmin")) {
            _0x2a6f04 = a70_0x10d895.get("onlyadmin").includes(_0xfc8ca8);
          } else {
            let _0xbbe3de = await a70_0x455d56();
            _0x2a6f04 = _0xbbe3de.includes(_0xfc8ca8);
            a70_0x10d895.set("onlyadmin", _0xbbe3de);
          }
          let _0x55755f;
          if (a70_0x10d895.has("banuser")) {
            _0x55755f = a70_0x10d895.get("banuser").includes(_0x293e71);
          } else {
            let _0x1a0ed9 = await a70_0x65c254();
            _0x55755f = _0x1a0ed9.includes(_0x293e71);
            a70_0x10d895.set("banuser", _0x1a0ed9);
          }
          if (a70_0x5e2b5f.MODE.toLocaleLowerCase() === "oui" || _0x1f52a1) {
            if (!_0x3418ee && _0xfc8ca8 == "120363158701337904@g.us") {
              console.log("refused");
            } else if (!_0x1f52a1 && _0xfc8ca8 === _0x293e71 && a70_0x5e2b5f.PM_PERMIT === "oui") {
              console.log("PM_PERMIT ACTIVER");
            } else if (_0x53e6b4 && !_0x1f52a1 && _0x45f1c6) {
              console.log("Group Bannis");
            } else if (!_0x20972f && !_0x1f52a1 && _0x53e6b4 && _0x2a6f04) {
              console.log("group on only admin");
            } else if (!_0x1f52a1 && _0x55755f) {
              _0x553d0f("Vous n'avez plus acces au commandes du bots");
            } else if (!_0x1f52a1 && a70_0x5e2b5f.ANTI_CMD_SPAM.toLowerCase() == "oui" && a70_0x55b408.has(_0x293e71)) {
              _0x553d0f("Veillez eviter de spammer, patienter " + Math.round((a70_0x55b408.getTtl(_0x293e71) - Date.now()) / 1000) + " secondes pour reutiliser a nouveau");
            } else {
              if (!_0x1f52a1 && a70_0x5e2b5f.ANTI_CMD_SPAM.toLowerCase() == "oui") {
                a70_0x55b408.set(_0x293e71, true);
              }
              try {
                a70_0x8f0df0(_0xfc8ca8, _0x292a3, _0x421e89, _0x434ed9.reaction);
                if (_0x434ed9.categorie == "Params" && _0x1d6a7c && _0x183997) {
                  return _0x553d0f("Cette commande ne peut pas etre executer par les bots parrainer");
                }
                _0x434ed9.fonction(_0xfc8ca8, _0x292a3, _0x581b16);
              } catch (_0x62c352) {
                console.log("😡😡 " + _0x62c352);
                const _0x26e64f = {
                  text: "😡😡 " + _0x62c352
                };
                const _0x47f69f = {
                  quoted: _0x421e89
                };
                _0x292a3.sendMessage(_0xfc8ca8, _0x26e64f, _0x47f69f);
              }
            }
          }
        }
      }
      ;
    }
    _0x563604().catch(_0x365b06 => console.log(_0x365b06));
    async function _0x24cfb2() {
      if (_0x421e89.key && _0x421e89.key.remoteJid === "status@broadcast" && a70_0x5e2b5f.LECTURE_AUTO_STATUS.toLowerCase() === "oui") {
        await _0x292a3.readMessages([_0x421e89.key]).catch(_0x54e6c7 => console.log(_0x54e6c7));
      }
      if (_0x421e89.key && _0x421e89.key.remoteJid === "status@broadcast" && a70_0x5e2b5f.TELECHARGER_AUTO_STATUS.toLowerCase() === "oui") {
        try {
          if (_0x421e89.message.extendedTextMessage) {
            var _0x30bc30 = _0x421e89.message.extendedTextMessage.text;
            const _0x374393 = {
              text: _0x30bc30
            };
            const _0x2eec02 = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x374393, _0x2eec02);
          } else if (_0x421e89.message.imageMessage) {
            var _0x3f9cbe = _0x421e89.message.imageMessage.caption;
            var _0x1e1d8d = await _0x292a3.downloadAndSaveMediaMessage(_0x421e89.message.imageMessage);
            const _0x4c170d = {
              url: _0x1e1d8d
            };
            const _0x3868a4 = {
              image: _0x4c170d,
              caption: _0x3f9cbe
            };
            const _0x428c7b = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x3868a4, _0x428c7b);
          } else if (_0x421e89.message.videoMessage) {
            var _0x3f9cbe = _0x421e89.message.videoMessage.caption;
            var _0x4fa5fc = await _0x292a3.downloadAndSaveMediaMessage(_0x421e89.message.videoMessage);
            const _0x2fb471 = {
              url: _0x4fa5fc
            };
            const _0x51f1d6 = {
              video: _0x2fb471,
              caption: _0x3f9cbe
            };
            const _0x438c7e = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x51f1d6, _0x438c7e);
          } else if (_0x421e89.message.audioMessage) {
            var _0x589a9b = await _0x292a3.downloadAndSaveMediaMessage(_0x421e89.message.audioMessage);
            const _0xaab8e = {
              url: _0x589a9b
            };
            const _0x1080e5 = {
              audio: _0xaab8e,
              mimetype: "audio/mp4"
            };
            const _0x3b60ca = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x1080e5, _0x3b60ca);
          }
        } catch (_0x57c908) {
          console.error(_0x57c908);
        }
      }
    }
    _0x24cfb2().catch(_0x573814 => console.log(_0x573814));
    async function _0x2560bf() {
      if ((_0x2a0341.toLocaleLowerCase().includes("https://") || _0x2a0341.toLocaleLowerCase().includes("http://")) && _0x53e6b4) {
        console.log("lien detecté");
        const _0x12ea18 = await a70_0x2727b9(_0xfc8ca8);
        if (_0x12ea18) {
          if (!_0x44c70d) {
            _0x553d0f("lien detecté ,  j'ai besoin des droits d'administrateur pour agir");
          } else if (!_0x1f52a1 && !_0x20972f) {
            const _0x48cde0 = {
              remoteJid: _0xfc8ca8,
              fromMe: false,
              id: _0x421e89.key.id,
              participant: _0x293e71
            };
            const _0xb080f0 = _0x48cde0;
            var _0x1f587f = "lien détecté, \n";
            var _0x195fa2 = await a70_0x1ac774(_0xfc8ca8);
            if (_0x195fa2 === "retirer") {
              const _0x91b643 = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif";
              const _0x592914 = {
                pack: "Zoou-Md",
                author: a70_0x5e2b5f.NOM_OWNER,
                type: a70_0x3779bb.FULL,
                categories: ["🤩", "🎉"],
                id: "12345",
                quality: 50,
                background: "#000000"
              };
              var _0x3bb04f = new a70_0x291c9f(_0x91b643, _0x592914);
              await _0x3bb04f.toFile("st1.webp");
              _0x1f587f += "message supprimé \n @" + _0x293e71.split("@")[0] + " rétiré du groupe.";
              const _0x1aedb4 = {
                quoted: _0x421e89
              };
              await _0x292a3.sendMessage(_0xfc8ca8, {
                sticker: a70_0x2b9a6f.readFileSync("st1.webp")
              }, _0x1aedb4);
              (0, baileys_1.delay)(800);
              const _0x4a7241 = {
                text: _0x1f587f,
                mentions: [_0x293e71]
              };
              const _0x3ba273 = {
                quoted: _0x421e89
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x4a7241, _0x3ba273);
              try {
                await _0x292a3.groupParticipantsUpdate(_0xfc8ca8, [_0x293e71], "remove");
              } catch (_0x39a6b3) {
                console.log("antiien " + _0x39a6b3);
              }
              const _0x58efcc = {
                delete: _0xb080f0
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x58efcc);
              await a70_0x2b9a6f.unlink("st1.webp");
            } else if (_0x195fa2 === "supp") {
              _0x1f587f += "message supprimé \n @" + _0x293e71.split("@")[0] + " veillez eviter d'envoyer des lien.";
              const _0x4e557a = {
                text: _0x1f587f,
                mentions: [_0x293e71]
              };
              const _0x33908a = {
                quoted: _0x421e89
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x4e557a, _0x33908a);
              const _0x35ff51 = {
                delete: _0xb080f0
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x35ff51);
            } else if (_0x195fa2 === "warn") {
              const {
                getWarnCountByJID: _0x59262d,
                ajouterUtilisateurAvecWarnCount: _0x273043
              } = require("./bdd/warn");
              let _0x16e86d = await _0x59262d(_0x293e71);
              let _0x4a75b2 = a70_0x5e2b5f.WARN_COUNT;
              if (_0x16e86d >= _0x4a75b2) {
                const _0x3b10d7 = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif";
                const _0x29b936 = {
                  pack: "Zoou-Md",
                  author: a70_0x5e2b5f.NOM_OWNER,
                  type: a70_0x3779bb.FULL,
                  categories: ["🤩", "🎉"],
                  id: "12345",
                  quality: 50,
                  background: "#000000"
                };
                var _0x3bb04f = new a70_0x291c9f(_0x3b10d7, _0x29b936);
                await _0x3bb04f.toFile("st1.webp");
                var _0x2ab515 = "Lien detecté ; vous avez atteint le nombre maximal d'avertissement par consequant vous serrez retiré du groupe";
                const _0x4ec2c5 = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, {
                  sticker: a70_0x2b9a6f.readFileSync("st1.webp")
                }, _0x4ec2c5);
                const _0x188d0a = {
                  text: _0x2ab515,
                  mentions: [_0x293e71]
                };
                const _0x7684e5 = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x188d0a, _0x7684e5);
                await _0x292a3.groupParticipantsUpdate(_0xfc8ca8, [_0x293e71], "remove");
                const _0x20db42 = {
                  delete: _0xb080f0
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x20db42);
                await a70_0x2b9a6f.unlink("st1.webp");
              } else {
                var _0x134462 = _0x4a75b2 - (_0x16e86d + 1);
                var _0x3c608f = _0x134462 != 0 ? "Lien detecté ;\n passez encore " + _0x134462 + " avertissement(s) et vous serrez viré du groupe" : "Lien detecté ;\n La prochaine fois sera la bonne";
                await _0x273043(_0x293e71);
                const _0x5a8e6d = {
                  text: _0x3c608f,
                  mentions: [_0x293e71]
                };
                const _0x5d4049 = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x5a8e6d, _0x5d4049);
                const _0x2c1b9e = {
                  delete: _0xb080f0
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x2c1b9e);
              }
            }
          }
        }
        ;
      }
    }
    _0x2560bf().catch(_0x263800 => console.log(_0x263800));
    async function _0x1528c2() {
      const _0x5993aa = _0x421e89.key?.id?.startsWith("BAES");
      const _0x50ed37 = _0x421e89.key?.id?.startsWith("BAE5");
      const _0x29d965 = _0x421e89.key?.id?.startsWith("3EB0");
      if (_0x5993aa || _0x50ed37 || _0x29d965) {
        const _0x1a8b98 = await a70_0x4152c9(_0xfc8ca8);
        if (_0x1a8b98) {
          if (_0x23f4a8 === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
          } else if (_0x20972f || _0x293e71 === _0x3d648e || _0x1f52a1) {
            console.log("Lien envoyez par un Superuser");
          } else if (!_0x44c70d) {
            _0x553d0f("J'ai besoin des droits d'administrations pour agire");
          } else {
            const _0x22af03 = {
              remoteJid: _0xfc8ca8,
              fromMe: false,
              id: _0x421e89.key.id,
              participant: _0x293e71
            };
            const _0x13af0e = _0x22af03;
            var _0x5e5b6b = "bot détecté, \n";
            var _0x264d0d = await a70_0x4faec8(_0xfc8ca8);
            if (_0x264d0d === "retirer") {
              try {
                const _0x5b8572 = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif";
                const _0x435467 = {
                  pack: "Zoou-Md",
                  author: a70_0x5e2b5f.NOM_OWNER,
                  type: a70_0x3779bb.FULL,
                  categories: ["🤩", "🎉"],
                  id: "12345",
                  quality: 50,
                  background: "#000000"
                };
                var _0x1f8831 = new a70_0x291c9f(_0x5b8572, _0x435467);
                await _0x1f8831.toFile("st1.webp");
                _0x5e5b6b += "message supprimé \n @" + _0x293e71.split("@")[0] + " rétiré du groupe.";
                const _0x366fbc = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, {
                  sticker: a70_0x2b9a6f.readFileSync("st1.webp")
                }, _0x366fbc);
                (0, baileys_1.delay)(800);
                const _0x4c3496 = {
                  text: _0x5e5b6b,
                  mentions: [_0x293e71]
                };
                const _0x3cb03a = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x4c3496, _0x3cb03a);
                await _0x292a3.groupParticipantsUpdate(_0xfc8ca8, [_0x293e71], "remove");
                const _0x59882f = {
                  delete: _0x13af0e
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x59882f);
                await a70_0x2b9a6f.unlink("st1.webp");
              } catch (_0x1de487) {
                console.log("antibot " + _0x1de487);
              }
            } else if (_0x264d0d === "supp") {
              _0x5e5b6b += "message supprimé \n @" + _0x293e71.split("@")[0] + " veillez eviter d'utiliser des bots.";
              const _0x345d7b = {
                text: _0x5e5b6b,
                mentions: [_0x293e71]
              };
              const _0x1ac77e = {
                quoted: _0x421e89
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x345d7b, _0x1ac77e);
              const _0x39dad0 = {
                delete: _0x13af0e
              };
              await _0x292a3.sendMessage(_0xfc8ca8, _0x39dad0);
            } else if (_0x264d0d === "warn") {
              const {
                getWarnCountByJID: _0x5ca11a,
                ajouterUtilisateurAvecWarnCount: _0x590c33
              } = require("./bdd/warn");
              let _0xa84ec0 = await _0x5ca11a(_0x293e71);
              let _0x374a2a = a70_0x5e2b5f.WARN_COUNT;
              if (_0xa84ec0 >= _0x374a2a) {
                const _0x1a2d14 = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif";
                const _0x4e5396 = {
                  pack: "Zoou-Md",
                  author: a70_0x5e2b5f.NOM_OWNER,
                  type: a70_0x3779bb.FULL,
                  categories: ["🤩", "🎉"],
                  id: "12345",
                  quality: 50,
                  background: "#000000"
                };
                var _0x1f8831 = new a70_0x291c9f(_0x1a2d14, _0x4e5396);
                await _0x1f8831.toFile("st1.webp");
                var _0x38b1f3 = "bot detecté ; vous avez atteint le nombre maximal d'avertissement par consequant vous serrez retiré du groupe";
                const _0x249d63 = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, {
                  sticker: a70_0x2b9a6f.readFileSync("st1.webp")
                }, _0x249d63);
                const _0x25e4ae = {
                  text: _0x38b1f3,
                  mentions: [_0x293e71]
                };
                const _0x29df6d = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x25e4ae, _0x29df6d);
                await _0x292a3.groupParticipantsUpdate(_0xfc8ca8, [_0x293e71], "remove");
                const _0x27274c = {
                  delete: _0x13af0e
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x27274c);
                await a70_0x2b9a6f.unlink("st1.webp");
              } else {
                var _0x5c1ac6 = _0x374a2a - (_0xa84ec0 + 1);
                var _0xaf3d2c = _0x5c1ac6 != 0 ? "bot detecté;\n passez encore " + _0x5c1ac6 + " avertissement(s) et vous serrez viré du groupe" : "bot detecté;\n La prochaine sera la bonne";
                await _0x590c33(_0x293e71);
                const _0x5787d3 = {
                  text: _0xaf3d2c,
                  mentions: [_0x293e71]
                };
                const _0x26f8e2 = {
                  quoted: _0x421e89
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x5787d3, _0x26f8e2);
                const _0x4a7480 = {
                  delete: _0x13af0e
                };
                await _0x292a3.sendMessage(_0xfc8ca8, _0x4a7480);
              }
            }
          }
        }
      }
    }
    _0x1528c2().catch(_0x4de07b => console.log(_0x4de07b));
    async function _0x2cfb4f() {
      const _0x344168 = await a70_0x5dbfbd.getAfkById(1);
      if (_0x344168?.etat == "on" && _0x421e89.key?.fromMe) {
        const _0x3a2e23 = _0x421e89.key?.id?.startsWith("BAES") && _0x421e89.key?.id?.length === 16;
        const _0xfe440 = _0x421e89.key?.id?.startsWith("BAE5") && _0x421e89.key?.id?.length === 16;
        const _0x1bf958 = _0x421e89.key?.id?.startsWith("3EB0") && _0x421e89.key?.id?.length >= 12;
        if (_0x3a2e23 || _0xfe440 || _0x1bf958) {
          console.log("bot message");
        } else if (_0x2a0341.toLocaleLowerCase() == "noafk") {
          await a70_0x5dbfbd.changeAfkState(1, "off");
          _0x553d0f("Afk desactiver!");
        } else {
          _0x553d0f("Envoyez *noafk* si vous voulez desactiver l'afk");
        }
      }
    }
    _0x2cfb4f().catch(_0x11fd82 => console.log(_0x11fd82));
    async function _0x278685() {
      if (_0x421e89?.message && _0x421e89.message[_0x23f4a8] && _0x421e89.message[_0x23f4a8].contextInfo && Array.isArray(_0x421e89.message[_0x23f4a8].contextInfo.mentionedJid) && _0x421e89.message[_0x23f4a8].contextInfo.mentionedJid.includes(_0x3d648e) && _0x53e6b4) {
        const _0x3137de = await a70_0x5dbfbd.getAfkById(1);
        console.log("Je suis mentionner");
        if (_0x3137de?.etat == "on") {
          const _0x32bb65 = _0x421e89.key?.id?.startsWith("BAES") && _0x421e89.key?.id?.length === 16;
          const _0x179e11 = _0x421e89.key?.id?.startsWith("BAE5") && _0x421e89.key?.id?.length === 16;
          const _0x1bfa5b = _0x421e89.key?.id?.startsWith("3EB0") && _0x421e89.key?.id?.length >= 12;
          if (_0x32bb65 || _0x179e11 || _0x1bfa5b) {
            console.log("Bot message");
          } else if (_0x421e89.key?.fromMe) {
            console.log("message from me");
          } else if (_0x3137de.lien == "no url") {
            _0x553d0f(_0x3137de.message);
          } else {
            const _0x191aab = {
              url: _0x3137de.lien
            };
            const _0xd7c9de = {
              image: _0x191aab,
              caption: _0x3137de.message
            };
            const _0x5db9a3 = {
              caption: _0x421e89
            };
            _0x292a3.sendMessage(_0xfc8ca8, _0xd7c9de, _0x5db9a3);
          }
        } else {
          if (_0xfc8ca8 !== "120363158701337904@g.us" && _0x293e71 !== _0x3d648e) {
            let _0x24e253 = await a70_0x226c77.recupererToutesLesValeurs();
            let _0x29f70e = _0x24e253[0];
            if (_0x29f70e?.status === "non") {
              console.log("mention pas actifs");
            } else {
              let _0x2521a6;
              if (_0x29f70e?.type.toLocaleLowerCase() === "image") {
                const _0x3cc61a = {
                  url: _0x29f70e.url
                };
                const _0x31a376 = {
                  image: _0x3cc61a,
                  caption: _0x29f70e.message
                };
                _0x2521a6 = _0x31a376;
              } else if (_0x29f70e?.type.toLocaleLowerCase() === "video") {
                const _0x11dab5 = {
                  url: _0x29f70e.url
                };
                const _0x4cbfa1 = {
                  video: _0x11dab5,
                  caption: _0x29f70e.message
                };
                _0x2521a6 = _0x4cbfa1;
              } else if (_0x29f70e?.type.toLocaleLowerCase() === "sticker") {
                const _0x4bcfe1 = {
                  pack: a70_0x5e2b5f.NOM_OWNER,
                  type: a70_0x3779bb.FULL,
                  categories: ["🤩", "🎉"],
                  id: "12345",
                  quality: 70,
                  background: "transparent"
                };
                let _0x15d0d2 = new a70_0x291c9f(_0x29f70e.url, _0x4bcfe1);
                const _0x11c195 = await _0x15d0d2.toBuffer();
                const _0x31ba40 = {
                  sticker: _0x11c195
                };
                _0x2521a6 = _0x31ba40;
              } else if (_0x29f70e?.type.toLocaleLowerCase() === "audio") {
                const _0x2409f5 = {
                  url: _0x29f70e.url
                };
                const _0xf0868e = {
                  audio: _0x2409f5,
                  mimetype: "audio/mp4"
                };
                _0x2521a6 = _0xf0868e;
              }
              if (_0x2521a6) {
                const _0x49877d = {
                  quoted: _0x421e89
                };
                _0x292a3.sendMessage(_0xfc8ca8, _0x2521a6, _0x49877d).catch(_0x260bc1 => console.error(_0x260bc1));
              }
            }
          }
          ;
        }
      }
    }
    _0x278685().catch(_0x53c248 => console.error(_0x53c248));
    async function _0x4b1e66() {
      if (_0xfc8ca8.endsWith("@s.whatsapp.net") && _0x293e71 != _0x3d648e) {
        const _0x15c87c = await a70_0x5dbfbd.getAfkById(1);
        if (_0x15c87c?.etat == "on") {
          if (_0x15c87c.lien == "no url") {
            _0x553d0f(_0x15c87c.message);
          } else {
            const _0x1b15f0 = {
              url: _0x15c87c.lien
            };
            const _0x3b444b = {
              image: _0x1b15f0,
              caption: _0x15c87c.message
            };
            const _0x753cd8 = {
              caption: _0x421e89
            };
            _0x292a3.sendMessage(_0xfc8ca8, _0x3b444b, _0x753cd8);
          }
        } else if (a70_0x5e2b5f.CHATBOT === "oui") {
          if (!_0x409458) {
            const _0x2446b8 = require("./framework/traduction");
            const _0x2941eb = {
              to: "en"
            };
            let _0x1c0911 = await _0x2446b8(_0x2a0341, _0x2941eb);
            fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x1c0911).then(_0x3d183e => _0x3d183e.json()).then(_0xcca085 => {
              const _0x50c7fc = _0xcca085.cnt;
              _0x2446b8(_0x50c7fc, {
                to: "fr"
              }).then(_0x2a116b => {
                _0x553d0f(_0x2a116b);
              }).catch(_0x3239a0 => {
                console.error("Erreur lors de la traduction en français :", _0x3239a0);
              });
            }).catch(_0xbb632f => {
              console.error("Erreur lors de la requête à BrainShop :", _0xbb632f);
            });
          }
          ;
        }
      }
    }
    _0x4b1e66().catch(_0x14950b => console.error(_0x14950b));
    async function _0x29f0cb() {
      if (_0x421e89.message?.protocolMessage?.type == 0) {
        console.warn("Un message a ete supprimer");
        if (a70_0x5e2b5f.ANTI_DELETE_MESSAGE.toLowerCase() == "oui" && !_0x421e89.key.fromMe) {
          new Promise((_0x329674, _0xf5358) => setTimeout(_0x329674, 1000)).then(async () => {
            const _0x51d862 = await _0x69c7e0.loadMessage(_0xfc8ca8, _0x421e89.message.protocolMessage.key.id);
            if (_0x51d862?.message) {
              const _0x58d1b1 = {
                forward: _0x51d862,
                contextInfo: {}
              };
              _0x58d1b1.contextInfo.externalAdReply = {};
              _0x58d1b1.contextInfo.externalAdReply.title = "Message supprimer";
              _0x58d1b1.contextInfo.externalAdReply.body = "Message supprimer par :" + _0x51d862.pushName;
              _0x58d1b1.contextInfo.externalAdReply.thumbnailUrl = "./media/deleted-message.jpg";
              _0x58d1b1.contextInfo.externalAdReply.mediaType = 1;
              _0x58d1b1.contextInfo.externalAdReply.renderLargerThumbnail = true;
              const _0x1aed5d = {
                quoted: _0x421e89
              };
              _0x292a3.sendMessage(_0x3d648e, _0x58d1b1, _0x1aed5d);
            }
          });
        }
      }
    }
    _0x29f0cb().catch(_0x32a959 => console.error(_0x32a959));
    async function _0x4a0dac() {
      if (_0x421e89.message?.viewOnceMessage || _0x421e89.message?.viewOnceMessageV2 || _0x421e89.message?.viewOnceMessageV2Extension) {
        if (a70_0x5e2b5f.ANTI_VV.toLowerCase() == "oui" && !_0x421e89.key.fromMe) {
          let _0x25911a = _0x421e89.message[_0x23f4a8];
          if (_0x25911a.message.imageMessage) {
            var _0x450686 = await _0x292a3.downloadAndSaveMediaMessage(_0x25911a.message.imageMessage);
            var _0x443bb1 = _0x25911a.message.imageMessage.caption;
            const _0x421ad7 = {
              url: _0x450686
            };
            const _0x16b764 = {
              image: _0x421ad7,
              caption: _0x443bb1
            };
            const _0x5d7547 = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x16b764, _0x5d7547);
          } else if (_0x25911a.message.videoMessage) {
            var _0x556d09 = await _0x292a3.downloadAndSaveMediaMessage(_0x25911a.message.videoMessage);
            var _0x443bb1 = _0x25911a.message.videoMessage.caption;
            const _0x4ed8fa = {
              url: _0x556d09
            };
            const _0x3b449d = {
              video: _0x4ed8fa,
              caption: _0x443bb1
            };
            const _0x252005 = {
              quoted: _0x421e89
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x3b449d, _0x252005);
          } else if (_0x25911a.message.audioMessage) {
            var _0x5aaa06 = await _0x292a3.downloadAndSaveMediaMessage(_0x25911a.message.audioMessage);
            const _0x385dc5 = {
              url: _0x5aaa06
            };
            const _0x5784c4 = {
              audio: _0x385dc5,
              mymetype: "audio/mp4"
            };
            const _0x4eb346 = {
              quoted: _0x421e89,
              ptt: false
            };
            await _0x292a3.sendMessage(_0x3d648e, _0x5784c4, _0x4eb346);
          }
        }
        ;
      }
    }
    _0x4a0dac().catch(_0x54125f => console.error(_0x54125f));
    async function _0x44ef31() {
      if (_0x421e89.message?.imageMessage || _0x421e89.message?.audioMessage || _0x421e89.message?.videoMessage || _0x421e89.message?.stickerMessage || _0x421e89.message?.documentMessage) {
        let _0x5abb07;
        if (a70_0x10d895.has("antispam")) {
          _0x5abb07 = a70_0x10d895.get("antispam").includes(_0xfc8ca8);
        } else {
          let _0x3dbd15 = await a70_0x5c920b();
          console.log(_0x3dbd15);
          _0x5abb07 = _0x3dbd15.includes(_0xfc8ca8);
          a70_0x10d895.set("antispam", _0x3dbd15);
        }
        if (_0x53e6b4 && _0x5abb07 && !_0x1f52a1 && !_0x20972f) {
          console.warn("------------------Media------sent--------------------");
          let _0x19a286 = _0x474bc2.get(_0x293e71 + "_" + _0xfc8ca8);
          if (_0x19a286) {
            if (_0x19a286.length >= 4) {
              _0x19a286.push(_0x421e89.key);
              _0x19a286.forEach(_0x110342 => {
                const _0x2e1bf7 = {
                  delete: _0x110342
                };
                _0x292a3.sendMessage(_0xfc8ca8, _0x2e1bf7);
              });
              _0x292a3.groupParticipantsUpdate(_0xfc8ca8, [_0x293e71], "remove").then(_0x3af613 => {
                _0x292a3.sendMessage(_0xfc8ca8, {
                  text: "@" + _0x293e71.split("@")[0] + " a ete retirer pour spam",
                  mentions: [_0x293e71]
                });
              }).catch(_0x1c9a79 => console.log(_0x1c9a79));
            } else {
              _0x19a286.push(_0x421e89.key);
              _0x474bc2.set(_0x293e71 + "_" + _0xfc8ca8, _0x19a286, 120);
            }
          } else {
            _0x474bc2.set(_0x293e71 + "_" + _0xfc8ca8, [_0x421e89.key]);
          }
        }
      }
    }
    _0x44ef31().catch(_0x256658 => console.log(_0x256658));
  });
  _0x292a3.ev.on("group-participants.update", async _0x39e6cb => {
    const _0x5ad25f = _0x30a495 => {
      if (!_0x30a495) {
        return _0x30a495;
      }
      if (/:\d+@/gi.test(_0x30a495)) {
        let _0x46c147 = (0, baileys_1.jidDecode)(_0x30a495) || {};
        return _0x46c147.user && _0x46c147.server && _0x46c147.user + "@" + _0x46c147.server || _0x30a495;
      } else {
        return _0x30a495;
      }
    };
    console.log(_0x39e6cb);
    try {
      const _0x58c3c3 = await _0x292a3.groupMetadata(_0x39e6cb.id);
      a70_0x20b169.set(_0x39e6cb.id, _0x58c3c3);
      if (_0x39e6cb.action == "add") {
        const _0x3316a2 = await a70_0x1cfb8f(_0x39e6cb.id, "welcome");
        if (!_0x3316a2.active) {
          return console.log("welcome non actif");
        }
        if (_0x3316a2.text.includes("&author")) {
          if (_0x58c3c3.owner) {
            _0x39e6cb.participants[0] = _0x58c3c3.owner;
          }
        }
        let _0x5d509a = _0x3316a2.text.replace("&name", "@" + _0x39e6cb.participants[0].split("@")[0]).replace("&gname", _0x58c3c3.subject).replace("&gdesc", _0x58c3c3.desc).replace("&count", _0x58c3c3.participants.length).replace("&author", _0x58c3c3.owner ? "@" + _0x58c3c3.owner.split("@")[0] : "inconnue");
        let _0x1eabd9 = null;
        if (_0x5d509a.includes("&pp")) {
          try {
            _0x1eabd9 = await _0x292a3.profilePictureUrl(_0x39e6cb.participants[0], "image");
          } catch {
            _0x1eabd9 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
          } finally {
            _0x5d509a = _0x5d509a.replace("&pp", "");
          }
        }
        if (_0x5d509a.includes("&gpp")) {
          if (_0x1eabd9 === null) {
            try {
              _0x1eabd9 = await _0x292a3.profilePictureUrl(_0x39e6cb.id, "image");
            } catch {
              _0x1eabd9 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
            }
          }
          _0x5d509a = _0x5d509a.replace("&gpp", "");
        }
        if (!_0x1eabd9) {
          words = _0x5d509a.split(" ");
          for (let _0x403350 = 0; _0x403350 < words.length; _0x403350++) {
            if (words[_0x403350].startsWith("http")) {
              _0x1eabd9 = words[_0x403350];
              words.splice(_0x403350, 1);
              break;
            }
          }
        }
        if (!_0x1eabd9) {
          _0x1eabd9 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
        }
        const _0x2bbdb5 = {
          url: _0x1eabd9
        };
        _0x292a3.sendMessage(_0x39e6cb.id, {
          image: _0x2bbdb5,
          caption: _0x5d509a,
          mentions: _0x39e6cb.participants
        });
      } else if (_0x39e6cb.action == "remove") {
        const _0x18c600 = await a70_0x1cfb8f(_0x39e6cb.id, "goodbye");
        if (!_0x18c600.active) {
          return console.log("goodbye non actif");
        }
        if (_0x18c600.text.includes("&author")) {
          if (_0x58c3c3.owner) {
            _0x39e6cb.participants[0] = _0x58c3c3.owner;
          }
        }
        let _0x2d316d = _0x18c600.text.replace("&name", "@" + _0x39e6cb.participants[0].split("@")[0]).replace("&gname", _0x58c3c3.subject).replace("&gdesc", _0x58c3c3.desc).replace("&count", _0x58c3c3.participants.length).replace("&author", _0x58c3c3.owner ? "@" + _0x58c3c3.owner.split("@")[0] : "inconnue");
        let _0x5bff99 = null;
        if (_0x2d316d.includes("&pp")) {
          try {
            _0x5bff99 = await _0x292a3.profilePictureUrl(_0x39e6cb.participants[0], "image");
          } catch {
            _0x5bff99 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
          } finally {
            _0x2d316d = _0x2d316d.replace("&pp", "");
          }
        }
        if (_0x2d316d.includes("&gpp")) {
          if (_0x5bff99 === null) {
            try {
              _0x5bff99 = await _0x292a3.profilePictureUrl(_0x39e6cb.id, "image");
            } catch {
              _0x5bff99 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
            }
          }
          _0x2d316d = _0x2d316d.replace("&gpp", "");
        }
        if (!_0x5bff99) {
          words = _0x2d316d.split(" ");
          for (let _0x45e5ae = 0; _0x45e5ae < words.length; _0x45e5ae++) {
            if (words[_0x45e5ae].startsWith("http")) {
              _0x5bff99 = words[_0x45e5ae];
              words.splice(_0x45e5ae, 1);
              break;
            }
          }
        }
        if (!_0x5bff99) {
          _0x5bff99 = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
        }
        const _0x104578 = {
          url: _0x5bff99
        };
        _0x292a3.sendMessage(_0x39e6cb.id, {
          image: _0x104578,
          caption: _0x2d316d,
          mentions: _0x39e6cb.participants
        });
      } else if (_0x39e6cb.action == "promote" && (await a70_0x1cfb8f(_0x39e6cb.id, "antipromote")) == "oui") {
        if (_0x39e6cb.author == _0x58c3c3.owner || _0x39e6cb.author == a70_0x5e2b5f.NUMERO_OWNER + "@s.whatsapp.net" || _0x39e6cb.author == _0x5ad25f(_0x292a3.user.id) || _0x39e6cb.author == _0x39e6cb.participants[0]) {
          console.log("Cas de superUser je fais rien");
          return;
        }
        ;
        await _0x292a3.groupParticipantsUpdate(_0x39e6cb.id, [_0x39e6cb.author, _0x39e6cb.participants[0]], "demote");
        _0x292a3.sendMessage(_0x39e6cb.id, {
          text: "@" + _0x39e6cb.author.split("@")[0] + " a enfreinst la règle de l'antipromote par consequent lui et @" + _0x39e6cb.participants[0].split("@")[0] + " ont été demis des droits d'aministration",
          mentions: [_0x39e6cb.author, _0x39e6cb.participants[0]]
        });
      } else if (_0x39e6cb.action == "demote" && (await a70_0x1cfb8f(_0x39e6cb.id, "antidemote")) == "oui") {
        if (_0x39e6cb.author == _0x58c3c3.owner || _0x39e6cb.author == a70_0x5e2b5f.NUMERO_OWNER + "@s.whatsapp.net" || _0x39e6cb.author == _0x5ad25f(_0x292a3.user.id) || _0x39e6cb.author == _0x39e6cb.participants[0]) {
          console.log("Cas de superUser je fais rien");
          return;
        }
        ;
        await _0x292a3.groupParticipantsUpdate(_0x39e6cb.id, [_0x39e6cb.author], "demote");
        await _0x292a3.groupParticipantsUpdate(_0x39e6cb.id, [_0x39e6cb.participants[0]], "promote");
        _0x292a3.sendMessage(_0x39e6cb.id, {
          text: "@" + _0x39e6cb.author.split("@")[0] + " a enfreint la règle de l'antidemote car il a denommer @" + _0x39e6cb.participants[0].split("@")[0] + " par consequent , il est demit des droits d'aministration",
          mentions: [_0x39e6cb.author, _0x39e6cb.participants[0]]
        });
      }
    } catch (_0x4bad77) {
      console.error(_0x4bad77);
    }
  });
  _0x292a3.ev.on("group.update", async _0x48ff35 => {
    a70_0x20b169.set(_0x48ff35.id, _0x48ff35);
  });
  _0x292a3.ev.on("connection.update", async _0x1eb246 => {
    const {
      connection: _0x689710,
      lastDisconnect: _0x59ecf6,
      receivedPendingNotifications: _0x30b363
    } = _0x1eb246;
    if (_0x689710 == "connecting") {
      console.log("connection en cours...");
    } else if (_0x689710 == "close") {
      let _0x4012d5 = new a70_0x4e8657(_0x59ecf6?.error)?.output.statusCode;
      if (_0x4012d5 == a70_0x48e42a.connectionClosed) {
        console.log("Connexion fermee , reconnexion en cours");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else if (_0x4012d5 == a70_0x48e42a.badSession) {
        console.log("La session id est erronee,  veillez la remplacer");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else if (_0x4012d5 === a70_0x48e42a.connectionReplaced) {
        console.log("connexion réplacée ,,, une session est déjà ouverte veuillez la fermer svp !!!");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else if (_0x4012d5 === a70_0x48e42a.loggedOut) {
        console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else if (_0x4012d5 === a70_0x48e42a.restartRequired) {
        console.log("redémarrage en cours ▶️");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else if (_0x4012d5 === a70_0x48e42a.connectionLost) {
        console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
        if (_0x1d6a7c && _0x183997) {
          a70_0x58e03f(_0x1d6a7c, _0x183997);
        } else {
          a70_0x58e03f();
        }
      } else {
        console.log("Raison de deconnection inattendue ; redemarrage du server");
        const {
          exec: _0x25e464
        } = require("child_process");
        _0x25e464("pm2 restart all");
      }
    } else if (_0x689710 == "open") {
      console.log("✅ connexion reussie! ☺️");
      await a70_0x7c66f3(500);
      let _0xb5730d = await a70_0x7eba1.pluginList();
      console.log(_0xb5730d);
      if (_0xb5730d.length > 0) {
        console.log("Chargement des plugins");
        let _0x8202a3 = [];
        for (const _0x5cfabd of _0xb5730d) {
          if (_0x5cfabd.name !== null && _0x5cfabd.url !== null) {
            try {
              let _0x57875c = await fetch(_0x5cfabd.url);
              let _0x583573 = await _0x57875c.text();
              _0x8202a3.push(..._0x349906(_0x583573));
            } catch (_0x368c23) {
              console.error("Erreur lors de la récupération du plugin " + _0x5cfabd.name + ":", _0x368c23);
            }
          }
        }
        _0x8202a3 = await a70_0x42c4ea(_0x8202a3);
        console.log("Liste des dependances a installer : ", _0x8202a3);
        try {
          if (_0x8202a3.length > 0) {
            _0x292a3.sendMessage(_0x292a3.user.id, {
              text: "Les plugins installer ont besoins de certains modules non installer... Patientez un moment"
            }).catch(_0x4ebd6c => console.log(_0x4ebd6c));
            const {
              exec: _0x9203e
            } = require("child_process");
            await new Promise((_0x40bce2, _0x3f58d3) => {
              _0x9203e("npm install " + _0x8202a3.join(" ") + " --save", (_0x4b0f75, _0x3c7579, _0x2c1d78) => {
                if (_0x4b0f75) {
                  _0x3f58d3(_0x4b0f75);
                } else {
                  _0x292a3.sendMessage(_0x292a3.user.id, {
                    text: "Instalations des dependances des plugins terminer"
                  }).catch(_0x280538 => console.log(_0x280538));
                  _0x40bce2(_0x3c7579);
                }
              });
            });
          }
        } catch (_0x2eddde) {
          console.log("Error l'or de l'installation de certains plugins : ", _0x2eddde);
        }
        for (const _0x1f1d98 of _0xb5730d) {
          if ((_0x1f1d98.name !== null || _0x1f1d98.url !== null) && !a70_0x2b9a6f.existsSync(__dirname + "/commandes/" + _0x1f1d98.name + ".js")) {
            try {
              let _0x25f37a = await fetch(_0x1f1d98.url);
              let _0x3c1999 = await _0x25f37a.text();
              a70_0x2b9a6f.createWriteStream(__dirname + "/commandes/" + _0x1f1d98.name + ".js").end(_0x3c1999);
            } catch (_0x393dc6) {
              console.log(_0x393dc6);
            }
          }
        }
        console.log("Chargement des plugins terminé ✅");
        _0x292a3.sendMessage(_0x292a3.user.id, {
          text: "Tous les plugins ont correctement ete installer"
        }).catch(_0x75e2e6 => console.log(_0x75e2e6));
        await a70_0x7c66f3(1000);
      }
      a70_0x2b9a6f.readdirSync(__dirname + "/commandes").forEach(_0x400e56 => {
        if (a70_0x447eee.extname(_0x400e56).toLowerCase() == ".js") {
          try {
            require(__dirname + "/commandes/" + _0x400e56);
            console.log(_0x400e56 + " installé ✔️");
          } catch (_0x34a9b0) {
            console.log(_0x400e56 + " n'a pas pu être chargé pour les raisons suivantes : " + _0x34a9b0);
          }
          a70_0x7c66f3(300);
        }
      });
      await a70_0x7c66f3(700);
      var _0xcd5f60;
      if (a70_0x5e2b5f.MODE.toLowerCase() === "oui") {
        _0xcd5f60 = "public";
      } else if (a70_0x5e2b5f.MODE.toLowerCase() === "non") {
        _0xcd5f60 = "privé";
      } else {
        _0xcd5f60 = "indéfini";
      }
      console.log("chargement des commandes terminé ✅");
      await _0x341078();
      if (a70_0x5e2b5f.DP.toLowerCase() === "oui") {
        let _0x469725 = "╔════◇\n║ 『𝚂𝙷𝙰𝙳𝙾𝚆-𝚇𝙼𝙳』\n║    ᴘʀᴇꜰɪx : [ " + a70_0x562316 + " ]\n║    ᴍᴏᴅᴇ :" + _0xcd5f60 + "\n║    ɴᴏᴍʙʀᴇ ᴛᴏᴛᴀʟ ᴅᴇ ᴄᴏᴍᴍᴀɴᴅᴇꜱ : " + a70_0x352979.cm.length + "︎\n╚══════════════════╝\n  \n╔═════◇\n『ᴍᴀᴅᴇ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴡʀʟᴅ』\n\n*ʀᴀᴘᴘᴇʟꜱ :* \nɴᴏᴜᴠᴇʟʟᴇ ꜰᴏɴᴄᴛɪᴏɴɴᴀʟɪᴛé :\n ᴠᴏᴜꜱ ᴘᴏᴜᴠᴇᴢ ᴍᴀɪɴᴛᴇɴᴀɴᴛ ᴘᴀʀᴛᴀɢᴇʀ ᴠᴏᴛʀᴇ ʙᴏᴛ ᴀᴠᴇᴄ ᴠᴏꜱ ᴀᴍɪꜱ ᴘᴀʀ ʟᴀ ᴄᴏᴍᴍᴀɴᴅᴇ ᴘᴀʀʀᴀɪɴ\n\nɴ'ᴏᴜʙʟɪᴇᴢ ᴘᴀꜱ ᴅ'ɪɴꜱᴛᴀʟʟᴇʀ ʟᴇꜱ ᴘʟᴜɢɪɴꜱ ᴘᴏᴜʀ ᴘʀᴏꜰɪᴛᴇʀ ᴘʟᴇɪɴᴇᴍᴇɴᴛ ᴅᴇ ᴍᴏɪ\n\n" + (a70_0x5e2b5f.THEMES_KEYS && a70_0x5e2b5f.THEMES_KEYS.length > 0 ? "*ʟɪꜱᴛᴇ ᴅᴇꜱ ᴛʜᴇᴍᴇꜱ ᴅɪꜱᴘᴏɴɪʙʟᴇꜱ :* " + a70_0x5e2b5f.THEMES_KEYS.join(", ") + "\n" : "") + "\n\nᴠᴏᴜꜱ ᴘᴏᴜᴠᴇᴢ ᴀᴜꜱꜱɪ ʏ ᴄᴏɴᴛɪʙᴜᴇʀ ᴇɴ ᴘʀᴏᴘᴏꜱᴀɴᴛꜱ ᴅᴇꜱ ᴛʜᴇᴍᴇꜱ ᴀᴠᴇᴄ ᴅᴇꜱ ʟɪᴇɴꜱ ᴅ'ɪᴍᴀɢᴇꜱ ᴏᴜ ᴅᴇ ᴠɪᴅᴇᴏꜱ ᴀ ʟ'ᴀᴘᴘᴜɪ";
        const _0x10c435 = {
          text: _0x469725
        };
        await _0x292a3.sendMessage(_0x292a3.user.id, _0x10c435);
      }
      if (!_0x1d6a7c && !_0x183997) {
        try {
          const _0x40b32a = await a70_0x27a481();
          if (_0x40b32a.length > 0) {
            for (const _0x42845e of _0x40b32a) {
              _0x292a3.startAuxiBot(_0x42845e.jid, _0x42845e.session_id);
            }
            _0x292a3.sendMessage(_0x292a3.user.id, {
              text: "Les auxiBots sont connecter"
            });
          }
        } catch (_0x5d171c) {
          _0x292a3.sendMessage(_0x292a3.user.id, {
            text: "auxiBots non chargés ❌"
          });
        }
      }
    }
  });
  _0x292a3.ev.on("creds.update", _0x31406a);
  _0x292a3.downloadAndSaveMediaMessage = async (_0x3a768f, _0x490a99 = "" + a70_0x35a8d1(1000000), _0x4b042f = true) => {
    let _0x39bb0d = _0x3a768f.msg ? _0x3a768f.msg : _0x3a768f;
    let _0x137264 = (_0x3a768f.msg || _0x3a768f).mimetype || "";
    let _0x127136 = _0x3a768f.mtype ? _0x3a768f.mtype.replace(/Message/gi, "") : _0x137264.split("/")[0];
    const _0x5d946e = await a70_0x550264(_0x39bb0d, _0x127136);
    let _0x4996b7 = Buffer.from([]);
    for await (const _0x55163b of _0x5d946e) {
      _0x4996b7 = Buffer.concat([_0x4996b7, _0x55163b]);
    }
    let _0x2c640d = await a70_0xbe32eb.fromBuffer(_0x4996b7);
    let _0x209b71 = "./" + _0x490a99 + "." + _0x2c640d.ext;
    await a70_0x2b9a6f.writeFileSync(_0x209b71, _0x4996b7);
    return _0x209b71;
  };
  _0x292a3.awaitForMessage = async (_0x41eb0d = {}) => {
    return new Promise((_0x28abd7, _0x38b5ab) => {
      if (typeof _0x41eb0d !== "object") {
        _0x38b5ab(new Error("Options must be an object"));
      }
      if (_0x41eb0d.sender && typeof _0x41eb0d.sender !== "string") {
        _0x38b5ab(new Error("Sender must be a string"));
      }
      if (typeof _0x41eb0d.chatJid !== "string") {
        _0x38b5ab(new Error("ChatJid must be a string"));
      }
      if (_0x41eb0d.timeout && typeof _0x41eb0d.timeout !== "number") {
        _0x38b5ab(new Error("Timeout must be a number"));
      }
      if (_0x41eb0d.filter && typeof _0x41eb0d.filter !== "function") {
        _0x38b5ab(new Error("Filter must be a function"));
      }
      const _0x241c67 = _0x41eb0d?.timeout || undefined;
      const _0x451283 = _0x41eb0d?.filter || (() => true);
      let _0x149f26 = undefined;
      let _0x3df023 = _0x4a8065 => {
        let {
          type: _0x2f83eb,
          messages: _0x2fd313
        } = _0x4a8065;
        if (_0x2f83eb == "notify") {
          for (let _0x53f5f5 of _0x2fd313) {
            const _0x2c7296 = _0x53f5f5.key.fromMe;
            const _0x220d7b = _0x53f5f5.key.remoteJid;
            const _0x52d107 = _0x220d7b.endsWith("@g.us");
            const _0x57b09d = _0x220d7b == "status@broadcast";
            const _0x96cacc = _0x2c7296 ? _0x292a3.user.id.replace(/:.*@/g, "@") : _0x52d107 || _0x57b09d ? _0x53f5f5.key.participant.replace(/:.*@/g, "@") : _0x220d7b;
            let _0x3805b0 = _0x41eb0d.sender ? _0x96cacc == _0x41eb0d.sender : true;
            if (_0x3805b0 && _0x220d7b == _0x41eb0d.chatJid && _0x451283(_0x53f5f5)) {
              _0x292a3.ev.off("messages.upsert", _0x3df023);
              clearTimeout(_0x149f26);
              _0x28abd7(_0x53f5f5);
            }
          }
        }
      };
      _0x292a3.ev.on("messages.upsert", _0x3df023);
      if (_0x241c67) {
        _0x149f26 = setTimeout(() => {
          _0x292a3.ev.off("messages.upsert", _0x3df023);
          _0x38b5ab(new Error("Timeout"));
        }, _0x241c67);
      }
    });
  };
  async function _0x341078() {
    let _0x5113f7 = await a70_0x559728();
    console.log(_0x5113f7);
    if (_0x5113f7.length > 0) {
      for (let _0x1aa88d = 0; _0x1aa88d < _0x5113f7.length; _0x1aa88d++) {
        if (_0x5113f7[_0x1aa88d].mute_at != null) {
          let _0x16d1f2 = _0x5113f7[_0x1aa88d].mute_at.split(":");
          console.log("etablissement d'un automute pour " + _0x5113f7[_0x1aa88d].group_id + " a " + _0x16d1f2[0] + " H " + _0x16d1f2[1]);
          a70_0x106087.schedule(_0x16d1f2[1] + " " + _0x16d1f2[0] + " * * *", async () => {
            try {
              await _0x292a3.groupSettingUpdate(_0x5113f7[_0x1aa88d].group_id, "announcement");
              _0x292a3.sendMessage(_0x5113f7[_0x1aa88d].group_id, {
                image: {
                  url: "./media/chrono.jpg"
                },
                caption: "Tic Tac, les discussions passionnantes touchent à leur fin. Nous vous remercions pour votre participation active ; maintenant, c'est l'heure de fermer le groupe pour aujourd'hui."
              });
            } catch (_0x44a04a) {
              console.log(_0x44a04a);
            }
          }, {
            timezone: "Africa/Abidjan"
          });
        }
        if (_0x5113f7[_0x1aa88d].unmute_at != null) {
          let _0x44d5b6 = _0x5113f7[_0x1aa88d].unmute_at.split(":");
          console.log("etablissement d'un autounmute pour " + _0x44d5b6[0] + " H " + _0x44d5b6[1] + " ");
          a70_0x106087.schedule(_0x44d5b6[1] + " " + _0x44d5b6[0] + " * * *", async () => {
            try {
              await _0x292a3.groupSettingUpdate(_0x5113f7[_0x1aa88d].group_id, "not_announcement");
              _0x292a3.sendMessage(_0x5113f7[_0x1aa88d].group_id, {
                image: {
                  url: "./media/chrono.jpg"
                },
                caption: "C'est l'heure d'ouvrir les portes de notre  groupe ! Bienvenue à tous dans cette communauté passionnante où nous partageons et apprenons ensemble."
              });
            } catch (_0x5b2f6d) {
              console.log(_0x5b2f6d);
            }
          }, {
            timezone: "Africa/Abidjan"
          });
        }
      }
    } else {
      console.log("Les crons n'ont pas été activés");
    }
    return;
  }
  function _0x349906(_0x543c54) {
    let _0x366f9a = /require\(['"]([^'"]+)['"]\)/g;
    let _0x410001 = _0x543c54.match(_0x366f9a);
    let _0x102ba7 = [];
    if (_0x410001) {
      _0x410001.forEach(_0x2c3353 => {
        let _0x579ea7 = _0x2c3353.replace("require(", "").replace(")", "").replace(/['"]/g, "");
        if (!_0x579ea7.startsWith("./") && !_0x579ea7.startsWith("../")) {
          _0x102ba7.push(_0x579ea7);
        }
      });
    }
    return _0x102ba7;
  }
  _0x292a3.StartWcgGame = async (_0x525b47, _0x37e90c) => {
    let _0xf91741 = [];
    _0x37e90c.map(_0x5f2878 => {
      const _0x58e1c1 = {
        jid: _0x5f2878,
        score: 0
      };
      _0xf91741.push(_0x58e1c1);
    });
    let _0x285f66 = 3;
    const _0x38f508 = await a70_0x10895b.get("https://raw.githubusercontent.com/chrplr/openlexicon/refs/heads/master/datasets-info/Liste-de-mots-francais-Gutenberg/liste.de.mots.francais.frgut.txt");
    let _0x200bda = _0x38f508.data;
    let _0x477bb9 = _0x7a7e6f => _0x7a7e6f.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let _0xf40fdf = "ABCDEGILMNOPRSTU".split("");
    _0x200bda = new Set(_0x200bda.split("\n").map(_0x411369 => _0x477bb9(_0x411369.trim())));
    let _0x5f4aea = _0x37e90c;
    BannedWord = [];
    async function _0x3f75a8(_0x25c607) {
      let _0x3d34af = _0x5f4aea[_0x25c607];
      let _0x3824d3 = _0x5f4aea[_0x25c607 + 1 == _0x5f4aea.length ? 0 : _0x25c607 + 1];
      let _0x27571b = _0xf40fdf[Math.floor(Math.random() * _0xf40fdf.length)];
      let _0x39dd9b;
      _0x285f66 = _0x285f66 > 10 ? 10 : _0x285f66;
      _0x292a3.sendMessage(_0x525b47, {
        text: "🎮 Joueur actuel : @" + _0x3d34af.split("@")[0] + "\n📜 Consigne : Trouver un mot commençant par la lettre **" + _0x27571b + "** et composé d'au moins **" + _0x285f66 + "** lettres.\n⏳ Vous avez 15 secondes pour répondre !\n\n🔜 @" + _0x3824d3.split("@")[0] + " se prépare pour le tour suivant...",
        mentions: [_0x3d34af, _0x3824d3]
      });
      let _0x5325fd = async _0x4fbbba => {
        let {
          messages: _0x176471,
          type: _0x377dd8
        } = _0x4fbbba;
        if (_0x377dd8 != "notify") {
          return;
        }
        let _0x6313dc = _0x176471[0];
        let _0x1b3cd2 = _0x6313dc.key.remoteJid;
        let _0x5683ab = _0x1b3cd2.endsWith("@g.us");
        let _0x184e76 = _0x1b3cd2 == "status@broadcast";
        let _0x124f7e = _0x6313dc.key.fromMe ? _0x292a3.user.id.replace(/:.*@/g, "@") : _0x5683ab || _0x184e76 ? _0x6313dc.key.participant.replace(/:.*@/g, "@") : _0x1b3cd2;
        let _0x1c256f = _0x6313dc.message?.conversation.trim().toLowerCase() || _0x6313dc.message?.extendedTextMessage?.text.trim().toLowerCase();
        if (typeof _0x1c256f != "string") {
          return;
        }
        if (_0x124f7e == _0x3d34af && _0x1b3cd2 == _0x525b47) {
          if (_0x477bb9(_0x1c256f).startsWith(_0x27571b.toLowerCase())) {
            if (_0x1c256f.length >= _0x285f66) {
              if (_0x200bda.has(_0x477bb9(_0x1c256f))) {
                if (BannedWord.includes(_0x1c256f)) {
                  return _0x292a3.sendMessage(_0x525b47, {
                    text: "@" + _0x124f7e.split("@")[0] + " Ce mots a deja ete  utiliser ",
                    mentions: [_0x124f7e]
                  });
                }
                _0x292a3.ev.off("messages.upsert", _0x5325fd);
                clearInterval(_0x39dd9b);
                _0xf91741.map(_0x316a59 => {
                  if (_0x316a59.jid == _0x3d34af) {
                    _0x316a59.score += 1;
                  }
                });
                const _0x1cdfbb = {
                  quoted: _0x6313dc
                };
                _0x292a3.sendMessage(_0x525b47, {
                  text: "@" + _0x124f7e.split("@")[0] + " Bravo vous avez trouver un mots qui correspond parfaitement",
                  mentions: [_0x124f7e]
                }, _0x1cdfbb);
                BannedWord.push(_0x1c256f);
                if (_0x5f4aea.indexOf(_0x3824d3) == 0) {
                  _0x285f66++;
                }
                await a70_0x7c66f3(1000);
                _0x3f75a8(_0x5f4aea.indexOf(_0x3824d3));
              } else {
                const _0x4e9826 = {
                  quoted: _0x6313dc
                };
                _0x292a3.sendMessage(_0x525b47, {
                  text: "@" + _0x124f7e.split("@")[0] + " 🤔 Êtes-vous sûr que votre mot existe ? Parce que je ne le compte pas dans mes registres. 📜",
                  mentions: [_0x124f7e]
                }, _0x4e9826);
              }
            } else {
              const _0xb9be87 = {
                quoted: _0x6313dc
              };
              _0x292a3.sendMessage(_0x525b47, {
                text: "@" + _0x124f7e.split("@")[0] + " ⚠️ Veuillez respecter la consigne ! Votre mot doit comporter au minimum **" + _0x285f66 + "** lettres. ✍️",
                mentions: [_0x124f7e]
              }, _0xb9be87);
            }
          } else {
            const _0x315425 = {
              quoted: _0x6313dc
            };
            _0x292a3.sendMessage(_0x525b47, {
              text: "@" + _0x124f7e.split("@")[0] + " ⚠️ Veuillez respecter la consigne ! Votre mot doit commencer par la lettre **" + _0x27571b + "**. 🔤",
              mentions: [_0x124f7e]
            }, _0x315425);
          }
        }
      };
      new Promise((_0xb98d6, _0x10c19f) => {
        _0x39dd9b = setTimeout(() => {
          _0xb98d6();
        }, 15000);
      }).then(async () => {
        _0x292a3.ev.off("messages.upsert", _0x5325fd);
        _0x292a3.sendMessage(_0x525b47, {
          text: "@" + _0x3d34af.split("@")[0] + " ⏳ Vous avez pris trop de temps pour répondre. Vous êtes par conséquent éliminé(e). 🚫",
          mentions: [_0x3d34af]
        });
        if (_0x5f4aea.indexOf(_0x3824d3) == 0) {
          _0x285f66++;
        }
        _0x5f4aea.splice(_0x5f4aea.indexOf(_0x3d34af), 1);
        if (_0x5f4aea.length > 0) {
          await a70_0x7c66f3(1000);
          _0x3f75a8(_0x5f4aea.indexOf(_0x3824d3));
        } else {
          a70_0xd9195.del(_0x525b47);
          _0xf91741 = _0xf91741.sort((_0x58cda3, _0x23a7f0) => _0x23a7f0.score - _0x58cda3.score);
          let _0x10509b = "";
          _0x10509b += "     🎉 Fin du Jeu !🎉";
          if (_0xf91741.length > 3) {
            _0x10509b += "\nLes 3 premiers recevront des points xp supplementaire (respectivement 500xp 300xp 100xp)";
            _0x10509b += "\nVoici vos scores respectifs :";
            for (let _0x1d979c = 0; _0x1d979c < _0xf91741.length; _0x1d979c++) {
              pt = _0xf91741[_0x1d979c];
              if (_0x1d979c <= 2) {
                emojieMedailArray = ["🥇", "🥈", "🥉"];
                _0x10509b += "\n\n" + emojieMedailArray[_0x1d979c] + " @" + pt.jid.split("@")[0] + " : " + pt.score + " points";
              } else {
                _0x10509b += "\n\n@" + pt.jid.split("@")[0] + " : " + pt.score + " points";
              }
            }
          } else {
            _0x10509b += "\nVoici vos scores respectifs :";
            _0x10509b += _0xf91741.map(_0x5aab1c => "\n\n@" + _0x5aab1c.jid.split("@")[0] + " : " + _0x5aab1c.score + " points\n");
          }
          _0x292a3.sendMessage(_0x525b47, {
            text: _0x10509b,
            mentions: [..._0xf91741.map(_0x138fe4 => _0x138fe4.jid)]
          });
          if (_0xf91741.length > 3) {
            for (let _0x2aba5f = 0; _0x2aba5f < 3; _0x2aba5f++) {
              xpRewqrdArray = [500, 300, 100];
              try {
                await a70_0x56a4b4(_0xf91741[_0x2aba5f].jid, xpRewqrdArray[1]);
              } catch (_0xa6a86c) {
                console.log(_0xa6a86c);
              }
            }
          }
        }
      }).catch(_0x5c5c54 => {
        console.log(_0x5c5c54);
      });
      _0x292a3.ev.on("messages.upsert", _0x5325fd);
    }
    await a70_0x7c66f3(1000);
    _0x3f75a8(0);
  };
  _0x292a3.startAuxiBot = a70_0x58e03f;
}
a70_0x58e03f();