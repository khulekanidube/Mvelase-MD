/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/


const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "githubstalk",
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "other",
    react: "📚",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const username = args[0];
        if (!username) {
            return reply("Please provide a GitHub username.");
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = `     👨‍💻*𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗 𝗚𝗜𝗧𝗦𝗧𝗔𝗟𝗞*👨‍💻
        
👤 *𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲*: ${data.name || data.login}

🔗 *𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗚𝗶𝘁𝗵𝘂𝗯 𝘂𝗿𝗟*:(${data.html_url})

📝 *𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗕𝗶𝗼*: ${data.bio || 'Not available'}

🏙️ *𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻*: ${data.location || 'Unknown'}

📊 *𝗣𝘂𝗯𝗹𝗶𝗰 𝗥𝗲𝗽𝗼*: ${data.public_repos}

👥 *𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗙𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀*: ${data.followers} | Following: ${data.following}

📅 *𝗗𝗮𝘁𝗲 𝗖𝗿𝗲𝗮𝘁𝗲𝗱*: ${new Date(data.created_at).toDateString()}

🔭 *𝗣𝘂𝗯𝗹𝗶𝗰 𝗚𝗶𝘀𝘁𝘀*: ${data.public_gists}

*🚀𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿/𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆🚀*
`;

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: userInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching data🤕: ${e.response ? e.response.data.message : e.message}`);
    }
});
