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
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply(" 𝗉𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝖼𝗂𝗍𝗒 𝗇𝖺𝗆𝖾. Usage: .weather [city name]");
        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = `
🌍 *𝐖𝐄𝐀𝐓𝐇𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐅𝐎𝐑 𝐔 ${data.name}, ${data.sys.country}* 🌍
📟 *𝐓𝐄𝐌𝐏𝐄𝐑𝐀𝐓𝐔𝐑𝐄*: ${data.main.temp}°C
📟 *𝐅𝐄𝐄𝐋𝐒 𝐋𝐈𝐊𝐄*: ${data.main.feels_like}°C
📟 *𝐌𝐈𝐍 𝐓𝐄𝐌𝐏*: ${data.main.temp_min}°C
📟 *𝐌𝐀𝐗 𝐓𝐄𝐌𝐏*: ${data.main.temp_max}°C
📟 *𝐇𝐔𝐌𝐈𝐃𝐈𝐓𝐘*: ${data.main.humidity}%
📟 *𝐖𝐄𝐀𝐓𝐇𝐄𝐑*: ${data.weather[0].main}
📟 *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍*: ${data.weather[0].description}
📟 *𝐖𝐈𝐍𝐃 𝐒𝐏𝐄𝐄𝐃*: ${data.wind.speed} m/s
📟 *𝐏𝐑𝐄𝐒𝐒𝐔𝐑𝐄*: ${data.main.pressure} hPa

*𝗠𝘃𝗲𝗹𝗮𝘀𝗲 𝗠𝗗 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆*
`;
        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});
