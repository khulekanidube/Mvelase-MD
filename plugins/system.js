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
cmd({
    pattern: "system",
    react: "♠",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*𝖧𝖾𝗅𝗅𝗈*
*𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒 𝖲𝗒𝗌𝗍𝖾𝗆*

*•𝖴𝗉𝗍𝗂𝗆𝖾*  *${runtime(process.uptime())}*

*•𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*

*•𝖧𝗈𝗌𝗍𝗇𝖺𝗆𝖾* ${os.hostname()}

*•𝖮𝗐𝗇𝖾𝗋* *𝖪𝗁𝗎𝗅𝖾𝗄𝖺𝗇𝗂 𝖣𝗎𝖻𝖾*


*©𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
