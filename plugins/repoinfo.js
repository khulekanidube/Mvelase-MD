/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/



const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "srepo",
    desc: "Fetch information about a GitHub repository.",
    category: "other",
    react: "🍃",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const repo = args.join(' ');
        if (!repo) {
            return reply("Please provide a GitHub repository name in the format 📌`owner/repo`.");
        }

        const apiUrl = `https://api.github.com/repos/${repo}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let repoInfo = `📁_*𝖦𝖨𝖳𝖧𝖴𝖡 𝖱𝖤𝖯𝖮𝖲𝖨𝖳𝖮𝖱𝖸 𝖨𝖭𝖥𝖮⟝⟉⟞𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖳𝖾𝖼𝗁𝗇𝗈𝗅𝗈𝗀𝗒*_📁\n\n`;
        repoInfo += `📌 *𝖱𝖤𝖯𝖮 𝖭𝖠𝖬𝖤*: ${data.name}\n`;
        repoInfo += `🔗 *𝖱𝖤𝖯𝖮 𝖴𝖱𝖫*: ${data.html_url}\n`;
        repoInfo += `📝 *𝖱𝖤𝖯𝖮 𝖣𝖤𝖲𝖢𝖱𝖨𝖯𝖳𝖨𝖮𝖬*: ${data.description}\n`;
        repoInfo += `⭐ *𝖱𝖤𝖯𝖮 𝖲𝖳𝖠𝖱𝖲*: ${data.stargazers_count}\n`;
        repoInfo += `🍴 *𝖱𝖤𝖯𝖮 𝖥𝖮𝖱𝖪𝖲*: ${data.forks_count}\n`;
        repoInfo += `\n`;
        repoInfo += `*ᴍᴠᴇʟᴀsᴇ ᴍᴅ ᴛᴇᴄʜɴᴏʟᴏɢʏ*\n`;

        await conn.sendMessage(from, { text: repoInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching repository data🤕: ${e.message}`);
    }
});

