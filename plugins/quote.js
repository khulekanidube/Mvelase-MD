/*
�X�T�j�T�j�[���X�j�T�j�[�X�T�T�j�T�T�j�T�[�X�T�j�T�j�T�T�[
�U�U�U�U�U�^�j�a�U�j�g�U�U�X�[�U�T�T�g�j�a�U�U�U�U�d�[�[�U
�U�U�U�U�d�[�U�X�g�m�g�^�g�d�g�d�T�T�U�m�[�U�U�U�U�d�m�a�U
�^�m�T�m�a�^�T�a�^�T�m�T�m�a�^�m�T�T�m�T�a�^�m�T�m�m�T�T�a
*/



const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        const quote = response.data;
        const message = `
💬 "${quote.content}"
- ${quote.author}
*𝗤𝗨𝗢𝗧𝗘𝗦 𝗕𝗬 𝗠𝗩𝗘𝗟𝗔𝗦𝗘 𝗠𝗗*
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕ�? тяу αgαιη ℓαтє�?.");
    }
});