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

        let repoInfo = `📁_*𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗚𝗶𝘁𝗵𝘂𝗯 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻*_📁\n\n`;
        repoInfo += `🔖⛱️ *𝗕𝗢𝗧𝗡𝗔𝗠𝗘*: ${data.name}\n`;
        repoInfo += `🔖⛱️ *𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗨𝗥𝗟*: ${data.html_url}\n`;
        repoInfo += `🔖⛱️ *𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡*: ${data.description}\n`;
        repoInfo += `🔖⛱️ *𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗦𝗧𝗔𝗥𝗦*: ${data.stargazers_count}\n`;
        repoInfo += `🔖⛱️ *𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗙𝗢𝗥𝗞𝗦*: ${data.forks_count}\n`;
        repoInfo += `\n`;
        repoInfo += `*𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻*\n`;

        await conn.sendMessage(from, { text: repoInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching repository data🤕: ${e.message}`);
    }
});

