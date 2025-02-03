const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mvelase",
    react: "⚙",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
download:  '',
ai: '',
main: '',
fun: '',
convert: '',
owner: '',
group: '',
another '',
anime '',
bible: '', 
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*👋 𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄* ${pushname}!

*⚙ 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎. 𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒💫*

╭───❲ *⛱𝖢𝖬𝖣.𝖫𝖨𝖲𝖳* ❳───©
│ • 𝖮𝗐𝗇𝖾𝗋 : *${config.BOT_NAME}*
│ • 𝖯𝗋𝖾𝖿𝗂𝗑 : *${config.PREFIX}*
│ • 𝖬𝗈𝖽𝖾 : *${config.MODE}*
│ • 𝖡𝖺𝗂𝗅𝖾𝗒𝗌 : *𝗆𝗎𝗅𝗍𝗂-𝖽𝖾𝗏𝗂𝖼𝖾*
│• 𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : *𝗄𝗈𝗒𝖾𝖻*
│• 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
│• 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 :  *${runtime(process.uptime())}*
│• 𝗏.𝖾𝗋𝗌𝗂𝗈𝗇 : 𝗏 2.0.0
┗───━━━━──┈┈──━━━━┉⚆

╭───────────────©
│*📥𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣.𝖬𝖤𝖭𝖴*
│ ───────
${menu.download}
⚆━──━━━────────┈┉•

╭───────────────©
│*🪂𝖠𝖨.𝖬𝖤𝖭𝖴*
│ ───────
${menu.ai}
⚆━──━━━────────┈┉•

╭───────────────©
│*📟𝖬𝖠𝖨𝖭.𝖬𝖤𝖭𝖴*
│ ───────
${menu.main}
⚆━──━━━────────┈┉•

╭───────────────©
│*😅𝖥𝖴𝖭.𝖬𝖤𝖭𝖴*
│ ───────
${menu.fun}
⚆━──━━━────────┈┉•

╭───────────────©
│*🔄𝖢𝖮𝖭𝖵𝖤𝖱𝖳.𝖬𝖤𝖭𝖴*
│ ───────
${menu.convert}
⚆━──━━━────────┈┉•

╭───────────────©
│*👨‍💻𝖮𝖶𝖭𝖤𝖱.𝖬𝖤𝖭𝖴*
│ ───────
${menu.owner}
⚆━──━━━────────┈┉•

╭───────────────©
│*⌛𝖦𝖱𝖮𝖴𝖯.𝖬𝖤𝖭𝖴*
│ ───────
${menu.group}
⚆━──━━━────────┈┉•

╭───────────────©
│*🗿𝖠𝖭𝖮𝖳𝖧𝖤𝖱.𝖬𝖤𝖭𝖴*
│ ───────
${menu.another}
⚆━──━━━────────┈┉•

╭───────────────©
│*⛱𝖠𝖭𝖨𝖬𝖤.𝖬𝖤𝖭𝖴*
│ ───────
${menu.anime}
⚆━──━━━────────┈┉•

╭───────────────©
│*⛪𝖡𝖨𝖡𝖫𝖤.𝖬𝖤𝖭𝖴*
│ ───────
${menu.bible}
⚆━──━━━────────┈┉•

*ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
