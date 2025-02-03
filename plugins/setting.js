/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "settings",

    react: "🚀 ",
    alias: ["setting","env"],
    desc: "Get bot\'s settings list.",

    category: "main",

    use: '.menu',

    filename: __filename

},
//========================================config setting==================================
async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeSetting =`*❐───━━━━𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦━━━━┉⚆* 
*🚀* *⚙️𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗗 𝗦𝗧𝗔𝗧𝗨𝗦:* ➤ ${config.AUTO_READ_STATUS}
*🚀* *⚙️ 𝗠𝗢𝗗𝗘:* ➥ ${config.MODE} 
*🚀* *⚙️ 𝗔𝗨𝗧𝗢 𝗩𝗢𝗜𝗖𝗘:* ➥ ${config.AUTO_VOICE} 
*🚀* *⚙️ 𝗔𝗨𝗧𝗢 𝗦𝗧𝗜𝗖𝗞𝗘𝗥:* ➥ ${config.AUTO_STICKER} 
*🚀* *⚙️ 𝗔𝗨𝗧𝗢 𝗥𝗘𝗣𝗟𝗬:* ➥ ${config.AUTO_REPLY} 
*🚀* *⚙️ 𝗔𝗟𝗜𝗕𝗘 𝗜𝗠𝗚:* ➥ ${config.ALIVE_IMG} 
*🚀* *⚙️ 𝗔𝗟𝗜𝗩𝗘 𝗠𝗦𝗚:* ➥ ${config.ALIVE_MSG} 
*🚀* *⚙️ 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞:* ➥ ${config.ANTI_LINK} 
*🚀* *⚙️ 𝗔𝗡𝗧𝗜 𝗕𝗔𝗗:* ➥ ${config.ANTI_BAD} 
*🚀* *⚙️ 𝗣𝗥𝗘𝗙𝗜𝗫:* ➥ [${config.PREFIX}]
*🚀* *⚙️ 𝗙𝗔𝗖𝗞 𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗛:* ➥ ${config.FAKE_RECORDING} 
*🚀* *⚙️ 𝗔𝗨𝗧𝗢 𝗥𝗘𝗔𝗖𝗧:* ➥ ${config.AUTO_REACT} 
*🚀* *⚙️ 𝗢𝗪𝗡𝗘𝗥 𝗥𝗘𝗔𝗖𝗧:* ➥ ${config.OWNER_REACT} 
*🚀* *⚙️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘:* ➥ ${config.BOT_NAME}
❐───━━━━────━━━━┉⚆

*𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗨𝗽𝗱𝗮𝘁𝗲𝘀.*

*https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17*
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeSetting},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
