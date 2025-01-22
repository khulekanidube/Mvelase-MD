/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/



const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "⏳",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*♾┈──────━━───────♾*

*💌 𝗛𝗲𝗹𝗹𝗼𝗼 ${pushname}*

*♾┈──────━━───────♾*

*┎┈──────━━──────☉*
*┃❣┏─────━━─────━━─────◯*
*┃❣┃🏖 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 ➜ 𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
*┃❣┃🏖 𝗥𝗲𝗮𝗹 𝗡𝗮𝗺𝗲 ➜ 𝗞𝗵𝘂𝗹𝗲𝗸𝗮𝗻𝗶 𝗗𝘂𝗯𝗲*
*┃❣┃🏖 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 ➜ 𝗭𝗶𝗺*
*┃❣┃🏖 𝗔𝗴𝗲 ➜ 16 𝗬𝗲𝗮𝗿𝘀*
*┃❣┃🏖 𝗖𝗶𝘁𝘆 ➜ 𝗕𝘂𝗹𝗮𝘄𝗮𝘆𝗼*
*┃❣┃🏖 𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
*┃❣┕─────━━─────━━─────◯*
*┕┈──────━━──────☉*
> *2025-2099 𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗🚀*

*☉──┉┉───━━─────☉☭*
> © 🚀𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿/𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆🚀
*☉──┉┉───━━─────☉☭*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
