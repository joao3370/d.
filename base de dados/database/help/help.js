const emojiK = "ī¸ī¸đģ"
const emojiKJ = "ī¸ī¸đŽ"
const emojiKJJ = "ī¸ī¸â"
const help = (ll, p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, porcentagem, totalchat, me, reqcmd, _registered) => {
return `
â­ââ âĒŠ
âĸ  [Ã] ÉĒÉ´Ōá´ á´á´ Ęá´á´ [Ã]
âĸ â­ââââˇ
âĸ â ${emojiK} Prefixo:ã${p}ã
âĸ â ${emojiK} Hora: ${hr}
âĸ â ${emojiK} Total chat: ${totalchat.length}
âĸ â ${emojiK} Registrados: ${_registered.length}
âĸ â ${emojiK} Nome: ${me.name}
âĸ â ${emojiK} Comandos usados: ${reqcmd}
âĸ â°ââââˇ
â°âââ âĒ¨
â­ââ âĒŠ
âĸ  [Ã] ÉĒÉ´Ōá´ á´á´ĘŌÉĒĘ [Ã]
âĸ â­ââââˇ
âĸ â ${emojiKJJ} Nome: ${pushname}
âĸ â ${emojiKJJ} Dinheiro: ${checATM ? checATM : "0"}
âĸ â ${emojiKJJ} Level: ${useLevel ? useLevel : "0"}
âĸ â ${emojiKJJ} Xp: ${useXp ? useXp : "0"}/${requireXp ? requireXp : "0"}
âĸ â ${emojiKJJ} Patente: ${patt ? patt : "Membro"} 
âĸ â°ââââˇ
â°âââ âĒ¨
â­ââ âĒŠ
âĸ đ¤É´á´á´ á´s á´á´É´á´đ¤
âĸ â­ââââˇ
âĸ â ${emojiKJ} ${p}Logos
âĸ â ${emojiKJ} ${p}Playrs
âĸ â ${emojiKJ} ${p}Grupo
âĸ â ${emojiKJ} ${p}Jogos
âĸ â ${emojiKJ} ${p}Criador
âĸ â ${emojiKJ} ${p}Animes
âĸ â ${emojiKJ} ${p}Bankloja
âĸ â ${emojiKJ} ${p}Premium
âĸ â ${emojiKJ} ${p}Figurinhas
âĸ â°ââââˇ
â°âââ âĒ¨`
}
exports.help = help