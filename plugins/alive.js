/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/

const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // bot uptime
const ALIVE_IMG = "https://files.catbox.moe/sg2hra.png"; // paste your alive message url

cmd({
    pattern: "alive",
    desc: "Check if the bot is active.",
    category: "info",
    react: "💡",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User"; // Nom de l'utilisateur ou valeur par défaut
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `
🌟 *𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖲𝗍𝖺𝗍𝗎𝗌* 🌟

*╭───━━━━────━━━━┉⚆*
*┃🫵🏽 𝖧𝗂${pushname}*
*┃🕒 𝖳𝗂𝗆𝖾: ${currentTime}*
*┃📅 𝖣𝖺𝗍𝖾: ${currentDate}*
*┃⏳ 𝖴𝗉𝗍𝗂𝗆𝖾: ${runtimeHours} hours, ${runtimeMinutes} minutes, ${runtimeSeconds} seconds*
*╰───━━━━────━━━━┉⚆*

🤖 *𝖲𝖳𝖠𝖳𝖴𝖲*: *𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖨𝗌 𝖠𝗅𝗂𝗏𝖾!*

🎉 *𝖾𝗇𝗃𝗈𝗒 𝗍𝗁𝖾 𝗌𝖾𝗋𝗏𝗂𝖼𝖾!*
        `.trim();

        // Vérifier si l'image est définie
        if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
            throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
        }

        // Envoyer le message avec image et légende
        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG }, // Assurez-vous que l'URL est valide
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363334594240793@newsletter',
                    newsletterName: '𝖬𝗏𝖾𝗅𝖺𝗌𝖾 𝖬𝖣 𝖨𝗌 𝖠𝗅𝗂𝗏𝖾',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        // Répondre avec des détails de l'erreur
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});