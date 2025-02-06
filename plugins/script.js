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
*⚙ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎. 𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒💫*

╭───❲ *⛱𝖬𝖤𝖬𝖣.𝖱𝖤𝖯𝖮* ❳───©
│• 𝖮𝗐𝗇𝖾𝗋 : *${config.BOT_NAME}*
│• 𝖯𝗋𝖾𝖿𝗂𝗑 : *${config.PREFIX}*
│• 𝖬𝖤𝖬𝖣 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 : https://whatsapp.com/channel/0029VajdbH511ulTyGysZq17
│• 𝖡𝖺𝗂𝗅𝖾𝗒𝗌 : *𝗆𝗎𝗅𝗍𝗂-𝖽𝖾𝗏𝗂𝖼𝖾*
│• 𝖬𝖤𝖬𝖣 𝖱𝖾𝗉𝗈 : https://github.com/khulekanidube/Mvelase-MD
│• 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
│• 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 :  *${runtime(process.uptime())}*
│• 𝗏.𝖾𝗋𝗌𝗂𝗈𝗇 : 𝗏 2.0.0
┗───━━━━──┈┈──━━━━┉⚆

 *𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒*
`

    conn.sendMessage(conn.user.id, { image: { url: `https://files.catbox.moe/pw3dp0.png` }, caption: up })

    
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
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
