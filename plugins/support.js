const {cmd , commands} = require('../command')

cmd({
    pattern: "support",
    desc: "support bot",
    category: "main",
    react: "🚬",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*𝙃𝙀𝙇𝙇𝙊 ${pushname} 𝙈𝙑𝙀𝙇𝘼𝙎𝙀 𝙈𝘿 𝙐𝙎𝙀𝙍.* 

*𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙄𝙉𝙂 𝙈𝙔 𝘽𝙊𝙏* 

> 𝘿𝙊𝙉𝙏 𝙁𝙊𝙍𝙂𝙀𝙏 𝙏𝙊 𝙁𝙊𝙍𝙆 𝘼𝙉𝘿 𝙂𝙄𝙑𝙀 𝘼 𝙎𝙏𝘼𝙍.

🚬-: https://github.com/khulekanidube/Mvelase-MD 

> *©𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿/𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/pw3dp0.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
