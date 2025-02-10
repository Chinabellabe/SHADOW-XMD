const {
  zokou: a32_0x5013ee
} = require("../framework/zokou");
const {
  Sticker: a32_0x3eb19a,
  StickerTypes: a32_0x5c55e6
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid: a32_0x5ec9b2,
  mettreAJourAction: a32_0x34134d,
  verifierEtatJid: a32_0x48997e
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid: a32_0x55a868,
  atbverifierEtatJid: a32_0x2b5f3e,
  atbmettreAJourAction: a32_0x4d1d4e
} = require("../bdd/antibot");
const {
  search: a32_0x244d65,
  download: a32_0x554fa5
} = require("aptoide_scrapper_fixed");
const a32_0x5bfc97 = require("axios");
const a32_0x38d423 = require("fs-extra");
const {
  recupevents: a32_0x1504bd
} = require("../bdd/welcome");
const {
  exec: a32_0x5db5a9
} = require("child_process");
const {
  generatepp: a32_0x4f8c4d
} = require("../framework/mesfonctions");
a32_0x5013ee({
  nomCom: "appel",
  categorie: "Groupe",
  reaction: "📣",
  desc: "mentionner tous les membres du groupe",
  alias: ["tag"]
}, async (_0x2d89b0, _0x4449fe, _0x31a1f6) => {
  const {
    ms: _0x45bdc7,
    repondre: _0x308a6a,
    arg: _0x1ff2a1,
    verifGroupe: _0x702e8,
    nomGroupe: _0xbfa100,
    infosGroupe: _0x4eeb7c,
    nomAuteurMessage: _0x2162b7,
    verifAdmin: _0x3162fc,
    superUser: _0x431ea5
  } = _0x31a1f6;
  if (!_0x702e8) {
    _0x308a6a("✋🏿 ✋🏿cette commande est réservée aux groupes ❌");
    return;
  }
  if (!_0x1ff2a1 || _0x1ff2a1 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x1ff2a1.join(" ");
  }
  ;
  let _0x2e4289 = _0x702e8 ? await _0x4eeb7c.participants : "";
  var _0x3b9783 = "";
  _0x3b9783 += "========================\n  \n        🌟 *𝚂𝙷𝙰𝙳𝙾𝚆 𝚇𝙼𝙳* 🌟\n========================\n\n👥 Groupe : " + _0xbfa100 + " 🚀 \n👤 Auteur : *" + _0x2162b7 + "* 👋 \n📜 Message : *" + mess + "* 📝\n========================\n\n\n\n\n";
  let _0x2985e3 = ["🦴", "👀", "😮‍💨", "❌", "✔️", "😇", "⚙️", "🔧", "🎊", "😡", "🙏🏿", "⛔️", "$", "😟", "🥵", "🐅"];
  let _0xcf07d9 = Math.floor(Math.random() * (_0x2985e3.length - 1));
  for (const _0x1e84c4 of _0x2e4289) {
    _0x3b9783 += _0x2985e3[_0xcf07d9] + "      @" + _0x1e84c4.id.split("@")[0] + "\n";
  }
  if (_0x3162fc || _0x431ea5) {
    const _0x4f09e7 = {
      quoted: _0x45bdc7
    };
    _0x4449fe.sendMessage(_0x2d89b0, {
      text: _0x3b9783,
      mentions: _0x2e4289.map(_0x2c03f1 => _0x2c03f1.id)
    }, _0x4f09e7);
  } else {
    _0x308a6a("commande reserver aux admins");
  }
});
a32_0x5013ee({
  nomCom: "lien",
  categorie: "Groupe",
  reaction: "🙋",
  desc: "obtenir le lien du groupe. Vous devez etre admins"
}, async (_0x159f22, _0x2e408b, _0x21227d) => {
  const {
    repondre: _0x1f4110,
    nomGroupe: _0x3d19c1,
    nomAuteurMessage: _0x2d9264,
    verifGroupe: _0x57b39b
  } = _0x21227d;
  if (!_0x57b39b) {
    _0x1f4110("wait bro , tu veux le lien de mon dm?");
    return;
  }
  ;
  var _0x23f075 = await _0x2e408b.groupInviteCode(_0x159f22);
  var _0x1463dc = "https://chat.whatsapp.com/" + _0x23f075;
  let _0x270e52 = "salut " + _0x2d9264 + " , voici le lien du groupe " + _0x3d19c1 + " \n\n\nLien :" + _0x1463dc;
  _0x1f4110(_0x270e52);
});
a32_0x5013ee({
  nomCom: "nommer",
  categorie: "Groupe",
  reaction: "👨🏿‍💼",
  desc: "nommer un membre comme admin"
}, async (_0xc0d5c2, _0x2d2002, _0x1f0ec7) => {
  let {
    repondre: _0x51b4e4,
    msgRepondu: _0x402951,
    infosGroupe: _0x373336,
    auteurMsgRepondu: _0x3a60a4,
    verifGroupe: _0x3487f5,
    auteurMessage: _0x5ddd25,
    superUser: _0x52af64,
    idBot: _0x2e880d
  } = _0x1f0ec7;
  let _0x253238 = _0x3487f5 ? await _0x373336.participants : "";
  if (!_0x3487f5) {
    return _0x51b4e4("Pour les groupe uniquement");
  }
  const _0x558b6c = await _0x2d2002.groupMetadata(_0xc0d5c2);
  if ((await a32_0x1504bd(_0xc0d5c2, "antipromote")) == "oui" && (_0x558b6c.author = !_0x5ddd25)) {
    _0x51b4e4("Vous avez pas droit de Nommer des participants car le antipromote est actif");
    return;
  }
  ;
  const _0x45b969 = _0x5c3611 => {
    for (const _0x5a5a1c of _0x253238) {
      if (_0x5a5a1c.id !== _0x5c3611) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x17202f = _0x322973 => {
    let _0x324dec = [];
    for (m of _0x322973) {
      if (m.admin == null) {
        continue;
      }
      _0x324dec.push(m.id);
    }
    return _0x324dec;
  };
  const _0x4f243c = _0x3487f5 ? _0x17202f(_0x253238) : "";
  let _0x324ab0 = _0x3487f5 ? _0x4f243c.includes(_0x3a60a4) : false;
  let _0x233b35 = _0x45b969(_0x3a60a4);
  let _0x5a21e3 = _0x3487f5 ? _0x4f243c.includes(_0x5ddd25) : false;
  zkad = _0x3487f5 ? _0x4f243c.includes(_0x2e880d) : false;
  try {
    if (_0x5a21e3 || _0x52af64) {
      if (_0x402951) {
        if (zkad) {
          if (_0x233b35) {
            if (_0x324ab0 == false) {
              var _0x1d2ebb = "🎊🎊🎊  @" + _0x3a60a4.split("@")[0] + " est monté(e) en grade.\n\n                      il/elle a été nommé(e) administrateur du groupe.";
              await _0x2d2002.groupParticipantsUpdate(_0xc0d5c2, [_0x3a60a4], "promote");
              const _0x5be387 = {
                text: _0x1d2ebb,
                mentions: [_0x3a60a4]
              };
              _0x2d2002.sendMessage(_0xc0d5c2, _0x5be387);
            } else {
              return _0x51b4e4("Ce membre est déja administrateur du groupe.");
            }
          } else {
            return _0x51b4e4("Cet utilisateur ne fait pas partir du groupe.");
          }
        } else {
          return _0x51b4e4("Désolé je ne peut pas effectuer cette action car je ne suis pas administrateur du groupe .");
        }
      } else {
        _0x51b4e4("veuiller taguer le membre à nommer");
      }
    } else {
      return _0x51b4e4("Désolé je ne peut pas effectuer cette action car vous n'êtes pas administrateur du groupe .");
    }
  } catch (_0x3b3aff) {
    _0x51b4e4("oups " + _0x3b3aff);
  }
});
a32_0x5013ee({
  nomCom: "demettre",
  categorie: "Groupe",
  reaction: "👨🏿‍💼",
  desc: "demettre un membre comme admin"
}, async (_0x5caa26, _0x37fac1, _0xddf3fe) => {
  let {
    repondre: _0xf70ac9,
    msgRepondu: _0xf9386c,
    infosGroupe: _0x27b66b,
    auteurMsgRepondu: _0x3eace5,
    verifGroupe: _0x2247a2,
    auteurMessage: _0x49e6f6,
    superUser: _0x510fb2,
    idBot: _0x1a96b4
  } = _0xddf3fe;
  let _0x3adfef = _0x2247a2 ? await _0x27b66b.participants : "";
  if (!_0x2247a2) {
    return _0xf70ac9("Pour les groupe uniquement");
  }
  const _0x259144 = await _0x37fac1.groupMetadata(_0x5caa26);
  if ((await a32_0x1504bd(_0x5caa26, "antidemote")) == "oui" && (_0x259144.author = !_0x49e6f6)) {
    _0xf70ac9("Vous avez pas droit de denommer des participants car le antidemote est actif");
    return;
  }
  ;
  const _0x583010 = _0x1e99df => {
    for (const _0x930036 of _0x3adfef) {
      if (_0x930036.id !== _0x1e99df) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x4c11ab = _0x2230e3 => {
    let _0xadce7d = [];
    for (m of _0x2230e3) {
      if (m.admin == null) {
        continue;
      }
      _0xadce7d.push(m.id);
    }
    return _0xadce7d;
  };
  const _0x346e5f = _0x2247a2 ? _0x4c11ab(_0x3adfef) : "";
  let _0x2eb258 = _0x2247a2 ? _0x346e5f.includes(_0x3eace5) : false;
  let _0x177b6d = _0x583010(_0x3eace5);
  let _0x5d1c60 = _0x2247a2 ? _0x346e5f.includes(_0x49e6f6) : false;
  zkad = _0x2247a2 ? _0x346e5f.includes(_0x1a96b4) : false;
  try {
    if (_0x5d1c60 || _0x510fb2) {
      if (_0xf9386c) {
        if (zkad) {
          if (_0x177b6d) {
            if (_0x2eb258 == false) {
              _0xf70ac9("Ce membre n'est pas un  administrateur du groupe.");
            } else {
              var _0x306d99 = "@" + _0x3eace5.split("@")[0] + " a été  démis de ses fonctions d'administrateur du groupe..\n";
              await _0x37fac1.groupParticipantsUpdate(_0x5caa26, [_0x3eace5], "demote");
              const _0x24db9f = {
                text: _0x306d99,
                mentions: [_0x3eace5]
              };
              _0x37fac1.sendMessage(_0x5caa26, _0x24db9f);
            }
          } else {
            return _0xf70ac9("Cet utilisateur ne fait pas partir du groupe.");
          }
        } else {
          return _0xf70ac9("Désolé je ne peut pas effectuer cette action car je ne suis pas administrateur du groupe .");
        }
      } else {
        _0xf70ac9("veuiller taguer le membre à démettre");
      }
    } else {
      return _0xf70ac9("Désolé je ne peut pas effectuer cette action car vous n'êtes pas administrateur du groupe .");
    }
  } catch (_0x2a2e69) {
    _0xf70ac9("oups " + _0x2a2e69);
  }
});
a32_0x5013ee({
  nomCom: "retirer",
  categorie: "Groupe",
  reaction: "👨🏿‍💼",
  desc: "retirer un membre du groupe"
}, async (_0x1f5d34, _0x442ecc, _0x7a6701) => {
  let {
    repondre: _0x59f15d,
    msgRepondu: _0x4b3221,
    infosGroupe: _0x5977be,
    auteurMsgRepondu: _0x328a7a,
    verifGroupe: _0x5e3a2a,
    nomAuteurMessage: _0x5e0a39,
    auteurMessage: _0xf236dd,
    superUser: _0x532842,
    idBot: _0x6a0d60
  } = _0x7a6701;
  let _0x3b98fa = _0x5e3a2a ? await _0x5977be.participants : "";
  if (!_0x5e3a2a) {
    return _0x59f15d("Pour les groupe uniquement");
  }
  const _0x762693 = _0x4c4634 => {
    for (const _0x1cecad of _0x3b98fa) {
      if (_0x1cecad.id !== _0x4c4634) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x30168b = _0x19ddfe => {
    let _0x1186d3 = [];
    for (m of _0x19ddfe) {
      if (m.admin == null) {
        continue;
      }
      _0x1186d3.push(m.id);
    }
    return _0x1186d3;
  };
  const _0x177382 = _0x5e3a2a ? _0x30168b(_0x3b98fa) : "";
  let _0x355655 = _0x5e3a2a ? _0x177382.includes(_0x328a7a) : false;
  let _0x5566ad = _0x762693(_0x328a7a);
  let _0x425ac5 = _0x5e3a2a ? _0x177382.includes(_0xf236dd) : false;
  zkad = _0x5e3a2a ? _0x177382.includes(_0x6a0d60) : false;
  try {
    if (_0x425ac5 || _0x532842) {
      if (_0x4b3221) {
        if (zkad) {
          if (_0x5566ad) {
            if (_0x355655 == false) {
              const _0x3b4104 = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif";
              const _0x572257 = {
                pack: "Zokou-Md",
                author: _0x5e0a39,
                type: a32_0x5c55e6.FULL,
                categories: ["🤩", "🎉"],
                id: "12345",
                quality: 50,
                background: "#000000"
              };
              var _0x37c0e9 = new a32_0x3eb19a(_0x3b4104, _0x572257);
              await _0x37c0e9.toFile("st.webp");
              var _0x1c25f5 = "@" + _0x328a7a.split("@")[0] + " a été rétiré du groupe..\n";
              await _0x442ecc.groupParticipantsUpdate(_0x1f5d34, [_0x328a7a], "remove");
              const _0x1def14 = {
                text: _0x1c25f5,
                mentions: [_0x328a7a]
              };
              _0x442ecc.sendMessage(_0x1f5d34, _0x1def14);
            } else {
              _0x59f15d("Ce membre ne peut pas être rétirer car il est un  administrateur du groupe.");
            }
          } else {
            return _0x59f15d("Cet utilisateur ne fait pas partir du groupe.");
          }
        } else {
          return _0x59f15d("Désolé je ne peut pas effectuer cette action car je ne suis pas administrateur du groupe .");
        }
      } else {
        _0x59f15d("veuiller taguer le membre à rétirer");
      }
    } else {
      return _0x59f15d("Désolé je ne peut pas effectuer cette action car vous n'êtes pas administrateur du groupe .");
    }
  } catch (_0x27a5f8) {
    _0x59f15d("oups " + _0x27a5f8);
  }
});
a32_0x5013ee({
  nomCom: "supp",
  categorie: "Groupe",
  reaction: "🧹",
  desc: "supprimer un message"
}, async (_0x196d0b, _0x164594, _0x50a901) => {
  const {
    ms: _0x1c53d4,
    repondre: _0x82f8a3,
    verifGroupe: _0x1bab27,
    auteurMsgRepondu: _0x51acc8,
    idBot: _0x5045d2,
    msgRepondu: _0x2e2939,
    verifAdmin: _0x4cd90c,
    superUser: _0x5391ba
  } = _0x50a901;
  if (!_0x2e2939) {
    _0x82f8a3("Veuilez mentionner le Message à supprimer");
    return;
  }
  if (_0x5391ba && _0x51acc8 == _0x5045d2) {
    if (_0x51acc8 == _0x5045d2) {
      const _0x30b4f5 = {
        remoteJid: _0x196d0b,
        fromMe: true,
        id: _0x1c53d4.message.extendedTextMessage.contextInfo.stanzaId
      };
      const _0x2c4b85 = _0x30b4f5;
      const _0x9e2d76 = {
        delete: _0x2c4b85
      };
      await _0x164594.sendMessage(_0x196d0b, _0x9e2d76);
      return;
    }
  }
  if (_0x1bab27) {
    if (_0x4cd90c || _0x5391ba) {
      try {
        const _0x2fa9e4 = {
          remoteJid: _0x196d0b,
          id: _0x1c53d4.message.extendedTextMessage.contextInfo.stanzaId,
          fromMe: false,
          participant: _0x1c53d4.message.extendedTextMessage.contextInfo.participant
        };
        const _0x5739dd = _0x2fa9e4;
        const _0x5448dd = {
          delete: _0x5739dd
        };
        await _0x164594.sendMessage(_0x196d0b, _0x5448dd);
        return;
      } catch (_0x9cb200) {
        _0x82f8a3("J'ai besoins des droit d'administration");
      }
    } else {
      _0x82f8a3("Désolé vous n'etes pas administrateur du groupe.");
    }
  }
});
a32_0x5013ee({
  nomCom: "info",
  categorie: "Groupe",
  desc: "Recuperer les informations d'un groupe"
}, async (_0x15e43c, _0x44fe3e, _0x35b4b5) => {
  const {
    ms: _0x25bb07,
    repondre: _0x3a0e51,
    verifGroupe: _0x21b548,
    mybotpic: _0x3f066f
  } = _0x35b4b5;
  if (!_0x21b548) {
    _0x3a0e51("commande réservée au groupe uniquement");
    return;
  }
  ;
  try {
    ppgroup = await _0x44fe3e.profilePictureUrl(_0x15e43c, "image");
  } catch {
    ppgroup = _0x3f066f();
  }
  const _0x4823d1 = await _0x44fe3e.groupMetadata(_0x15e43c);
  const _0x16b136 = {
    url: ppgroup
  };
  const _0x36af34 = {
    image: _0x16b136,
    caption: "*━━━━『Info du groupe』━━━━*\n\n*🎐Nom:* " + _0x4823d1.subject + "\n\n*🔩ID du Groupe:* " + _0x15e43c + "\n\n*🔍Desc:* \n\n" + _0x4823d1.desc
  };
  let _0x589c4b = _0x36af34;
  const _0x103ce0 = {
    quoted: _0x25bb07
  };
  _0x44fe3e.sendMessage(_0x15e43c, _0x589c4b, _0x103ce0);
});
a32_0x5013ee({
  nomCom: "antilien",
  categorie: "Groupe",
  reaction: "🔗",
  desc: "Manager l'antilien d'un groupe",
  alias: ["alien"]
}, async (_0x423bc8, _0x510bbd, _0xf91982) => {
  var {
    repondre: _0x1d57cf,
    arg: _0x5c61f5,
    verifGroupe: _0x268747,
    superUser: _0x3610c0,
    verifAdmin: _0x190f4b
  } = _0xf91982;
  if (!_0x268747) {
    return _0x1d57cf("*uniquement pour les groupes*");
  }
  if (_0x3610c0 || _0x190f4b) {
    const _0x3d3d7e = await a32_0x48997e(_0x423bc8);
    try {
      if (!_0x5c61f5 || !_0x5c61f5[0] || _0x5c61f5.join("").trim() === "") {
        _0x1d57cf("*antilien oui* pour activer l'antilien\n*antilien non* pour desactiver l'antilien\n*antilien action/retier* pour retirer retirer directement sans preavis\n*antilien action/warn* pour donner des avertissement\n*antilien action/supp* pour supprimer uniquement le lien sans toutes fois sanctionner\n\nNotez que par defaut l'antilien est reglé sur supp");
        return;
      }
      ;
      if (_0x5c61f5[0] === "oui") {
        if (_0x3d3d7e) {
          _0x1d57cf("l'antilien est deja activer pour se groupe");
        } else {
          await a32_0x5ec9b2(_0x423bc8, "oui");
          _0x1d57cf("l'antilien est activer avec succes");
        }
      } else if (_0x5c61f5[0] === "non") {
        if (_0x3d3d7e) {
          await a32_0x5ec9b2(_0x423bc8, "non");
          _0x1d57cf("L'antilien a été desactivé avec succes");
        } else {
          _0x1d57cf("l'antilien n'est pas activer pour ce groupe");
        }
      } else if (_0x5c61f5.join("").split("/")[0] === "action") {
        let _0x4e2f20 = _0x5c61f5.join("").split("/")[1].toLowerCase();
        if (_0x4e2f20 == "retirer" || _0x4e2f20 == "warn" || _0x4e2f20 == "supp") {
          await a32_0x34134d(_0x423bc8, _0x4e2f20);
          _0x1d57cf("l'action de l'antilien a été actualisée sur " + _0x5c61f5.join("").split("/")[1]);
        } else {
          _0x1d57cf("Les seuls action sont *warn* ; *supp* et *retirer*");
        }
      } else {
        _0x1d57cf("*antilien oui* pour activer l'antilien\n*antilien non* pour desactiver l'antilien\n*antilien action/retier* pour retirer retirer directement sans preavis\n*antilien action/warn* pour donner des avertissement\n*antilien action/supp* pour supprimer uniquement le lien sans toutes fois sanctionner\n\nNotez que par defaut l'antilien est reglé sur supp");
      }
    } catch (_0x5f720d) {
      _0x1d57cf(_0x5f720d);
    }
  } else {
    _0x1d57cf("Vous avez pas droit a cette commande");
  }
});
a32_0x5013ee({
  nomCom: "antibot",
  categorie: "Groupe",
  reaction: "🔗",
  desc: "Manager l'antibot d'un groupe",
  alias: ["abot"]
}, async (_0xa17453, _0x1e85b0, _0x54cea3) => {
  var {
    repondre: _0x23fa38,
    arg: _0x1815ce,
    verifGroupe: _0x116a65,
    superUser: _0x49878f,
    verifAdmin: _0x32db95
  } = _0x54cea3;
  if (!_0x116a65) {
    return _0x23fa38("*uniquement pour les groupes*");
  }
  if (_0x49878f || _0x32db95) {
    const _0x369046 = await a32_0x2b5f3e(_0xa17453);
    try {
      if (!_0x1815ce || !_0x1815ce[0] || _0x1815ce.join("").trim() === "") {
        _0x23fa38("*antibot oui* pour activer l'antibot\n*antibot non* pour desactiver l'antibot\n*antibot action/retier* pour retirer retirer directement sans preavis\n*antibot action/warn* pour donner des avertissement\n*antibot action/supp* pour supprimer uniquement le message du bot sans toutes fois sanctionner\n\nNotez que par defaut l'antibot est reglé sur supp");
        return;
      }
      ;
      if (_0x1815ce[0] === "oui") {
        if (_0x369046) {
          _0x23fa38("l'antibot est deja activer pour se groupe");
        } else {
          await a32_0x55a868(_0xa17453, "oui");
          _0x23fa38("l'antibot est activer avec succes");
        }
      } else if (_0x1815ce[0] === "non") {
        if (_0x369046) {
          await a32_0x55a868(_0xa17453, "non");
          _0x23fa38("L'antibot a été desactivé avec succes");
        } else {
          _0x23fa38("l'antibot n'est pas activer pour ce groupe");
        }
      } else if (_0x1815ce.join("").split("/")[0] === "action") {
        let _0x4e9a31 = _0x1815ce.join("").split("/")[1].toLowerCase();
        if (_0x4e9a31 == "retirer" || _0x4e9a31 == "warn" || _0x4e9a31 == "supp") {
          await a32_0x4d1d4e(_0xa17453, _0x4e9a31);
          _0x23fa38("l'action de l'antibot a été actualisée sur " + _0x1815ce.join("").split("/")[1]);
        } else {
          _0x23fa38("Les seuls action sont *warn* ; *supp* et *retirer*");
        }
      } else {
        _0x23fa38("*antibot oui* pour activer l'antibot\n*antibot non* pour desactiver l'antibot\n*antibot action/retier* pour retirer  directement sans preavis\n*antibot action/warn* pour donner des avertissement\n*antibot action/supp* pour supprimer uniquement le message du bot sans toutes fois sanctionner\n\nNotez que par defaut l'antibot est reglé sur supp");
      }
    } catch (_0x437593) {
      _0x23fa38(_0x437593);
    }
  } else {
    _0x23fa38("Vous avez pas droit a cette commande");
  }
});
a32_0x5013ee({
  nomCom: "groupe",
  categorie: "Groupe",
  desc: "Ouvrir ou fermer le groupe"
}, async (_0x200458, _0x4c8bba, _0x30ae0f) => {
  const {
    repondre: _0x44472c,
    verifGroupe: _0x4a6f2c,
    verifAdmin: _0x2b5a5b,
    superUser: _0x565539,
    arg: _0x260b0d
  } = _0x30ae0f;
  if (!_0x4a6f2c) {
    _0x44472c("commande reserver au groupe uniquement");
    return;
  }
  ;
  if (_0x565539 || _0x2b5a5b) {
    if (!_0x260b0d[0]) {
      _0x44472c("Consigne :\n\nTaper groupe ouvrir ou fermer");
      return;
    }
    const _0x4a97b8 = _0x260b0d.join(" ");
    switch (_0x4a97b8) {
      case "ouvrir":
        await _0x4c8bba.groupSettingUpdate(_0x200458, "not_announcement");
        _0x44472c("Groupe Ouvert");
        break;
      case "fermer":
        await _0x4c8bba.groupSettingUpdate(_0x200458, "announcement");
        _0x44472c("Groupe fermer avec succes");
        break;
      default:
        _0x44472c("N'inventez pas d'option svp");
    }
  } else {
    _0x44472c("Vous avez pas droit a cette commande");
  }
});
a32_0x5013ee({
  nomCom: "gnom",
  categorie: "Groupe"
}, async (_0x5ca5d8, _0x1b0496, _0x2e747b) => {
  const {
    arg: _0xc5078c,
    repondre: _0xca5c56,
    verifAdmin: _0x239b40
  } = _0x2e747b;
  if (!_0x239b40) {
    _0xca5c56("commande reservée au admi,istrateurs du groupe");
    return;
  }
  ;
  if (!_0xc5078c[0]) {
    _0xca5c56("Veiller entrer le nom du groupe svp");
    return;
  }
  ;
  const _0x21155e = _0xc5078c.join(" ");
  await _0x1b0496.groupUpdateSubject(_0x5ca5d8, _0x21155e);
  _0xca5c56("nom du groupe actualiser: *" + _0x21155e + "*");
});
a32_0x5013ee({
  nomCom: "gdesc",
  categorie: "Groupe",
  desc: "Changer la description du groupe"
}, async (_0x357d0e, _0x56bfb4, _0x1fb02f) => {
  const {
    arg: _0x47dc68,
    repondre: _0x9e4d71,
    verifAdmin: _0x2543d1
  } = _0x1fb02f;
  if (!_0x2543d1) {
    _0x9e4d71("commande reservée au admi,istrateurs du groupe");
    return;
  }
  ;
  if (!_0x47dc68[0]) {
    _0x9e4d71("Veiller entrer la description du groupe svp");
    return;
  }
  ;
  const _0x332201 = _0x47dc68.join(" ");
  await _0x56bfb4.groupUpdateDescription(_0x357d0e, _0x332201);
  _0x9e4d71("description  du groupe actualiser: *" + _0x332201 + "*");
});
a32_0x5013ee({
  nomCom: "gpp",
  categorie: "Groupe",
  desc: "Changer l'image du groupe"
}, async (_0x31d461, _0x356674, _0x292cac) => {
  const {
    repondre: _0x182280,
    msgRepondu: _0x5862af,
    verifAdmin: _0x494fbd
  } = _0x292cac;
  if (!_0x494fbd) {
    _0x182280("commande reservée au admi,istrateurs du groupe");
    return;
  }
  ;
  if (_0x5862af.imageMessage) {
    const _0x4ae0b5 = await _0x356674.downloadAndSaveMediaMessage(_0x5862af.imageMessage);
    let _0xd74467 = await a32_0x4f8c4d(_0x4ae0b5);
    console.log(_0xd74467);
    let _0x5a058d = "monpdp.jpg";
    a32_0x38d423.writeFile(_0x5a058d, _0xd74467.img, async _0x528529 => {
      if (_0x528529) {
        console.log(_0x528529);
      } else {
        const _0x168ae5 = {
          url: _0x5a058d
        };
        _0x356674.updateProfilePicture(_0x31d461, _0x168ae5).then(() => {
          _0x356674.sendMessage(_0x31d461, {
            text: "Group pfp changed"
          });
          a32_0x38d423.unlinkSync(_0x4ae0b5);
        });
      }
    });
  } else {
    _0x182280("Veiller mentionner une image svp");
  }
});
a32_0x5013ee({
  nomCom: "annonce",
  categorie: "Groupe",
  reaction: "🎤",
  desc: "Mentionner les membres du groupe sous un message ou un media",
  alias: ["htag"]
}, async (_0x581dc8, _0x3c8521, _0x58b57c) => {
  const {
    repondre: _0x29a1ed,
    msgRepondu: _0x195155,
    verifGroupe: _0x2c29a1,
    arg: _0x38aa5d,
    verifAdmin: _0x34f62e,
    superUser: _0x38a247
  } = _0x58b57c;
  if (!_0x2c29a1) {
    _0x29a1ed("Cette commande n' est possible que dans les groupes ");
  }
  ;
  if (_0x34f62e || _0x38a247) {
    let _0x24910f = await _0x3c8521.groupMetadata(_0x581dc8);
    let _0x30e6a4 = [];
    for (const _0x53e9ea of _0x24910f.participants) {
      _0x30e6a4.push(_0x53e9ea.id);
    }
    if (_0x195155) {
      console.log(_0x195155);
      let _0x816799;
      if (_0x195155.imageMessage) {
        let _0x44b483 = await _0x3c8521.downloadAndSaveMediaMessage(_0x195155.imageMessage);
        const _0x17911f = {
          url: _0x44b483
        };
        const _0x3daa37 = {
          image: _0x17911f,
          caption: _0x195155.imageMessage.caption,
          mentions: _0x30e6a4
        };
        _0x816799 = _0x3daa37;
      } else if (_0x195155.videoMessage) {
        let _0x101520 = await _0x3c8521.downloadAndSaveMediaMessage(_0x195155.videoMessage);
        const _0x4fe148 = {
          url: _0x101520
        };
        const _0x55976c = {
          video: _0x4fe148,
          caption: _0x195155.videoMessage.caption,
          mentions: _0x30e6a4
        };
        _0x816799 = _0x55976c;
      } else if (_0x195155.audioMessage) {
        let _0x367ae1 = await _0x3c8521.downloadAndSaveMediaMessage(_0x195155.audioMessage);
        const _0x3c0ff0 = {
          url: _0x367ae1
        };
        const _0x1adf63 = {
          audio: _0x3c0ff0,
          mimetype: "audio/mp4",
          mentions: _0x30e6a4
        };
        _0x816799 = _0x1adf63;
      } else if (_0x195155.stickerMessage) {
        let _0x5d2d1b = await _0x3c8521.downloadAndSaveMediaMessage(_0x195155.stickerMessage);
        const _0x532c0f = {
          pack: "Zokou-tag",
          type: a32_0x5c55e6.CROPPED,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 70,
          background: "transparent"
        };
        let _0x3f34ec = new a32_0x3eb19a(_0x5d2d1b, _0x532c0f);
        const _0x52ddb4 = await _0x3f34ec.toBuffer();
        const _0x1c7de0 = {
          sticker: _0x52ddb4,
          mentions: _0x30e6a4
        };
        _0x816799 = _0x1c7de0;
      } else {
        const _0x2881ea = {
          text: _0x195155.conversation,
          mentions: _0x30e6a4
        };
        _0x816799 = _0x2881ea;
      }
      _0x3c8521.sendMessage(_0x581dc8, _0x816799);
    } else {
      if (!_0x38aa5d || !_0x38aa5d[0]) {
        _0x29a1ed("Entrez le texte a annoncer ou mentionner le message a annoncer");
        return;
      }
      ;
      _0x3c8521.sendMessage(_0x581dc8, {
        text: _0x38aa5d.join(" "),
        mentions: _0x30e6a4
      });
    }
  } else {
    _0x29a1ed("Commande reservée au admins");
  }
});
a32_0x5013ee({
  nomCom: "apk",
  reaction: "✨",
  categorie: "Recherche",
  desc: "Rechercher une application sur aptoide"
}, async (_0xe24148, _0x4908c2, _0x3c6bff) => {
  const {
    repondre: _0x4c6e88,
    arg: _0x3c411e,
    ms: _0x4a8abd
  } = _0x3c6bff;
  try {
    const _0x1343e4 = _0x3c411e.join(" ");
    if (!_0x1343e4) {
      return _0x4c6e88("*Entrer le nom de l'application à rechercher*");
    }
    const _0x3befa2 = await a32_0x244d65(_0x1343e4);
    if (_0x3befa2.length === 0) {
      return _0x4c6e88("*Application non existante, veuillez entrer un autre nom*");
    }
    const _0x3a06ac = await a32_0x554fa5(_0x3befa2[0].id);
    const _0x4ebdc7 = parseInt(_0x3a06ac.size);
    if (_0x4ebdc7 > 300) {
      return _0x4c6e88("Le fichier dépasse 300 Mo, impossible de le télécharger.");
    }
    const _0x282d4a = _0x3a06ac.dllink;
    const _0x1ff6d2 = "『 *Zokou-Md App* 』\n\n*Nom :* " + _0x3a06ac.name + "\n*Id :* " + _0x3a06ac.package + "\n*Dernière MAJ :* " + _0x3a06ac.lastup + "\n*Taille :* " + _0x3a06ac.size + "\n";
    const _0x262e45 = (_0x3a06ac?.name || "Downloader") + ".apk";
    const _0x18faf5 = _0x262e45;
    const _0x2235b4 = await a32_0x5bfc97.get(_0x282d4a, {
      responseType: "stream"
    });
    const _0x321c8c = a32_0x38d423.createWriteStream(_0x18faf5);
    _0x2235b4.data.pipe(_0x321c8c);
    await new Promise((_0x2b9ebc, _0x474fe0) => {
      _0x321c8c.on("finish", _0x2b9ebc);
      _0x321c8c.on("error", _0x474fe0);
    });
    const _0x6da142 = {
      document: a32_0x38d423.readFileSync(_0x18faf5),
      mimetype: "application/vnd.android.package-archive",
      fileName: _0x262e45
    };
    const _0xb352e9 = {
      url: _0x3a06ac.icon
    };
    const _0x2563e1 = {
      image: _0xb352e9,
      caption: _0x1ff6d2
    };
    const _0x32e82d = {
      quoted: _0x4a8abd
    };
    _0x4908c2.sendMessage(_0xe24148, _0x2563e1, _0x32e82d);
    const _0x5f2472 = {
      quoted: _0x4a8abd
    };
    _0x4908c2.sendMessage(_0xe24148, _0x6da142, _0x5f2472);
    a32_0x38d423.unlinkSync(_0x18faf5);
  } catch (_0x5d2f8d) {
    console.error("Erreur lors du traitement de la commande apk:", _0x5d2f8d);
    _0x4c6e88("*Erreur lors du traitement de la commande apk*");
  }
});
const a32_0x46d935 = require("../bdd/cron");
const {
  dbCache: a32_0x243001
} = require("../cache");
a32_0x5013ee({
  nomCom: "automute",
  categorie: "Groupe",
  desc: "Definir l'heure a laquelle le groupe se fermera automatiquement",
  alias: ["amute"]
}, async (_0x133765, _0x34335d, _0x320535) => {
  const {
    arg: _0x6c168b,
    ms: _0x557e5a,
    repondre: _0x4b0e2c,
    verifAdmin: _0x24d210,
    superUser: _0x5e50fb
  } = _0x320535;
  if (!_0x24d210) {
    _0x4b0e2c("Vous n'etes pas administrateur du groupe");
    return;
  }
  group_cron = await a32_0x46d935.getCronById(_0x133765);
  if (!_0x6c168b || _0x6c168b.length == 0) {
    let _0x4e29e9;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x4e29e9 = "Aucune heure regler pour l'automute ";
    } else {
      _0x4e29e9 = "Le groupe se fermera a " + group_cron.mute_at.split(":")[0] + "H " + group_cron.mute_at.split(":")[1];
    }
    let _0x98eb99 = "* *Etat :* " + _0x4e29e9 + "\n* *Consigne :* Pour Activer l'automute , ajoutez apres la commande la minute et l'heure separes par ':'\nExemple automute 9:30\n* Pour supprimer l'automute utilisez la commande *automute supp*";
    _0x4b0e2c(_0x98eb99);
    return;
  } else {
    let _0x2bf61c = _0x6c168b.join(" ");
    if (_0x2bf61c.toLowerCase() === "supp") {
      if (group_cron == null) {
        _0x4b0e2c("Aucun cronometrage est actif");
      } else {
        await a32_0x46d935.delCron(_0x133765);
        _0x4b0e2c("L'automute a ete supprimer ; redemarrage pour appliquer les changements");
        a32_0x5db5a9("pm2 restart all");
      }
    } else if (_0x2bf61c.includes(":")) {
      await a32_0x46d935.addCron(_0x133765, "mute_at", _0x2bf61c);
      _0x4b0e2c("etablissement d'un automute pour " + _0x2bf61c + " ; redemarrage pour appliquer les changements");
      a32_0x5db5a9("pm2 restart all");
    } else {
      _0x4b0e2c("Veuillez entrer une heure valide avec l'heure et la minute separer par :");
    }
  }
});
a32_0x5013ee({
  nomCom: "autounmute",
  categorie: "Groupe",
  desc: "Definir l'heure a laquelle le groupe s'ouvrira automatiquement",
  alias: ["aumute"]
}, async (_0x5ac634, _0x3f190a, _0x1a6a62) => {
  const {
    arg: _0x1c44a3,
    ms: _0x34e412,
    repondre: _0x1c4d4c,
    verifAdmin: _0x3d8ed5,
    superUser: _0x5b3b95
  } = _0x1a6a62;
  if (!_0x3d8ed5) {
    _0x1c4d4c("Vous n'etes pas administrateur du groupe");
    return;
  }
  group_cron = await a32_0x46d935.getCronById(_0x5ac634);
  if (!_0x1c44a3 || _0x1c44a3.length == 0) {
    let _0xe2b354;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0xe2b354 = "Aucune heure regler pour l'autounmute ";
    } else {
      _0xe2b354 = "Le groupe s'ouvrira a " + group_cron.unmute_at.split(":")[0] + "H " + group_cron.unmute_at.split(":")[1];
    }
    let _0x791f7c = "* *Etat :* " + _0xe2b354 + "\n* *Consigne :* Pour Activer l'autounmute , ajoutez apres la commande la minute et l'heure separes par ':'\nExemple l'autounmute 7:30\n* Pour supprimer l'autounmute utilisez la commande *autounmute supp*";
    _0x1c4d4c(_0x791f7c);
    return;
  } else {
    let _0x2e72f8 = _0x1c44a3.join(" ");
    if (_0x2e72f8.toLowerCase() === "supp") {
      if (group_cron == null) {
        _0x1c4d4c("Aucun cronometrage a ete active");
      } else {
        await a32_0x46d935.delCron(_0x5ac634);
        _0x1c4d4c("L'autounmute a ete supprimer ; redemarrage pour appliquer les changements");
        a32_0x5db5a9("pm2 restart all");
      }
    } else if (_0x2e72f8.includes(":")) {
      await a32_0x46d935.addCron(_0x5ac634, "unmute_at", _0x2e72f8);
      _0x1c4d4c("etablissement d'un autounmute pour " + _0x2e72f8 + " ; redemarrage pour appliquer les changements");
      a32_0x5db5a9("pm2 restart all");
    } else {
      _0x1c4d4c("Veuillez entrer une heure valide avec l'heure et la minute separer par :");
    }
  }
});
a32_0x5013ee({
  nomCom: "fkick",
  categorie: "Groupe",
  desc: "Retirer les membres d'un groupe avec un indicatif specifique"
}, async (_0xa9c7fa, _0x35ae96, _0x51619c) => {
  const {
    arg: _0x4db89c,
    ms: _0x52ccd3,
    repondre: _0x145e21,
    verifAdmin: _0x4961e2,
    superUser: _0x4defff,
    verifZokouAdmin: _0x3f65be
  } = _0x51619c;
  if (_0x4961e2 || _0x4defff) {
    if (!_0x3f65be) {
      _0x145e21("Vous j'ai besoin des droits d'adiministration pour effectuer cette commande");
      return;
    }
    if (!_0x4db89c || _0x4db89c.length == 0) {
      _0x145e21("Veuillez entrer l'indicatif du pays dont les membres seront retirer");
      return;
    }
    let _0x4025e7 = await _0x35ae96.groupMetadata(_0xa9c7fa);
    let _0x246f5f = _0x4025e7.participants;
    for (let _0x2c875b = 0; _0x2c875b < _0x246f5f.length; _0x2c875b++) {
      if (_0x246f5f[_0x2c875b].id.startsWith(_0x4db89c[0]) && _0x246f5f[_0x2c875b].admin === null) {
        await _0x35ae96.groupParticipantsUpdate(_0xa9c7fa, [_0x246f5f[_0x2c875b].id], "remove");
      }
    }
  } else {
    _0x145e21("Gomen vous etes pas administrateurs du groupe");
  }
});
a32_0x5013ee({
  nomCom: "nsfw",
  categorie: "Groupe",
  desc: ["activer ou desactiver les nsfw pour le groupe"]
}, async (_0x3979d4, _0x37d1e9, _0x5844b3) => {
  const {
    arg: _0xf99c4,
    ms: _0x2a2700,
    repondre: _0x3cfdd0,
    verifAdmin: _0x1befde,
    superUser: _0x4384c6
  } = _0x5844b3;
  if (!_0x1befde) {
    _0x3cfdd0("Desoler vous pouvez pas autoriser les contenues nsfw sans etre administrateur du groupe");
    return;
  }
  let _0x51e3fa = require("../bdd/hentai");
  let _0x35aa03 = await _0x51e3fa.checkFromHentaiList(_0x3979d4);
  if (_0xf99c4[0] == "on") {
    if (_0x35aa03) {
      _0x3cfdd0("Les nsfw sont deja actifs pour se groupe");
      return;
    }
    ;
    await _0x51e3fa.addToHentaiList(_0x3979d4);
    _0x3cfdd0("Les nsfw sont desormais actifs pour se groupe");
  } else if (_0xf99c4[0] == "off") {
    if (!_0x35aa03) {
      _0x3cfdd0("Les nsfw sont deja desactives pour se groupe");
      return;
    }
    ;
    await _0x51e3fa.removeFromHentaiList(_0x3979d4);
    _0x3cfdd0("Les nsfw sont desormais desactives pour se groupe");
  } else {
    _0x3cfdd0("Vous devez mettre \"on\" ou \"off\"");
  }
});
a32_0x5013ee({
  nomCom: "antispam",
  categorie: "Groupe",
  desc: ["activer ou desactiver l'antispam pour le groupe"]
}, async (_0x4c11a4, _0x344985, _0x201aef) => {
  const {
    arg: _0x1e5e9a,
    repondre: _0x31c297,
    verifAdmin: _0x5cfd72,
    superUser: _0x52d8b4
  } = _0x201aef;
  if (!_0x5cfd72 && !_0x52d8b4) {
    _0x31c297("Vous avez pas le droit d'utiliser cette commande");
    return;
  }
  let _0x16506c = require("../bdd/antispam");
  let _0x1dae7e;
  if (a32_0x243001.has("antispam")) {
    _0x1dae7e = a32_0x243001.get("antispam").includes(_0x4c11a4);
  } else {
    let _0x1f84e8 = await _0x16506c.isGroupspam();
    _0x1dae7e = _0x1f84e8.includes(_0x4c11a4);
    a32_0x243001.set("antispam", _0x1f84e8);
  }
  if (_0x1e5e9a[0] == "oui") {
    if (_0x1dae7e) {
      _0x31c297("l'antispam est deja activer pour se group");
      return;
    }
    ;
    await _0x16506c.addGroupToSpamList(_0x4c11a4);
    a32_0x243001.del("antispam");
    _0x31c297("l'antispam est desormais activer sur ce groupe");
  } else if (_0x1e5e9a[0] == "non") {
    if (!_0x1dae7e) {
      _0x31c297("l'antispam est deja desactiver ici");
      return;
    }
    ;
    await _0x16506c.removeGroupFromSpamList(_0x4c11a4);
    a32_0x243001.del("antispam");
    _0x31c297("operation terminee avec succes");
  } else {
    _0x31c297("Vous deve mettre *oui* ou *non*");
  }
});