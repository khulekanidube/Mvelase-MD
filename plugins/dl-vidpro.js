
const axios = require('axios');
const yts = require('yt-search');
const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: 'vidpro',
  desc: 'Search and download YouTube videos',
  category: 'media',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply(`*Example*: .vidpro Faded by Alan Walker`);

    const searchResults = await yts(q);
    const video = searchResults.all[0];

    if (!video) return reply(`*No video found for ${q}*`);

    const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4`;
    const apiResponse = await axios.get(apiUrl, { params: { url: video.url } });

    if (apiResponse.data.success) {
      const { title, download_url } = apiResponse.data.result;

      await reply(`*Video found!* \n\n*𝐓𝐈𝐓𝐋𝐄:* ${title}\n*𝐒𝐈𝐙𝐄:* ${apiResponse.data.result.filesize}\n*𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍:* ${video.timestamp}\n\n*𝐷𝑜𝑤𝑛𝑙𝑜𝑎𝑑𝑖𝑛𝑔...*`);

      await conn.sendMessage(m.chat, { video: { url: download_url }, mimetype: 'video/mp4', caption: `📹 *${title}*` }, { quoted: m });
    } else {
      reply(`*Error downloading video! Please try again later❗.*`);
    }
  } catch (error) {
    console.error('Error during video command:', error);
    reply(`*An error occurred while processing your request❗.*`);
  }
});
