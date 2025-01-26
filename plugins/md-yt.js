const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "playt",
    desc: "download songs",
    category: "download",
    react: "🎵",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Enter Link or Query 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `
 *𝐌𝐕𝐄𝐋𝐀𝐒𝐄 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*

➥ *𝐓𝐈𝐓𝐋𝐄:* ${data.title} 

➥ *𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍:* ${data.timestamp} 

➥ *𝐕𝐈𝐄𝐖𝐒:* ${data.views} 

➥ *𝐔𝐏𝐋𝐎𝐀𝐃 𝐃𝐀𝐓𝐄:* ${data.ago} 

➥ *𝐘𝐓 𝐋𝐈𝐍𝐊:* ${data.url} 



> © 𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐌𝐃 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐌𝐃 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "videot",
    desc: "download video",
    category: "download",
    react: "🎥",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please Enter Link or Query 🔎...*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `
 *𝐌𝐕𝐄𝐋𝐀𝐒𝐄 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*

➥ *𝐓𝐈𝐓𝐋𝐄:* ${data.title} 

➥ *𝐃𝐔𝐑𝐀𝐓𝐈𝐎𝐍:* ${data.timestamp} 

➥ *𝐕𝐈𝐄𝐖𝐒:* ${data.views} 

➥ *𝐔𝐏𝐋𝐎𝐀𝐃 𝐃𝐀𝐓𝐄:* ${data.ago} 

➥ *𝐘𝐓 𝐋𝐈𝐍𝐊:* ${data.url} 



> © 𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐌𝐃 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"©𝐌𝐯𝐞𝐥𝐚𝐬𝐞 𝐌𝐃 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
