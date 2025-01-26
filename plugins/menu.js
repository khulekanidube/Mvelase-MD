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
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃❣╭─────╾╾╾╾─────⚆
┃❣│🏖 Owner : *${config.BOT_NAME}*
┃❣│🏖 Baileys : *Multi Device*
┃❣│🏖 Type : *NodeJs*
┃❣│🏖 Platform : *⏳*
┃❣│🏖 Mode : *${config.MODE}*
┃❣│🏖 Prifix : *${config.PREFIX}*
┃❣│🏖 Version : *v 4.0.0 BETA.*
┃❣╰─────╾╾╾╾─────⚆
╰━━━━━━━━━━━━━━━┈⊷
*╭━━〔 *𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐌𝐃 𝐌𝐞𝐧𝐮* 〕━━┈⊷*
*┃⚆╭─────┉┉┉─────⚆*
*┃⚆┃• 🔔aimenu🔔*
*┃⚆┃• 🏖anmiemenu🏖*
*┃⚆┃• ❣️convertmenu❣️*
*┃⚆┃• 🤹🏻funmenu🤹🏻*
*┃⚆┃• 🩹dlmenu🩹*
*┃⚆┃• 👻listcmd👻*
*┃⚆┃• 🤙mainmenu🤙*
*┃⚆┃• 🩹groupmenu🩹*
*┃⚆┃• ⏳️allmenu⛱⏳️*
*┃⚆┃• 💀ownermenu💀*
*┃⚆┃• ⛱️othermenu⛱️*
*┃⚆┃• ❣️repo❣️*
*┃⚆└───────────┈⊷*
*╰──────────────┈⊷*
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃🚬╭─────┉┉┉─────⚆
┃🚬┃• facebook
┃🚬┃• mediafire
┃🚬┃• tiktok
┃🚬┃• twitter
┃🚬┃• Insta
┃🚬┃• apk
┃🚬┃• img
┃🚬┃• play
┃🚬┃• play2
┃🚬┃• audio
┃🚬┃• video
┃🚬┃• video2
┃🚬┃• ytmp3
┃🚬┃• ytmp4
┃🚬┃• song
┃🚬┃• darama
┃🚬┃• gdrive
┃🚬┃• smovie
┃🚬┃• baiscope 
┃🚬┃• ginisilia 
┃🚬└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
        let dec = `╭━━〔 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃⚆╭─────┉┉┉─────⚆
┃⚆┃• grouplink
┃⚆┃• add
┃⚆┃• remove
┃⚆┃• kick
┃⚆┃• promote 
┃⚆┃• demote
┃⚆┃• dismiss 
┃⚆┃• revoke
┃⚆┃• setgoodbye
┃⚆┃• setwelcome
┃⚆┃• delete 
┃⚆┃• getpic
┃⚆┃• ginfo
┃⚆┃• delete 
┃⚆┃• disappear on
┃⚆┃• disappear off
┃⚆┃• disappear 7D,24H
┃⚆┃• allreq
┃⚆┃• updategname
┃⚆┃• updategdesc
┃⚆┃• joinrequests
┃⚆┃• senddm
┃⚆┃• nikal
┃⚆┃• mute
┃⚆┃• unmute
┃⚆┃• lockgc
┃⚆┃• unlockgc
┃⚆┃• invite
┃⚆┃• tag
┃⚆┃• hidetag
┃⚆┃• tagall
┃⚆┃• tagadmins
┃⚆└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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

        let dec = `╭━━〔 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• insult
┃⚈┃• hack
┃⚈┃• joke
┃⚈┃• heart 
┃⚈┃• happy 
┃⚈┃• sad
┃⚈┃• angry 
┃⚈┃• shy
┃⚈┃• kiss
┃⚈┃• moon
┃⚈┃• cunfuzed
┃⚈┃• hand
┃⚈┃• nikal
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "⏳",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *𝐀𝐧𝐨𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃⸔╭─────╾╾╾╾╾────☯
┃⸔┃• fact
┃⸔┃• font
┃⸔┃• define
┃⸔┃• news
┃⸔┃• movie
┃⸔┃• weather
┃⸔┃• srepo
┃⸔┃• insult
┃⸔┃• save
┃⸔┃• wikipedia
┃⸔┃• gpass
┃⸔┃• githubstalk
┃⸔┃• yts
┃⸔┃• ytv
┃⸔└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
        let dec = `╭━━〔 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃⸕╭─────╾╾╾╾╾────☯
┃⸕┃• ping
┃⸕┃• alive
┃⸕┃• runtime
┃⸕┃• uptime 
┃⸕┃• repo
┃⸕┃• owner
┃⸕┃• menu
┃⸕┃• menu2
┃⸕┃• restart
┃⸕└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
        let dec = `╭━━〔 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃◉╭─────╾╾╾╾╾────☯
┃◉┃• owner
┃◉┃• menu
┃◉┃• menu2
┃◉┃• listcmd
┃◉┃• allmenu
┃◉┃• repo
┃◉┃• block
┃◉┃• unblock
┃◉┃• fullpp
┃◉┃• setpp
┃◉┃• restart
┃◉┃• shutdown
┃◉┃• updatecmd
┃◉┃• alive
┃◉┃• ping 
┃◉┃• gjid
┃◉┃• jid
┃◉└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
        let dec = `╭━━〔 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃🚬╭─────╾╾╾╾╾────☯
┃🚬┃• sticker
┃🚬┃• sticker2
┃🚬┃• fancy
┃🚬┃• take
┃🚬┃• tomp3
┃🚬┃• tts
┃🚬┃• trt
┃🚬└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
          let dec = `╭━━〔 *𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃🚬╭─────╾╾╾╾╾────☯
┃🚬┃• dog
┃🚬┃• king
┃🚬┃• animegirl
┃🚬┃• animegirl
┃🚬┃• animegirl1
┃🚬┃• animegirl2
┃🚬┃• animegirl3
┃🚬┃• animegirl4
┃🚬┃• animegirl5
┃🚬└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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
        let dec = `╭━━〔 *𝐀𝐈 𝐌𝐞𝐧𝐮* 〕━━┈⊷
┃⚈╭─────╾╾╾╾╾────☯
┃⚈┃• ai
┃⚈┃• gpt
┃⚈┃• meta
┃⚈┃• blackbox
┃⚈┃• gpt4
┃⚈┃• bing
┃⚈┃• copilot
┃⚈└───────────┈⊷
╰──────────────┈⊷
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/pw3dp0.png` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363321103874131@newsletter',
                        newsletterName: '𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆',
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

