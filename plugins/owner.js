/*
¨X¨T¨j¨T¨j¨[©¤¨X¨j¨T¨j¨[¨X¨T¨T¨j¨T¨T¨j¨T¨[¨X¨T¨j¨T¨j¨T¨T¨[
¨U¨U¨U¨U¨U¨^¨j¨a¨U¨j¨g¨U¨U¨X¨[¨U¨T¨T¨g¨j¨a¨U¨U¨U¨U¨d¨[¨[¨U
¨U¨U¨U¨U¨d¨[¨U¨X¨g¨m¨g¨^¨g¨d¨g¨d¨T¨T¨U¨m¨[¨U¨U¨U¨U¨d¨m¨a¨U
¨^¨m¨T¨m¨a¨^¨T¨a¨^¨T¨m¨T¨m¨a¨^¨m¨T¨T¨m¨T¨a¨^¨m¨T¨m¨m¨T¨T¨a
*/


const { cmd } = require('../command');

cmd({
    pattern: "owner",
    react: "?", // Reaction emoji when the command is triggered
    alias: ["mvelase"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+263711337094'; // Replace this with the actual owner number
        const ownerName = 'Khulekani Dube'; // Replace this with the owner's name
        const organization = 'Techguys'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `This is the owner's contact: ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+263711337094') + '+263711337094@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mekÂ });
Â Â Â Â }
});