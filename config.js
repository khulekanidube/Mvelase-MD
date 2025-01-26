/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RkxwiJBD#1yirxrzzRH44F4vhw_glbk91qIQw9k_0PVvYTqHzNTc",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌 if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS__MSG || "*𝒀𝑶𝑼𝑹 𝑺𝑻𝑨𝑻𝑼𝑺 𝑯𝑨𝑺 𝑩𝑬𝑬𝑵 𝑽𝑰𝑬𝑾𝑬𝑫 𝑱𝑼𝑺𝑻 𝑵𝑶𝑾 𝑩𝒀 𝑴𝑽𝑬𝑳𝑨𝑺𝑬-𝑴𝑫*",
// set the auto reply massage on status reply  

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣",
// add bot namw here for menu

STICKER_NAME: process.env.STICKER_NAME || "𝑴𝒗𝒆𝒍𝒂𝒔𝒆 𝑴𝑫 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🔖,🚀,📍,⚡️,⛱️,🏝,🎭,🤴,⚙,🗿,🔨,🔔,🩹,🩹,🛡,🚬,❣️,🔕,🩺,🪥,📣,📢,,🎺,🎻,🪕,🎸,🎸,🎷,⚒️,📟,🎻,🎧,",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263711337094",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "*© 𝑺𝑻𝑨𝒀 𝑪𝑶𝑵𝑵𝑬𝑪𝑻𝑬𝑫 𝑻𝑶 𝑴𝑽𝑬𝑳𝑨𝑺𝑬-𝑴𝑫🚬*",
// add bot owner name 

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/pw3dp0.png",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> *𝑴𝑽𝑬𝑳𝑨𝑺𝑬-𝑴𝑫 𝑰𝑺 𝑨𝑳𝑰𝑽𝑬 𝑨𝑵𝑫 𝑭𝑶𝑹𝑬𝑽𝑬𝑹.🚬*🤠",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
//  1📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_STICKER: process.env.AUTO_STICKER || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_REPLY: process.env.AUTO_REPLY || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_TYPING: process.env.AUTO_TYPING || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

READ_CMD: process.env.READ_CMD || "false",
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
//  📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
