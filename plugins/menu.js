const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───━━━━──┈┈──━━━━┉⚆
│• 𝖮𝗐𝗇𝖾𝗋 : *${config.BOT_NAME}*
│• 𝖯𝗋𝖾𝖿𝗂𝗑 : *${config.PREFIX}*
│• 𝖬𝗈𝖽𝖾 : *${config.MODE}*
│• 𝖡𝖺𝗂𝗅𝖾𝗒𝗌 : *𝗆𝗎𝗅𝗍𝗂-𝖽𝖾𝗏𝗂𝖼𝖾*
│• 𝖯𝗅𝖺𝗍𝖿𝗈𝗋𝗆 : *𝗄𝗈𝗒𝖾𝖻*
│• 𝖱𝖺𝗆 𝖴𝗌𝖺𝗀𝖾 : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
│• 𝖱𝗎𝗇𝗍𝗂𝗆𝖾 :  *${runtime(process.uptime())}*
│• 𝗏.𝖾𝗋𝗌𝗂𝗈𝗇 : 𝗏 2.0.0
┗───━━━━──┈┈──━━━━┉⚆

╭───❲ *⛱𝖬𝖤𝖬𝖣.𝖬𝖤𝖭𝖴* ❳───©
│ ⚙️ 𝖺𝗂𝗆𝖾𝗇𝗎
│ ⚙️ 𝗀𝗋𝗈𝗎𝗉𝗆𝖾𝗇𝗎
│ ⚙️ 𝖺𝗇𝗂𝗆𝖾𝗆𝖾𝗇𝗎
│ ⚙️ 𝖿𝗎𝗇𝗆𝖾𝗇𝗎
│ ⚙️ 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗆𝖾𝗇𝗎
│ ⚙️ 𝖼𝗈𝗇𝗏𝖾𝗍𝗆𝖾𝗇𝗎
│ ⚙️ 𝗆𝖺𝗂𝗇𝗆𝖾𝗇𝗎
│ ⚙️ 𝖺𝗅𝗅𝗆𝖾𝗇𝗎
│ ⚙️ 𝗋𝖾𝗉𝗈
│ ⚙️ 𝗈𝗐𝗇𝖾𝗋𝗆𝖾𝗇𝗎
│ ⚙️ 𝖺𝗇𝗈𝗍𝗁𝖾𝗋𝗆𝖾𝗇𝗎
│ ⚙️ 𝖻𝗂𝖻𝗅𝖾𝗆𝖾𝗇𝗎
│ ⚙️ 𝗆𝗏𝖾𝗅𝖺𝗌𝖾
┗──────━━─────┈⊷

*${config.CAPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "downloadmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝖺𝗉𝗄
┊ ꒰ ͜͡➸ 𝖿𝖺𝖼𝖾𝖻𝗈𝗈𝗄
┆ ꒰ ͜͡➸ 𝗌𝗈𝗇𝗀
┆ ꒰ ͜͡➸ 𝗍𝗂𝗄𝗍𝗈𝗄
┆ ꒰ ͜͡➸ 𝗍𝗐𝗂𝗍𝗍𝖾𝗋
┆ ꒰ ͜͡➸ 𝗀𝗂𝗇𝗂𝗌𝗂𝗅𝗂𝖺
┆ ꒰ ͜͡➸ 𝗂𝗇𝗌𝗍𝖺𝗀𝗋𝖺𝗆
┆ ꒰ ͜͡➸ 𝗇𝗌𝖿𝗐
┆ ꒰ ͜͡➸ 𝗂𝗆𝗀
┆ ꒰ ͜͡➸ 𝗉𝗅𝖺𝗒𝗎𝗍𝗋𝖺
┆ ꒰ ͜͡➸ 𝖺𝗎𝖽𝗂𝗈
┆ ꒰ ͜͡➸ 𝗏𝗂𝖽𝖾𝗈
┆ ꒰ ͜͡➸ 𝗒.𝗍.𝗆𝗉³
┆ ꒰ ͜͡➸ 𝗒.𝗍.𝗆𝗉⁴
┆ ꒰ ͜͡➸ 𝗆𝖾𝖽𝗂𝖺𝖿𝗂𝗋𝖾
┆ ꒰ ͜͡➸ 𝖽𝖺𝗋𝖺𝗆𝖺
┆ ꒰ ͜͡➸ 𝗀𝖽𝗋𝗂𝗏𝖾
┆ ꒰ ͜͡➸ 𝗌𝗆𝗈𝗏𝗂𝖾
┆ ꒰ ͜͡➸ 𝖻𝖺𝗂𝗌𝖼𝗈𝗉𝖾
┗──────━━─────┈⊷

 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭───❲ *⛱𝖦𝖱𝖮𝖴𝖯.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝖺𝖽𝖽
┊ ꒰ ͜͡➸ 𝗋𝖾𝗆𝗈𝗏𝖾
┆ ꒰ ͜͡➸ 𝗀𝗋𝗈𝗎𝗉𝗅𝗂𝗇𝗄
┆ ꒰ ͜͡➸ 𝗄𝗂𝖼𝗄
┆ ꒰ ͜͡➸ 𝗄𝗂𝖼𝗄𝖺𝗅𝗅
┆ ꒰ ͜͡➸ 𝗉𝗋𝗈𝗆𝗈𝗍𝖾
┆ ꒰ ͜͡➸ 𝗈𝗉𝖾𝗇𝗍𝗂𝗆𝖾
┆ ꒰ ͜͡➸ 𝖼𝗅𝗈𝗌𝖾𝗍𝗂𝗆𝖾
┆ ꒰ ͜͡➸ 𝖽𝖾𝗆𝗈𝗍𝖾
┆ ꒰ ͜͡➸ 𝖽𝗂𝗌𝗆𝗂𝗌𝗌
┆ ꒰ ͜͡➸ 𝗋𝖾𝗏𝗈𝗄𝖾
┆ ꒰ ͜͡➸ 𝗌𝖾𝗍𝗀𝗈𝗈𝖽𝖻𝗒𝖾
┆ ꒰ ͜͡➸ 𝗌𝖾𝗍𝗐𝖾𝗅𝖼𝗈𝗆𝖾
┆ ꒰ ͜͡➸ 𝖽𝖾𝗅𝖾𝗍𝖾
┆ ꒰ ͜͡➸ 𝗀𝖾𝗍𝗉𝗂𝖼
┆ ꒰ ͜͡➸ 𝗀𝖾𝗍𝗂𝗇𝖿𝗈
┆ ꒰ ͜͡➸ 𝖽𝖾𝗅𝖾𝗍𝖾
┆ ꒰ ͜͡➸ 𝖽𝗂𝗌𝖺𝗉𝗉𝖾𝖺𝗋 𝗈𝗇
┆ ꒰ ͜͡➸ 𝖽𝗂𝗌𝖺𝗉𝗉𝖾𝖺𝗋 𝗈𝖿𝖿
┆ ꒰ ͜͡➸ 𝖽𝗂𝗌𝖺𝗉𝗉𝖾𝖺𝗋 7𝖣,24𝖧
┆ ꒰ ͜͡➸ 𝖺𝗅𝗅𝗋𝖾𝗊
┆ ꒰ ͜͡➸ 𝗎𝗉𝖽𝖺𝗍𝖾𝗀𝗇𝖺𝗆𝖾
┆ ꒰ ͜͡➸ 𝗎𝗉𝖽𝖺𝗍𝖾𝗀𝖽𝖾𝗌𝖼
┆ ꒰ ͜͡➸ 𝗃𝗈𝗂𝗇𝗋𝖾𝗊𝗎𝖾𝗌𝗍𝗌
┆ ꒰ ͜͡➸ 𝗌𝖾𝗇𝖽𝖽𝗆
┆ ꒰ ͜͡➸ 𝗇𝗂𝗄𝖺𝗅
┆ ꒰ ͜͡➸ 𝗆𝗎𝗍𝖾
┆ ꒰ ͜͡➸ 𝗎𝗇𝗆𝗎𝗍𝖾
┆ ꒰ ͜͡➸ 𝗅𝗈𝖼𝗄𝗀𝖼
┆ ꒰ ͜͡➸ 𝗂𝗇𝗏𝗂𝗍𝖾
┆ ꒰ ͜͡➸ 𝖺𝗇𝗍𝗂𝗅𝗂𝗇𝗄
┆ ꒰ ͜͡➸ 𝗍𝖺𝗀
┆ ꒰ ͜͡➸ 𝗍𝖺𝗀𝖺𝗅𝗅
┆ ꒰ ͜͡➸ 𝗁𝗂𝖽𝖾𝗍𝖺𝗀
┆ ꒰ ͜͡➸ 𝗍𝖺𝗀𝖺𝖽𝗆𝗂𝗇𝗌
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🚀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭───❲ *⛱𝖥𝖴𝖭.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝗌𝖺𝖽
┊ ꒰ ͜͡➸ 𝗁𝖺𝗉𝗉𝗒
┆ ꒰ ͜͡➸ 𝗁𝖺𝖼𝗄
┆ ꒰ ͜͡➸ 𝗃𝗈𝗄𝖾
┆ ꒰ ͜͡➸ 𝗁𝖾𝖺𝗋𝗍
┆ ꒰ ͜͡➸ 𝗂𝗇𝗌𝗎𝗅𝗍
┆ ꒰ ͜͡➸ 𝗌𝗁𝗒
┆ ꒰ ͜͡➸ 𝗆𝗈𝗈𝗇
┆ ꒰ ͜͡➸ 𝖺𝗇𝗀𝗋𝗒
┆ ꒰ ͜͡➸ 𝗄𝗂𝗌𝗌
┆ ꒰ ͜͡➸ 𝖼𝗎𝗇𝖿𝗎𝗓𝖾𝖽
┆ ꒰ ͜͡➸ 𝗁𝖺𝗇𝖽
┆ ꒰ ͜͡➸ 𝗇𝗂𝗄𝖺𝗅
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "anothermenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖠𝖭𝖮𝖳𝖧𝖤𝖱.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝗌𝖺𝗏𝖾
┊ ꒰ ͜͡➸ 𝗐𝖾𝖺𝗍𝗁𝖾𝗋
┆ ꒰ ͜͡➸ 𝖽𝖾𝖿𝗂𝗇𝖾
┆ ꒰ ͜͡➸ 𝖿𝖺𝖼𝗍
┆ ꒰ ͜͡➸ 𝗍𝗂𝗆𝖾𝗓𝗈𝗇𝖾
┆ ꒰ ͜͡➸ 𝖺𝗀𝖾
┆ ꒰ ͜͡➸ 𝖽𝖺𝗂𝗅𝗒𝖿𝖺𝖼𝗍
┆ ꒰ ͜͡➸ 𝗌𝖼𝗋𝖾𝗉𝗈
┆ ꒰ ͜͡➸ 𝗆𝗈𝗏𝗂𝖾
┆ ꒰ ͜͡➸ 𝗂𝗇𝗌𝗎𝗅𝗍
┆ ꒰ ͜͡➸ 𝗐𝗂𝗄𝗂𝗉𝖾𝖽𝗂𝖺
┆ ꒰ ͜͡➸ 𝗀𝗉𝖺𝗌𝗌
┆ ꒰ ͜͡➸ 𝗀𝗂𝗍𝗁𝗎𝖻𝗌𝗍𝖺𝗅𝗄
┆ ꒰ ͜͡➸ 𝗒.𝗍.𝗌
┆ ꒰ ͜͡➸ 𝗒.𝗍.𝗏
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖬𝖠𝖨𝖭.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝗉𝗂𝗇𝗀
┊ ꒰ ͜͡➸ 𝗉𝗂𝗇𝗀²
┆ ꒰ ͜͡➸ 𝖺𝗅𝗂𝗏𝖾
┆ ꒰ ͜͡➸ 𝗋𝗎𝗇𝗍𝗂𝗆𝖾
┆ ꒰ ͜͡➸ 𝗌𝗒𝗌𝗍𝖾𝗆
┆ ꒰ ͜͡➸ 𝗌𝖼𝗋𝗂𝗉𝗍
┆ ꒰ ͜͡➸ 𝗋𝖾𝗉𝗈
┆ ꒰ ͜͡➸ 𝗈𝗐𝗇𝖾𝗋
┆ ꒰ ͜͡➸ 𝗆𝖾𝗇𝗎
┆ ꒰ ͜͡➸ 𝗆𝖾𝗇𝗎²
┆ ꒰ ͜͡➸ 𝖺𝗅𝗅𝗆𝖾𝗇𝗎
┆ ꒰ ͜͡➸ 𝗋𝖾𝗌𝗍𝖺𝗋𝗍
┆ ꒰ ͜͡➸ 𝗆𝗏𝖾𝗅𝖺𝗌𝖾
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖮𝖶𝖭𝖤𝖱.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝗆𝖾𝗇𝗎
┊ ꒰ ͜͡➸ 𝖺𝗅𝗅𝗆𝖾𝗇𝗎
┆ ꒰ ͜͡➸ 𝗋𝖾𝗉𝗈
┆ ꒰ ͜͡➸ 𝗆𝖾𝗇𝗎²
┆ ꒰ ͜͡➸ 𝗅𝗂𝗌𝗍𝖼𝗆𝖽
┆ ꒰ ͜͡➸ 𝖻𝗅𝗈𝖼𝗄
┆ ꒰ ͜͡➸ 𝗎𝗇𝖻𝗅𝗈𝖼𝗄
┆ ꒰ ͜͡➸ 𝖿𝗎𝗅𝗅𝗉𝗉
┆ ꒰ ͜͡➸ 𝗋𝖾𝗌𝗍𝖺𝗋𝗍
┆ ꒰ ͜͡➸ 𝗎𝗉𝖽𝖺𝗍𝖾𝖼𝗆𝖽
┆ ꒰ ͜͡➸ 𝗌𝗁𝗎𝗍𝖽𝗈𝗐𝗇
┆ ꒰ ͜͡➸ 𝖺𝗅𝗂𝗏𝖾
┆ ꒰ ͜͡➸ 𝗉𝗂𝗇𝗀
┆ ꒰ ͜͡➸ 𝗀𝗃𝗂𝖽
┆ ꒰ ͜͡➸ 𝗃𝗂𝖽
┆ ꒰ ͜͡➸ 𝖺𝗅𝗂𝗏𝖾²
┆ ꒰ ͜͡➸ 𝗆𝗏𝖾𝗅𝖺𝗌𝖾
┆ ꒰ ͜͡➸ 𝗎𝗉𝖽𝖺𝗍𝖾
┆ ꒰ ͜͡➸ 𝗏𝖾𝗋𝗌𝗂𝗈𝗇
┆ ꒰ ͜͡➸ 𝖼𝗆𝖽𝗎𝗉𝖽𝖺𝗍𝖾
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖢𝖮𝖭𝖵𝖤𝖱𝖳.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝗍𝗍𝗌
┊ ꒰ ͜͡➸ 𝖿𝖺𝗇𝖼𝗒
┆ ꒰ ͜͡➸ 𝗌𝗍𝗂𝖼𝗄𝖾𝗋
┆ ꒰ ͜͡➸ 𝗍𝖺𝗄𝖾
┆ ꒰ ͜͡➸ 𝗍𝗈𝗆𝗉³
┆ ꒰ ͜͡➸ 𝗌𝗄𝗂𝖼𝗄𝖾𝗋²
┆ ꒰ ͜͡➸ 𝗍𝗋𝗍
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// bible menu 

cmd({
    pattern: "biblemenu",
    desc: "menu the bot",
    category: "menu",
    react: "⛪",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖡𝖨𝖡𝖫𝖤.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝖻𝗂𝖻𝗅𝖾
┊ ꒰ ͜͡➸ 𝖻𝗂𝖻𝗅𝖾𝗅𝗂𝗌𝗍
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭───❲ *⛱𝖠𝖭𝖨𝖬𝖤.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝖽𝗈𝗀
┊ ꒰ ͜͡➸ 𝗄𝗂𝗇𝗀
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅¹
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅²
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅³
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅⁴
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅⁵
┆ ꒰ ͜͡➸ 𝖺𝗇𝗂𝗆𝖾𝗀𝗂𝗋𝗅⁶
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭───❲ *⛱𝖠𝖨.𝖬𝖤𝖭𝖴* ❳───©
┆ ꒰ ͜͡➸ 𝖺𝗂
┊ ꒰ ͜͡➸ 𝗀𝗉𝗍
┆ ꒰ ͜͡➸ 𝗆𝖾𝗍𝖺
┆ ꒰ ͜͡➸ 𝖻𝗅𝖺𝖼𝗄𝖻𝗈𝗑
┆ ꒰ ͜͡➸ 𝗀𝗉𝗍⁴
┆ ꒰ ͜͡➸ 𝖻𝗂𝗇𝗀
┆ ꒰ ͜͡➸ 𝖼𝗈𝗉𝗂𝗅𝗈𝗍
┗──────━━─────┈⊷
 ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/sg2hra.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363334594240793@newsletter',
                        newsletterName: 'ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

