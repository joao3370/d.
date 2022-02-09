const fs = require('fs');
emoji_bot = "❌"
const emojiK = "︎︎⚠︎"
const emojiKJ = "︎︎令"
const emojiKJJ = "︎︎㐱"
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber} = infos

exports.menu2 = (pushname, hr, totalchat, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalchat.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 👮🏻‍♂️⃟ きᴀᴅᴍɪɴ ᴇᴛᴄき⃟👮🏻‍♂️ 
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Banir『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Add『Numero』
▢ ⌁ ${emojiKJJ} ${p}Promover『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Rebaixar『@Tag』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ ❌️⃟ きᴀᴅᴍɪɴsᴛʀᴀᴅᴏʀ き⃟❌
▢ ╭═══⊷
▢ ⌁ ${emojiKJ} ${p}Kick『Mensagem』
▢ ⌁ ${emojiKJ} ${p}Reviver『Mensagem』
▢ ⌁ ${emojiKJ} ${p}Demote『Mensagem』
▢ ⌁ ${emojiKJ} ${p}Promote『Mensagem』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 👤️⃟ きɴᴏᴍᴇ/ᴅᴇsᴄき⃟👤
▢ ╭═══⊷
▢ ⌁ ${emojiKJ} ${p}Setppgc『Foto』
▢ ⌁ ${emojiKJ} ${p}Hidetag『Texto』
▢ ⌁ ${emojiKJ} ${p}Totag『Img/Gif』 
▢ ⌁ ${emojiKJ} ${p}Setdesk『Nome』
▢ ⌁ ${emojiKJ} ${p}Del『Msg do bot』
▢ ⌁ ${emojiKJ} ${p}Setnome『Nome』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ ❗️⃟ きᴀᴛɪᴠᴀᴄ̧ᴀ̃ᴏ ᴀɴᴛɪsき⃟❗
▢ ╭═══⊷
▢ ⌁ ${emojiKJ} ${p}Simih
▢ ⌁ ${emojiKJ} ${p}Antiloc
▢ ⌁ ${emojiKJ} ${p}Antilink
▢ ⌁ ${emojiKJ} ${p}Antifake
▢ ⌁ ${emojiKJ} ${p}Leveling
▢ ⌁ ${emojiKJ} ${p}Welcome 
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 🔥⃟ き ᴏᴜᴛʀᴏs ᴄᴍᴅs き⃟🔥
▢ ╭═══⊷
▢ ⌁ ${emojiKJ} ${p}Listadmin
▢ ⌁ ${emojiKJ} ${p}Link『Pv/Grupo』
▢ ⌁ ${emojiKJ} ${p}Grup『Abrir/Fechar』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.figurinhas = (pushname, hr, allchats, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${allchats.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🎯 ғᴏᴛᴏ/sᴛɪᴄᴋᴇʀ 🎯⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}F 『Foto/Gif』
▢ ⌁ ${emojiKJJ} ${p}Stk『Foto/Gif』
▢ ⌁ ${emojiKJJ} ${p}St 『Foto/Gif』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟☂️ sᴛɪᴄᴋᴇʀ/ᴀɴɪᴍᴀᴅᴏ ☂️⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Attp『Texto』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟📁 ᴄᴏɴᴠᴇʀᴛᴇʀ 📁⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Togif『Sticker』
▢ ⌁ ${emojiKJJ} ${p}Toimg『Sticker』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.playrs = (pushname, hr, allchats, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${allchats.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🎵 ᴅᴏᴡɴ ᴀᴜᴅɪᴏs 🎵⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Play『Nome』
▢ ⌁ ${emojiKJJ} ${p}Play1『Nome』
▢ ⌁ ${emojiKJJ} ${p}Play2『Nome』
▢ ⌁ ${emojiKJJ} ${p}Play3『Nome』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🎬 ᴅᴏᴡɴ ᴠɪᴅᴇᴏ 🎬⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Playvid『Nome』
▢ ⌁ ${emojiKJJ} ${p}Playvid1『Nome』
▢ ⌁ ${emojiKJJ} ${p}Playvid2『Nome』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🎵 ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴀᴜᴅɪᴏ 🎵⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Baixo『Audio』
▢ ⌁ ${emojiKJJ} ${p}Rapid『Audio』
▢ ⌁ ${emojiKJJ} ${p}Tomp3『Video』
▢ ⌁ ${emojiKJJ} ${p}Rapido『Audio』
▢ ⌁ ${emojiKJJ} ${p}Esquilo『Audio』
▢ ⌁ ${emojiKJJ} ${p}Gigante『Audio』
▢ ⌁ ${emojiKJJ} ${p}Devagar『Audio』
▢ ⌁ ${emojiKJJ} ${p}Sombrio『Video』
▢ ⌁ ${emojiKJJ} ${p}Estourar『Audio』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.jogos = (pushname, hr, allchats, bateria) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${allchats.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🕹️ ᴊᴏɢᴏs/ʀᴀɴᴋs 🕹️⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Slot
▢ ⌁ ${emojiKJJ} ${p}Level
▢ ⌁ ${emojiKJJ} ${p}Dado
▢ ⌁ ${emojiKJJ} ${p}Roleta
▢ ⌁ ${emojiKJJ} ${p}Tagme
▢ ⌁ ${emojiKJJ} ${p}Cassino
▢ ⌁ ${emojiKJJ} ${p}Ranklevel
▢ ⌁ ${emojiKJJ} ${p}Caracoroa
▢ ⌁ ${emojiKJJ} ${p}Resetavelha
▢ ⌁ ${emojiKJJ} ${p}Sn『Pergunta』
▢ ⌁ ${emojiKJJ} ${p}Ttt『Dificuldade』
▢ ⌁ ${emojiKJJ} ${p}Getname『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Amongus『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Ppt『Pedra/Papel』
▢ ⌁ ${emojiKJJ} ${p}Getn『Mensagem』
▢ ⌁ ${emojiKJJ} ${p}Anagrama『Ativar』
▢ ⌁ ${emojiKJJ} ${p}Jogodavelha『@Tag』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🕹️ ᴘᴏʀᴄᴇɴᴛᴀɢᴇᴍ 🕹️⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Gay
▢ ⌁ ${emojiKJJ} ${p}Pau
▢ ⌁ ${emojiKJJ} ${p}Feio
▢ ⌁ ${emojiKJJ} ${p}Lixo
▢ ⌁ ${emojiKJJ} ${p}Gado
▢ ⌁ ${emojiKJJ} ${p}Burro
▢ ⌁ ${emojiKJJ} ${p}Gordo
▢ ⌁ ${emojiKJJ} ${p}Pobre
▢ ⌁ ${emojiKJJ} ${p}Corno
▢ ⌁ ${emojiKJJ} ${p}Bonito
▢ ⌁ ${emojiKJJ} ${p}Macaco
▢ ⌁ ${emojiKJJ} ${p}Gostoso
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.animes = (pushname, hr, totalChat, bateria) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalChat.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🔞ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🔞⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Ero
▢ ⌁ ${emojiKJJ} ${p}Les
▢ ⌁ ${emojiKJJ} ${p}Solo
▢ ⌁ ${emojiKJJ} ${p}Holo
▢ ⌁ ${emojiKJJ} ${p}Feet
▢ ⌁ ${emojiKJJ} ${p}Anal
▢ ⌁ ${emojiKJJ} ${p}Eron
▢ ⌁ ${emojiKJJ} ${p}Trap
▢ ⌁ ${emojiKJJ} ${p}Erok
▢ ⌁ ${emojiKJJ} ${p}Cum
▢ ⌁ ${emojiKJJ} ${p}Feed
▢ ⌁ ${emojiKJJ} ${p}Neko
▢ ⌁ ${emojiKJJ} ${p}Lewd
▢ ⌁ ${emojiKJJ} ${p}Solog
▢ ⌁ ${emojiKJJ} ${p}Feetg
▢ ⌁ ${emojiKJJ} ${p}Spank
▢ ⌁ ${emojiKJJ} ${p}Lewdk
▢ ⌁ ${emojiKJJ} ${p}Boobs
▢ ⌁ ${emojiKJJ} ${p}Hentai
▢ ⌁ ${emojiKJJ} ${p}Eroyuri
▢ ⌁ ${emojiKJJ} ${p}Classic
▢ ⌁ ${emojiKJJ} ${p}Erofeet
▢ ⌁ ${emojiKJJ} ${p}Hentain
▢ ⌁ ${emojiKJJ} ${p}Holoero
▢ ⌁ ${emojiKJJ} ${p}Blowjob
▢ ⌁ ${emojiKJJ} ${p}Pwankg
▢ ⌁ ${emojiKJJ} ${p}Futanari
▢ ⌁ ${emojiKJJ} ${p}Femdom
▢ ⌁ ${emojiKJJ} ${p}Erokemo
▢ ⌁ ${emojiKJJ} ${p}Trapnime
▢ ⌁ ${emojiKJJ} ${p}Hololewd
▢ ⌁ ${emojiKJJ} ${p}Lewdkemo
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🍙ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🍙⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Loli
▢ ⌁ ${emojiKJJ} ${p}Shotas
▢ ⌁ ${emojiKJJ} ${p}Waifu
▢ ⌁ ${emojiKJJ} ${p}Megumin
▢ ⌁ ${emojiKJJ} ${p}Ace
▢ ⌁ ${emojiKJJ} ${p}Luffy
▢ ⌁ ${emojiKJJ} ${p}Zoro
▢ ⌁ ${emojiKJJ} ${p}Nami
▢ ⌁ ${emojiKJJ} ${p}Obito
▢ ⌁ ${emojiKJJ} ${p}Buggy
▢ ⌁ ${emojiKJJ} ${p}Carrot
▢ ⌁ ${emojiKJJ} ${p}Asuma
▢ ⌁ ${emojiKJJ} ${p}Shanks
▢ ⌁ ${emojiKJJ} ${p}Sakura
▢ ⌁ ${emojiKJJ} ${p}Hinata
▢ ⌁ ${emojiKJJ} ${p}Shikaku
▢ ⌁ ${emojiKJJ} ${p}Madara
▢ ⌁ ${emojiKJJ} ${p}Sasuke
▢ ⌁ ${emojiKJJ} ${p}Ahegao
▢ ⌁ ${emojiKJJ} ${p}Shikadai
▢ ⌁ ${emojiKJJ} ${p}Shikamaru
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.dono = (pushname, hr, total_gp7, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${total_gp7.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢👮🏻‍♂️⃟ き sᴛᴀᴛᴜs/ʙᴏᴛ き⃟👮🏻‍♂️ 
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Ping
▢ ⌁ ${emojiKJJ} ${p}Mystat
▢ ⌁ ${emojiKJJ} ${p}Bateria
▢ ⌁ ${emojiKJJ} ${p}Clearall
▢ ⌁ ${emojiKJJ} ${p}Desligar
▢ ⌁ ${emojiKJJ} ${p}Reiniciar
▢ ⌁ ${emojiKJJ} ${p}Visuchat
▢ ⌁ ${emojiKJJ} ${p}Listname
▢ ⌁ ${emojiKJJ} ${p}Bloqueados
▢ ⌁ ${emojiKJJ} ${p}Bc『Texto』
▢ ⌁ ${emojiKJJ} ${p}Bcb『Texto』
▢ ⌁ ${emojiKJJ} ${p}Addban『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Clone『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Unban『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Q 『Mensagem』
▢ ⌁ ${emojiKJJ} ${p}Bcstik『Sticker』
▢ ⌁ ${emojiKJJ} ${p}Setprefix『Prefix』
▢ ⌁ ${emojiKJJ} ${p}Addprem『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Dellprem『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Tagstick『Sticker』
▢ ⌁ ${emojiKJJ} ${p}Delpalavra『Palavra』
▢ ⌁ ${emojiKJJ} ${p}Addpalavra『Palavra』
▢ ⌁ ${emojiKJJ} ${p}Antipalavras『On/Off』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.premium = (pushname, hr, totalchat, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalchat.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟🤹🏻‍♂️ᴘʀᴇᴍɪᴜᴍ🤹🏻‍♂️⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Sticknime
▢ ⌁ ${emojiKJJ} ${p}Ddd『DDD』
▢ ⌁ ${emojiKJJ} ${p}Covidmundo
▢ ⌁ ${emojiKJJ} ${p}Letra『Musica』
▢ ⌁ ${emojiKJJ} ${p}Github『Nome』
▢ ⌁ ${emojiKJJ} ${p}Celular『Nome』
▢ ⌁ ${emojiKJJ} ${p}Covidst『Nome』
▢ ⌁ ${emojiKJJ} ${p}Rename『Sticker』
▢ ⌁ ${emojiKJJ} ${p}Wikipedia『Nome』
▢ ⌁ ${emojiKJJ} ${p}Tikstalker『Nome』
▢ ⌁ ${emojiKJJ} ${p}Buscaimg『Nome』
▢ ⌁ ${emojiKJJ} ${p}Glosearch『Nome』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 🌸️⃟ きCᴏᴍᴀɴᴅᴏs Aɴɪᴍᴇs🌸⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Anime『Nome』
▢ ⌁ ${emojiKJJ} ${p}Mangá『Anime』
▢ ⌁ ${emojiKJJ} ${p}Hentaiplay『Link』
▢ ⌁ ${emojiKJJ} ${p}Wikihentai『Nome』
▢ ⌁ ${emojiKJJ} ${p}Wikianime『Nome』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 🔞️⃟ きCᴏᴍᴀɴᴅᴏs Pᴏʀɴ# 🔞⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Xvideos『Nome』
▢ ⌁ ${emojiKJJ} ${p}Xvideoplay『Link』
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 🍂️⃟ きCᴏᴍᴀɴᴅᴏs Aᴘᴋs 🍂⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Mediafire『Link』
▢ ⌁ ${emojiKJJ} ${p}Uptodown『Nome』
▢ ⌁ ${emojiKJJ} ${p}Playstore1『Nome』
▢ ⌁ ${emojiKJJ} ${p}Happymod『Nome』
▢ ⌁ ${emojiKJJ} ${p}Storesearch『Nome』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.bankloja = (pushname, hr, totalChat, bateria, ll) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalChat.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟💰ᴍᴇɴᴜ/ᴄᴀsʜ💰⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Dinheiro
▢ ⌁ ${emojiKJJ} ${p}Rankmoney
▢ ⌁ ${emojiKJJ} ${p}Vermoney『@Tag』
▢ ⌁ ${emojiKJJ} ${p}Buypack
▢ ⌁ ${emojiKJJ} ${p}Buyprem 
▢ ⌁ ${emojiKJJ} ${p}Apostar 2500
▢ ⌁ ${emojiKJJ} ${p}Transferir @/2500
▢ ⌁ ${emojiKJJ} ${p}Darmoney @ 2500
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.logosMarker = (pushname, hr, totalChat, bateria) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalChat.length}
▢ ⌁ ${emojiK} Bateria: ${bateria}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ き⃟⛓️ʟᴏɢᴏs/ᴍᴀʀᴋᴇʀ⛓️⃟ き
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} ${p}Lava『Texto』
▢ ⌁ ${emojiKJJ} ${p}Berry『Texto』
▢ ⌁ ${emojiKJJ} ${p}Toxic『Texto』
▢ ⌁ ${emojiKJJ} ${p}Snow『Texto』
▢ ⌁ ${emojiKJJ} ${p}Blood『Texto』
▢ ⌁ ${emojiKJJ} ${p}3dbox『Texto』
▢ ⌁ ${emojiKJJ} ${p}Matrix『Texto』
▢ ⌁ ${emojiKJJ} ${p}3dglue『Texto』
▢ ⌁ ${emojiKJJ} ${p}Metallic『Texto』
▢ ⌁ ${emojiKJJ} ${p}Thunder『Texto』
▢ ⌁ ${emojiKJJ} ${p}Artpaper『Texto』
▢ ⌁ ${emojiKJJ} ${p}Thunder2『Texto』
▢ ⌁ ${emojiKJJ} ${p}Neonlight『Texto』
▢ ⌁ ${emojiKJJ} ${p}Neonlight『Texto』
▢ ⌁ ${emojiKJJ} ${p}1917style『Texto』
▢ ⌁ ${emojiKJJ} ${p}Chocolate『Texto』
▢ ⌁ ${emojiKJJ} ${p}Black-pink『Texto』
▢ ⌁ ${emojiKJJ} ${p}Christmas『Texto』
▢ ⌁ ${emojiKJJ} ${p}Embossed『Texto』
▢ ⌁ ${emojiKJJ} ${p}Luxurygold『Texto』
▢ ⌁ ${emojiKJJ} ${p}Drop-water『Texto』
▢ ⌁ ${emojiKJJ} ${p}Magmahot『Texto』
▢ ⌁ ${emojiKJJ} ${p}3d-gradient『Texto』
▢ ⌁ ${emojiKJJ} ${p}Harrypotter『Texto』
▢ ⌁ ${emojiKJJ} ${p}Sandwriting『Texto』
▢ ⌁ ${emojiKJJ} ${p}Greenhorror『Texto』
▢ ⌁ ${emojiKJJ} ${p}Horrorblood『Texto』
▢ ⌁ ${emojiKJJ} ${p}Bearmascot『Texto』
▢ ⌁ ${emojiKJJ} ${p}Transformer『Texto』
▢ ⌁ ${emojiKJJ} ${p}Sandsummer『Texto』
▢ ⌁ ${emojiKJJ} ${p}Realisticcloud『Texto』
▢ ⌁ ${emojiKJJ} ${p}Xmascards3d『Texto』
▢ ⌁ ${emojiKJJ} ${p}Futuristicneon『Texto』
▢ ⌁ ${emojiKJJ} ${p}Sciencefiction『Texto』
▢ ⌁ ${emojiKJJ} ${p}Natural-leaves『Texto』
▢ ⌁ ${emojiKJJ} ${p}Summerysand『Texto』
▢ ⌁ ${emojiKJJ} ${p}Sandengraved『Texto』
▢ ⌁ ${emojiKJJ} ${p}Metaldarkgold『Texto』
▢ ⌁ ${emojiKJJ} ${p}Captainamerica『Texto』
▢ ⌁ ${emojiKJJ} ${p}Neondevilwings『Texto』
▢ ⌁ ${emojiKJJ} ${p}Impressiveglitch『Texto』
▢ ⌁ ${emojiKJJ} ${p}Wonderfulgraffiti『Texto』
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.infoPerfil = (pushname, isXpLevel, isXp, requirXp, sender, perfilMoney, isHours, patt) => {
return `
╭━━ ⪩
▢ ⌁ 🐳 *_Nome: ${pushname ? pushname : "Sexo"}_*
▢ ⌁ 📥 *_Level: ${isXpLevel ? isXpLevel : "0"}_*
▢ ⌁ 💰 *_Dinheiro: ${perfilMoney ? perfilMoney : "0"}_*
▢ ⌁ ⏳ *_Xp: ${isXp ? isXp : "0"}/${requirXp ? requirXp : "0"}_*
▢ ⌁ 🐳 *_Patente: ${patt}_*
▢ ⌁ 🎯 *_Link: wa.me/${sender.split("@")[0]}_*
▢ ⌁ 📈 *_Registrado a: ${isHours ? isHours : "erro"}_*
╰━━━ ⪨`
}

exports.registroByTobiHehe = (serialUser, time, pushname, sender) => {
return `
╭━ ⪩
▢ ⌁ 📥 ⁑ Sᴇʀɪᴀʟ: ${serialUser}
▢ ⌁ ⏳ ⁑ Hᴏʀᴀʀɪᴏ: ${time}
▢ ⌁ 🐳 ⁑ Nᴏᴍᴇ: ${pushname}
▢ ⌁ 🎯 ⁑ Lɪɴᴋ: wa.me/${sender.split('@')[0]}
╰━━━ ⪨`
}

exports.dinheiroConta = (checkDinheiro) => {
return`
╭━━ ⪩
▢ き⃟💰_Money_💰⃟ き
▢ ╭═══⊷
▢ ⌁ 💰 *Saldo*: *${checkDinheiro ? checkDinheiro : "0"} R$*
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.checarDinheiro = (verMoneyMencionador) => {
return`
╭━━ ⪩
▢ き⃟💰_Money_💰⃟ き
▢ ╭═══⊷
▢ ⌁ 💰 *Saldo*: R$ *${verMoneyMencionador ? verMoneyMencionador : "0"}*
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.bateria = (baterai, porcentagem) => {
return `
╭ ⋟ き⃟🔋ʙᴀᴛᴇʀɪᴀ🔋⃟ き
 • ʙᴀᴛᴇʀɪᴀ: ${baterai}%
 • ${porcentagem}
└━━━─「🔋」─━━━━`
}

exports.speed = (latensi) => {
return `_*🏓 Respondi em: ${latensi.toFixed(4)} Segundos*_\n_*🚀 - Speed ​​and time online*_`
}

exports.tterro = () => {
return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.ban = (SeuNome, pushname) => {
return`*_❌Você está banido de usar os comandos ❌_*\n*_🫂 ${pushname} banido pelo : ${SeuNome}_*`
}

exports.ownerB = () => {
return`*_${emoji_bot} Comando só pode ser usado pelo meu dono ${emoji_bot}_*`
}

exports.group = () => {
return`*_${emoji_bot} O comando só pode ser usado em grupos ${emoji_bot}_*`
}

exports.Private = () => {
return`*_${emoji_bot} Aguarde o envio no seu privado ${emoji_bot}_*`
}

exports.admin = () => {
return `*_${emoji_bot} O comando só pode ser usado por administradores do grupo ${emoji_bot}_*`
}

exports.Badmin = () => {
return`*_${emoji_bot} O comando só pode ser usado quando o bot é um administrador do grupo ${emoji_bot}_*`
}

exports.playErro = (p) => {
return `*_🗣O Comando está com erro! ❌_*\n*_🗣 Tente o ${p}play1 Para o reenvio da música!✔️_*`
}

exports.playVideoErro = (p) => {
return `*_🗣O Comando está com erro! ❌_*\n🗣 *_Tente o ${p}playvid Para o reenvio do video!✔️_*`
}

exports.googleErroFoto = () => {
return `*_🗣O Comando está com erro! ❌_*\n🗣 *_Tente repetir para o reenvio da foto!._* ✔️`
}

exports.erro = () => {
return`❌ocorreu um erro❌\n\nTente novamente.`
}

exports.erroTitle = () => {
return`❌ ocorreu um erro ❌\n\nErro: Pesquisa não encontrada!`
}

exports.erroLink = () => {
return`❌ ocorreu um erro ❌\n\nErro: Link inválido!`
}

exports.errMenu = () => {
return`❌ Um erro Encontrado ❌\n\nErr: Menu deu pau!`
}

exports.erroEncontrado = () => {
return`_*❌ Erro encontrado! ❌*_️`
}

exports.erroTag = () => {
return`_*🗣 Só é possível uma marcação!*_️`
}

exports.erroButtons = () => {
return `Pesquisa não encontrada, Tente outra!`
}

exports.antiFlodkkj = (sender) => {
return `*_Sem flood @${sender.split('@')[0]}..._*\n\n*_Aguarde 3 segundos antes de usar outro comando✅_*`
}

exports.erroFigurinhas = () => {
return `_*❌ Erro em converter para figurinha! ❌*_\n_*❤️Tente de novo mais tarde... Por favor! ❤️*_`
}

exports.sexo = () => {
return "Praticamente aqui não tem nada, só serve para enganar trouxas 🤭"
}

exports.erroPrem = () => {
return `❌ Erro! Impossível comprar 2 premium! ❌`
}

exports.randomSexo = () => {
titleBot = ["Arigato", "Onichan", "Sanpai ❤️", "Niisan"] 
name = titleBot[Math.floor(Math.random() * titleBot.length)] 
return name
}

exports.nameByTobi = (me) => {
return `_*${me.name}™*_`
}

exports.modeOnn = (comando) => {
return `*_${emojiK} Comando: ${comando}_*\n*_${emojiK} Situação: ${comando} Está desativado_*`
}

exports.modeOff = (comando) => {
return `*_${emojiK} Comando: ${comando}_*\n*_${emojiK} Situação: ${comando} Está ligado_*`
}

exports.okLolizitaBot = (me) => {
return `Ok ${me.name}™`
}

exports.lolizitaInfo = (totalChat, charge, baterai, latensi, horaOn, os) => {
return `_*▢ Total Chats : ${totalChat.length}*_\n_*▢ Carregando : ${charge}*_\n_*▢ Bateria : ${baterai}*_\n_*▢ Velocidade : ${latensi.toFixed(4)} ms*_\n_*▢ Tempo de atividade : ${horaOn(os.uptime())}*_`
}

exports.banido = () => {
return `${emoji_bot} *_Aguarde! Removendo Macaco_* ${emoji_bot}`
}

exports.travaDetect = (sexo) => {
return `_*${emojiK} ${sexo} detectada! Banindo usuário...*_ ❌`
}

//photoFound
exports.photoFound = (comando) => {
return `_*${emojiK} Foto de uma ${comando} encontrada!*_`
}

exports.apiWame = (sender) => {
return `*_Link api: wa.me/${sender.split('@')[0]}_*\n\n*_Link com texto: https://wa.me/${sender.split('@')[0]}?text=oi_*`
}

exports.photoFoundMegumin = (comando) => {
return `_*${emojiK} Foto da ${comando} encontrada!*_`
}

//anotherPicture
exports.anotherPicture = () => {
return "🍻 ＰＲＯＸＩＭＡ🌙"
}

exports.buffer = () => {
return buffer;
}

exports.nameOfTheBor = () => {
return "⚠︎⃟ꦿ𝐿𝛩𝐿𝐼𝑍𝐼𝑇𝛥-𝐵❍亇シ⃟⃛ ➮";
}