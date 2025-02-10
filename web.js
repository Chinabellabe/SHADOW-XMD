require("./index");
const a73_0x2639ad = require("express");
const a73_0x4eac31 = process.env.PORT || 3000;
const a73_0x302623 = a73_0x2639ad();
a73_0x302623.get("/", (_0x54ba5e, _0x2080e4) => {
  _0x2080e4.send("<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ꜱʜᴀᴅᴏᴡ-xᴍᴅ</title>\n    <style>\n        /* Styles pour centrer le texte */\n        body {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            font-family: Arial, sans-serif;\n            background-color: #f0f0f0;\n        }\n        .content {\n            text-align: center;\n            padding: 20px;\n            background-color: #fff;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0,0,0,0.1);\n        }\n    </style>\n</head>\n<body>\n    <div class=\"content\">\n        <h1>ᴍᴇʀᴄɪ ᴅ'ᴀᴠᴏɪʀ ᴄʜᴏɪꜱɪꜱ ꜱʜᴀᴅᴏᴡ-xᴍᴅ</h1>\n    </div>\n</body>\n</html>\n");
});
a73_0x302623.listen(a73_0x4eac31, () => {
  console.log("listen on : " + a73_0x4eac31);
});