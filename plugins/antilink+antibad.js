/*
╔═╦═╦╗─╔╦═╦╗╔══╦══╦═╗╔═╦═╦══╗
║║║║║╚╦╝║╦╣║║╔╗║══╣╦╝║║║║╠╗╗║
║║║║╠╗║╔╣╩╣╚╣╠╣╠══║╩╗║║║║╠╩╝║
╚╩═╩╝╚═╝╚═╩═╩╝╚╩══╩═╝╚╩═╩╩══╝
*/

const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../config')
// List of bad words to check against
 // Replace with actual words
cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["wtf", "mia","පොන්නයා","හැමිනෙනවා","කැරියා", "හුත්තා", "හුත්තා","පකයා","fuck","sex","huththa","pakaya","ponnaya","hutto","kariya","pakaya","hukapan","hukanna","hutto","xvdl","hutto","Hukapamm","lol"]
        if (!isGroup || isAdmins || !isBotAdmins) return; 
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
          await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          await conn.sendMessage(from, { text: "⚠️BAD WORDS NOT ALLOWED⚠️ " }, { quoted: mek });
          await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
})
const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            
    /https?:\/\/ngl\/\S+/gi,                             
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,            
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,      
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi,
               
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group bitch.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });

             // Remove the user from the group
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
    }
});
