const emojiK = "︎︎🌻"
const emojiKJ = "︎︎🔮"
const emojiKJJ = "︎︎❄"
const help = (ll, p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, porcentagem, totalchat, me, reqcmd, _registered) => {
return `
╭━━ ⪩
▢  [×] ɪɴғᴏ ᴅᴏ ʙᴏᴛ [×]
▢ ╭═══⊷
▢ ⌁ ${emojiK} Prefixo:『${p}』
▢ ⌁ ${emojiK} Hora: ${hr}
▢ ⌁ ${emojiK} Total chat: ${totalchat.length}
▢ ⌁ ${emojiK} Registrados: ${_registered.length}
▢ ⌁ ${emojiK} Nome: ${me.name}
▢ ⌁ ${emojiK} Comandos usados: ${reqcmd}
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢  [×] ɪɴғᴏ ᴘᴇʀғɪʟ [×]
▢ ╭═══⊷
▢ ⌁ ${emojiKJJ} Nome: ${pushname}
▢ ⌁ ${emojiKJJ} Dinheiro: ${checATM ? checATM : "0"}
▢ ⌁ ${emojiKJJ} Level: ${useLevel ? useLevel : "0"}
▢ ⌁ ${emojiKJJ} Xp: ${useXp ? useXp : "0"}/${requireXp ? requireXp : "0"}
▢ ⌁ ${emojiKJJ} Patente: ${patt ? patt : "Membro"} 
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢ 👤ɴᴏᴠᴏs ᴍᴇɴᴜ👤
▢ ╭═══⊷
▢ ⌁ ${emojiKJ} ${p}Logos
▢ ⌁ ${emojiKJ} ${p}Playrs
▢ ⌁ ${emojiKJ} ${p}Grupo
▢ ⌁ ${emojiKJ} ${p}Jogos
▢ ⌁ ${emojiKJ} ${p}Criador
▢ ⌁ ${emojiKJ} ${p}Animes
▢ ⌁ ${emojiKJ} ${p}Bankloja
▢ ⌁ ${emojiKJ} ${p}Premium
▢ ⌁ ${emojiKJ} ${p}Figurinhas
▢ ╰═══⊷
╰━━━ ⪨`
}
exports.help = help