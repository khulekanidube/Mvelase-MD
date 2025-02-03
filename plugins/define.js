


const axios = require('axios');
                         const {cmd , commands} = require('../command');

                         cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "Auther",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
📚 *𝐖𝐎𝐑𝐃*: ${definitionData.word}
🔍 *𝐃𝐄𝐅𝐈𝐍𝐀𝐓𝐈𝐎𝐍*: ${definition}
📝 *𝐄𝐗𝐀𝐌𝐏𝐋𝐄*: ${example}
🔗 *𝐒𝐘𝐍𝐎𝐍𝐘𝐌𝐒*: ${synonyms}

> *© 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐕𝐄𝐋𝐀𝐒𝐄 𝐌𝐃*`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("❗ An error occurred while fetching the definition. Please try again later❓️.");
                             }
                         });
