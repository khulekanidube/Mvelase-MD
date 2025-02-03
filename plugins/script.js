/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/



const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "⏳️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*❐───━━━━────━━━━┉⚆*
*👨‍💻𝗠𝘃𝗲𝗹𝗮𝘀𝗲⟝⟉⟞𝗠𝗗⟝⟉⟞𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*

*𝗢𝗪𝗡𝗘𝗥⟝⟉⟞𝗞𝗵𝘂𝗹𝗲𝗸𝗮𝗻𝗶⟝⟉⟞𝗗𝘂𝗯𝗲*

*⏳️𝗠𝘃𝗲𝗹𝗮𝘀𝗲⟝⟉⟞𝗠𝗗⟝⟉⟞𝗚𝗶𝘁𝗵𝘂𝗯⟝⟉⟞𝗥𝗲𝗽𝗼⟝⟉⟞𝗟𝗶𝗻𝗸*

*https://github.com/khulekanidube/Mvelase-MD*

*🔖𝗠𝘃𝗲𝗹𝗮𝘀𝗲⟝⟉⟞𝗠𝗗⟝⟉⟞𝗖𝗵𝗮𝗻𝗻𝗲𝗟*

*https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17*

*❐───━━━━────━━━━┉⚆*

> *𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363334594240793@newsletter',
      newsletterName: "𝑴𝒗𝒆𝒍𝒂𝒔𝒆 𝑴𝑫 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚",
      serverMessageId: 144
    },
externalAdReply: { 
title: '𝑴𝒗𝒆𝒍𝒂𝒔𝒆 𝑴𝑫 𝑻𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒚',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/khulekanidube/Mvelase-MD" ,
thumbnailUrl: "https://files.catbox.moe/sg2hra.png" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
