/*
------------------------------ AVISO  ------------------------------

Reprodução, edição e outros estão autorizados MAS SEM REMOVER MEUS CRÉDITOS.
Caso remova, resulta na quebra da licença do mesmo, o que é um crime federal.
Plagiar meus comandos não te torna coder, vá estudar, não seja um ladrão miserável.
Levei meses nesse projeto e não paro de me empenhar em deixar todos felizes.
Obrigado a todos que me apoiam, que não roubam isso, que pegam e põem os créditos e... 

(Liberdade N° 0)
A liberdade de executar o programa 
para qualquer propósito.

(Liberdade N° 1)
A liberdade de estudar como o 
programa funciona e adaptá-lo
às suas necessidades.

(Liberdade N° 2)
A liberdade de redistribuir cópias 
de modo que voê possa ajudar
ao seu próximo.

(Liberdade N° 3)
A liberdade de aperfeiçoar o
programa é liberar os seus 
aperfeiçoamentos, de modo que
toda a comunidade se benefecie
deles.

//SE REPORTA ESSE VÍDEO E BOT SEM PERMISSÃO
//EU TOBI VOU ATRAS DE VC, E BANIR SEU NÚMERO DO WHATS
//CUIDADO PARCEIRO!

* ------------------------------  Amo Vc  ------------------------------ */

/********** MÓDULOS NPM **********/
const fs = require('fs');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const request = require('request')
const fetc = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const http = require('http');
const util = require('util');
const yts = require('yt-search')
const fetch = require('node-fetch')
const encodeUrl = require('encodeurl')
const googleImage = require('g-i-s')
const os = require('os');
const ggs = require('google-it')
const hx = require("hxz-api");
const thiccysapi = require('textmaker-thiccy');
const translate = require('@vitalets/google-translate-api')

/********** ARQUIVOS **********/
const Exif = require('./base de dados/data/exif');
const exif = new Exif();
const { help } = require('./base de dados/database/help/help')
const { linguagem } = require('./base de dados/datauser/mess')
const { lirikLagu } = require('./base de dados/lib/lirik.js')
const {convertSticker} = require("./base de dados/lib/swm.js") 
const { mediafireDl } = require('./base de dados/lib/mediafire.js')
const {dafontDown,dafontSearch } = require('./base de dados/lib/dafont')
const { setGame, validmove } = require('./base de dados/lib/tictactoeByTobj');
const { upload } = require("./base de dados/lib/upload")
const { mess } = require('./base de dados/datauser/mess')

/********** CONFIGURAÇÕES **********/
const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber} = infos
ll = "\`\`\`"

/********** VCARD DO DONO **********/
const vcard = `BEGIN:VCARD\n`
+ `VERSION:3.0\n`
+ `FN:Tobi\n` //Troque "Tobi" Pelo seu nome ( Evite erros )
+ `ORG:Lolizita-BOT;\n` //Troque "Lolizita-BOT" Pelo nome do bot ( Evite erros )
+ `TEL;type=CELL;type=VOICE;waid=559481417512:+55 94 8141-7512\n` 
+ `END:VCARD`

/********** CONST TIC-TAC-TOE **********/
const tictactoe = JSON.parse(fs.readFileSync('./base de dados/ttt/TTTconfig/tictcotacto.json'));
const { ttthelp } = require('./base de dados/ttt/TTTconfig/ttthelp');
const { tttme } = require('./base de dados/ttt/TTTconfig/tttme');
var tttset = require('./base de dados/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/ttt/TTTconfig/tttframe.json');

/********** WHATSAPP CONEXÃO **********/
const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, GroupSettingChange, MessageOptions, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, waChatKey, mentionedJid, processTime, ChatModification } = require('@adiwajshing/baileys');
const simple = require('./base de dados/lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)

/********** CORES **********/
const { color, bgcolor } = require('./base de dados/lib/color');

/********** ANTI FLOD **********/
const { isFiltered, addFilter } = require('./base de dados/lib/antispam')

/********** LIMIT TTT **********/
const { addLimit, getLimit } = require('./base de dados/lib/limit.js')

/********** FUCTION PLAY **********/
const { y2mateA, y2mateV } = require('./base de dados/lib/y2mate.js')

/********** CONSTS **********/
const { erroCmd, erroOwner, ts, semPremium } = require('./base de dados/lib/bot/arquivos/respon');

/********** FUNÇÕES **********/
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, start, info, success, close, log } = require('./base de dados/lib/functions');

/********** FUNÇÕES **********/
const { webp2gifFile } = require('./base de dados/lib/function');

/********** FUCTION LEVEL **********/
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./base de dados/lib/leveling.js') 

/********** FUCTION TTT **********/
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/lib/tictactoe.js')

/********** FUCTION REGISTRO **********/
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./base de dados/lib/register.js')

/********** DINDINKK **********/
const { uang } = require('./base de dados/lib/uang');

/********** ALGUMAS VARIÁVEL **********/
let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel

/********** FUCTION DINHEIRO **********/
const addATM = (sender, pushname) => {
const obj = {id: sender, nome: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}

/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].nome
}
}

/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}
   
/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {  
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/datauser/uang.json', JSON.stringify(uang))
}
}

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="??"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="??") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}
/********** CONEXÃO DO QR CODE **********/
async function starts() {
const tobi = new WAConnection()
tobi.logger.level = 'warn'
tobi.version = [2, 2147, 14]
console.log(banner.string)
console.log(banner2.string)
tobi.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
})
fs.existsSync('./qr.json') && tobi.loadAuthInfo('./qr.json')
tobi.on('connecting', () => {
start('2', ' ')
})
tobi.on('open', () => {
tobi.updateProfileName(name)
success('2',"Lolizita-BOT Conectada")
})

await tobi.connect({ timeoutMs: 2400 * 1000 });
fs.writeFileSync('./qr.json',JSON.stringify(tobi.base64EncodedAuthInfo(), null, "\t"));

/********** WELCOME (BEM VINDO) **********/
var ase = new Date();
var tempoByTobi = ase.getHours();
switch(tempoByTobi){
case 0: tempoByTobi = `Boa noite`; break;
case 1: tempoByTobi = `Boa noite`; break;
case 2: tempoByTobi = `Boa noite`; break;
case 3: tempoByTobi = `Bom Dia`; break;
case 4: tempoByTobi = `Bom Dia`; break;
case 5: tempoByTobi = `Bom Dia`; break;
case 6: tempoByTobi = `Bom Dia`; break;
case 7: tempoByTobi = `Bom Dia`; break;
case 8: tempoByTobi = `Bom Dia`; break;
case 9: tempoByTobi = `Bom Dia`; break;
case 10: tempoByTobi = `Bom Dia`; break;
case 11: tempoByTobi = `Boa tarde`; break;
case 12: tempoByTobi = `Boa tarde`; break;
case 13: tempoByTobi = `Boa tarde`; break;
case 14: tempoByTobi = `Boa tarde`; break;
case 15: tempoByTobi = `Boa tarde`; break;
case 16: tempoByTobi = `Boa tarde`; break;
case 17: tempoByTobi = `Boa tarde`; break;
case 18: tempoByTobi = `Boa noite`; break;
case 19: tempoByTobi = `Boa noite`; break;
case 20: tempoByTobi = `Boa noite`; break;
case 21: tempoByTobi = `Boa noite`; break;
case 22: tempoByTobi = `Boa noite`; break;
case 23: tempoByTobi = `Boa noite`; break;
}
var tempoByTobi = '' + tempoByTobi;

//WELCOME COM BOTÃO CRIPTOGRAFADO
function _0x7926(){const _0x5d3b80=['text','groupRemove','Saiu\x20🤨','announce','mememteeeekkeke','getProfilePicture','Números\x20fake\x20não\x20são\x20permitidos\x20nesse\x20grupo️️','3895422tOMpiR','⚠️\x20*MEMBRO\x20PROMOVIDO*\x20🖐️🤨\x0a\x0a*Novo\x20Admin:*\x20@','Opae\x20boy,\x20de\x20boa?\x20._.','sendMessage','participants','audio','111XpbxKT','&pp=','length','split','group-participants-update','O\x20integrante\x20@','0@s.whatsapp.net','.png','🦋\x20DETECTE\x20PROMOTE\x20🌙',',\x20@','594471sJvqGu','image','buttonsMessage','ephemeralMessage','log','jid','「\x20*❗GRUPO\x20ABERTO❗*\x20」','guei','「\x20*[❗]\x20GRUPO\x20ABERTO*\x20」\x0a\x0a_O\x20grupo\x20foi\x20aberto\x20pelo\x20administrador_\x0a_Agora\x20todos\x20os\x20membros\x20podem\x20enviar\x20mensagens_','&pesan=','https://s19.aconvert.com/convert/p3r68-cdx67/pe6d0-z2eul.mp3','add','remove','action','red','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','PHOTO','Ξ\x20Registrar','Lolizita','random','readFileSync','23098SvfSIQ','floor','2693196VcOkiL','./base\x20de\x20dados/lib/bot/fotos/animeByTobi','message','subject','demote','8466029ucHyIu','9PTWlkp','audio/mp4','!\x20@','groupMetadata','@c.us','\x20saiu\x20do\x20grupo...\x20bye\x20bye👋','「\x20*[❗]\x20DESCRIÇÃO\x20DO\x20GRUPO\x20ALTERADA*\x20」\x0a\x0aA\x20descrição\x20do\x20grupo\x20foi\x20alterada\x20pelo\x20administrador\x20wa.me/','./base\x20de\x20dados/database/audios/newMember.mp3','./base\x20de\x20dados/database/figurinhas/welcomeByTobi1.webp','Fala\x20alguma\x20coisa,\x20@','「\x20*❗GRUPO\x20FECHADO❗*\x20」','Banindo\x20O\x20Número\x20Fake...','desc',',\x20você\x20foi\x20ou\x20seria\x20um\x20excelente\x20~Gado\x20Top\x20de\x20Linha~\x20amigo(a)\x20e\x20membro.','promote','43296jUIXPT','...\x20Escute\x20o\x20audio\x20para\x20permanecer\x20no\x20grupo._','prepareMessage','5DsSkGy','&bg=https://bit.ly/walpamikel','1155IXjOKv','Error\x20:\x20%s','user','6288213840883-1616169743@g.us','.\x0a\x0aBem\x20vindo(a)\x20ao\x20:\x20','false','imageMessage','\x0a\x0a👾\x20•𝑬𝑵𝑻𝑹𝑶𝑼\x20𝑺𝑬\x20𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•\x0a📸\x20•F𝜣T𝜣\x0a👻\x20•N𝜣ME\x0a📌\x20•CID∆DE\x0a🗓️\x20•ID∆DE\x0a⚠️\x20•LEI∆\x20∆S\x20REGR∆S\x20D𝜣\x20GRUP𝜣\x0a\x0a*APROVEITE\x20O\x20GRUPO!*','Press\x20F\x20chat\x20👋😙._.','true','3979730vCHUvy','⚠️\x20*MEMBRO\x20REBAIXADO*\x20🖐️🤨\x0a\x0a*Perdeu\x20Admin:*\x20@','sticker'];_0x7926=function(){return _0x5d3b80;};return _0x7926();}function _0x5ea4(_0x16460d,_0x1ab5b7){const _0x7926f8=_0x7926();return _0x5ea4=function(_0x5ea481,_0x5d7c84){_0x5ea481=_0x5ea481-0xee;let _0x52b6f1=_0x7926f8[_0x5ea481];return _0x52b6f1;},_0x5ea4(_0x16460d,_0x1ab5b7);}const _0x4baa22=_0x5ea4;(function(_0x4cb46f,_0x334abf){const _0x43c822=_0x5ea4,_0x5ec1f7=_0x4cb46f();while(!![]){try{const _0x1c1bbe=parseInt(_0x43c822(0x104))/0x1*(parseInt(_0x43c822(0x123))/0x2)+-parseInt(_0x43c822(0x10e))/0x3+parseInt(_0x43c822(0x125))/0x4*(-parseInt(_0x43c822(0x13d))/0x5)+parseInt(_0x43c822(0xfe))/0x6+-parseInt(_0x43c822(0x13f))/0x7*(-parseInt(_0x43c822(0x13a))/0x8)+parseInt(_0x43c822(0x12b))/0x9*(-parseInt(_0x43c822(0xf4))/0xa)+-parseInt(_0x43c822(0x12a))/0xb;if(_0x1c1bbe===_0x334abf)break;else _0x5ec1f7['push'](_0x5ec1f7['shift']());}catch(_0x5c79de){_0x5ec1f7['push'](_0x5ec1f7['shift']());}}}(_0x7926,0xbfac0),tobi['on'](_0x4baa22(0x108),async _0x2f9ebe=>{const _0x511c50=_0x4baa22;if(antifaker['includes'](_0x2f9ebe['jid'])){const _0x32b23a=await tobi['groupMetadata'](_0x2f9ebe['jid']);_0x2f9ebe[_0x511c50(0x11b)]==_0x511c50(0x119)&&(num=_0x2f9ebe['participants'][0x0],!num[_0x511c50(0x107)]('@')[0x0]['startsWith'](0x37)&&(tobi[_0x511c50(0x101)](_0x32b23a['id'],_0x511c50(0xfd),MessageType[_0x511c50(0xf7)]),setTimeout(async function(){const _0x438278=_0x511c50;console[_0x438278(0x112)](color('[','white'),color('!',_0x438278(0x11c)),color(']','white'),color(_0x438278(0x136),'red')),tobi[_0x438278(0xf8)](_0x32b23a['id'],[num]);},0x1388)));}const _0x5f9543=await tobi[_0x511c50(0x12e)](_0x2f9ebe[_0x511c50(0x113)]);if(_0x2f9ebe[_0x511c50(0x11b)]==_0x511c50(0x139)){num=_0x2f9ebe[_0x511c50(0x102)][0x0];try{ppimg=await tobi['getProfilePicture'](num[_0x511c50(0x107)]('@')[0x0]+_0x511c50(0x12f));}catch{ppimg=_0x511c50(0x11d);}let _0x34a642=await getBuffer('http://hadi-api.herokuapp.com/api/card/promote?nama=Promover\x20Detectado&member=@'+num[_0x511c50(0x107)]('@')[0x0]+_0x511c50(0x117)+encodeURI(_0x5f9543[_0x511c50(0x128)])+_0x511c50(0x105)+ppimg+_0x511c50(0x13e));var _0x56d34c=await tobi[_0x511c50(0x13c)](_0x5f9543['id'],_0x34a642,MessageType['image'],{'thumbnail':null}),_0x176afb=_0x56d34c['message'][_0x511c50(0x111)]?_0x56d34c[_0x511c50(0x127)][_0x511c50(0x111)]:_0x56d34c;const _0x856d1c=[{'buttonId':_0x511c50(0x115),'buttonText':{'displayText':_0x511c50(0x10c)},'type':0x1}],_0x14d7bb={'contentText':_0x511c50(0xff)+num[_0x511c50(0x107)]('@')[0x0],'buttons':_0x856d1c,'headerType':0x4,'imageMessage':_0x176afb[_0x511c50(0x127)][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0x5f9543['id'],_0x14d7bb,MessageType[_0x511c50(0x110)],{'contextInfo':{'mentionedJid':[num]}});}else{if(_0x2f9ebe['action']==_0x511c50(0x129)){num=_0x2f9ebe[_0x511c50(0x102)][0x0];try{ppimg=await tobi[_0x511c50(0xfc)](num[_0x511c50(0x107)]('@')[0x0]+_0x511c50(0x12f));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let _0x70d1b6=await getBuffer('http://hadi-api.herokuapp.com/api/card/demote?nama=Rebaixar\x20Detectado&member=@'+num['split']('@')[0x0]+_0x511c50(0x117)+encodeURI(_0x5f9543[_0x511c50(0x128)])+_0x511c50(0x105)+ppimg+'&bg=https://bit.ly/walpamikel');var _0x56d34c=await tobi[_0x511c50(0x13c)](_0x5f9543['id'],_0x70d1b6,MessageType[_0x511c50(0x10f)],{'thumbnail':null}),_0x176afb=_0x56d34c['message'][_0x511c50(0x111)]?_0x56d34c[_0x511c50(0x127)][_0x511c50(0x111)]:_0x56d34c;const _0x33ffa7=[{'buttonId':_0x511c50(0x115),'buttonText':{'displayText':'🦋\x20DETECTE\x20DEMOTE\x20🌙'},'type':0x1}],_0x450300={'contentText':_0x511c50(0xf5)+num[_0x511c50(0x107)]('@')[0x0],'buttons':_0x33ffa7,'headerType':0x4,'imageMessage':_0x176afb['message'][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0x5f9543['id'],_0x450300,MessageType[_0x511c50(0x110)],{'contextInfo':{'mentionedJid':[num]}});}}const _0x9f0621=await getBuffer(_0x511c50(0x118)),_0x17577f=_0x1fce76=>{const _0x392896=_0x511c50;tobi[_0x392896(0x101)](_0x5f9543['id'],_0x9f0621,MessageType[_0x392896(0x103)],{'mimetype':_0x392896(0x12c),'ptt':!![],'contextInfo':{'mentionedJid':[num]}});};if(!welcome['includes'](_0x2f9ebe[_0x511c50(0x113)]))return;try{const _0xd325a6=await tobi[_0x511c50(0x12e)](_0x2f9ebe[_0x511c50(0x113)]);console[_0x511c50(0x112)](_0x2f9ebe);if(_0x2f9ebe[_0x511c50(0x11b)]==_0x511c50(0x119)){num=_0x2f9ebe[_0x511c50(0x102)][0x0];try{ppimg=await tobi[_0x511c50(0xfc)](_0x2f9ebe['participants'][0x0][_0x511c50(0x107)]('@')[0x0]+_0x511c50(0x12f));}catch{ppimg=_0x511c50(0x11d);}mett=['1','2','3','4'],res=mett[Math[_0x511c50(0x124)](Math['random']()*mett[_0x511c50(0x106)])];if(res=='1'){let _0x5478d0=await getBuffer(ppimg);const _0x1d4f83=await tobi[_0x511c50(0x13c)](_0xd325a6['id'],_0x5478d0,MessageType[_0x511c50(0x10f)],{'thumbnail':null});let _0x309128=_0x1d4f83[_0x511c50(0x127)][_0x511c50(0x111)]?_0x1d4f83['message'][_0x511c50(0x111)]:_0x1d4f83;const _0x36823a=[{'buttonId':'Rg','buttonText':{'displayText':'Ξ\x20Registrar'},'type':0x1}],_0xcaab9d={'contentText':tempoByTobi+_0x511c50(0x10d)+num[_0x511c50(0x107)]('@')[0x0]+_0x511c50(0xee)+_0xd325a6[_0x511c50(0x128)],'footerText':_0x511c50(0x100),'buttons':_0x36823a,'headerType':0x4,'imageMessage':_0x309128['message'][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0xd325a6['id'],_0xcaab9d,MessageType['buttonsMessage'],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x319b64=_0x511c50;result=fs['readFileSync'](_0x319b64(0x133)),tobi[_0x319b64(0x101)](_0xd325a6['id'],result,MessageType[_0x319b64(0xf6)]);},0x3e8);}else{if(res=='2'){res=mett[Math[_0x511c50(0x124)](Math[_0x511c50(0x121)]()*mett[_0x511c50(0x106)])];let _0x1cbbd3=await getBuffer(ppimg);const _0x8ddb18=await tobi[_0x511c50(0x13c)](_0xd325a6['id'],_0x1cbbd3,MessageType[_0x511c50(0x10f)],{'thumbnail':null});let _0x17b7c8=_0x8ddb18[_0x511c50(0x127)]['ephemeralMessage']?_0x8ddb18['message'][_0x511c50(0x111)]:_0x8ddb18;const _0x376102=[{'buttonId':'Rg','buttonText':{'displayText':_0x511c50(0x11f)},'type':0x1}],_0x60c0da={'contentText':tempoByTobi+_0x511c50(0x10d)+num[_0x511c50(0x107)]('@')[0x0]+'.\x0a\x0aBem\x20vindo(a)\x20ao\x0a'+_0xd325a6[_0x511c50(0x128)]+_0x511c50(0xf1),'footerText':'Opae\x20boy,\x20de\x20boa?\x20._.','buttons':_0x376102,'headerType':0x4,'imageMessage':_0x17b7c8[_0x511c50(0x127)][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0xd325a6['id'],_0x60c0da,MessageType[_0x511c50(0x110)],{'contextInfo':{'mentionedJid':[num]}}),setTimeout(()=>{const _0x166e46=_0x511c50;tobi['sendMessage'](_0xd325a6['id'],_0x166e46(0x134)+num['split']('@')[0x0],MessageType[_0x166e46(0xf7)],{'contextInfo':{'mentionedJid':[num]}});},0x3e8);}else{if(res=='3'){res=mett[Math[_0x511c50(0x124)](Math[_0x511c50(0x121)]()*mett[_0x511c50(0x106)])],fotosAnime=['1','2','3','4','5'],ramdomRes=fotosAnime[Math['floor'](Math[_0x511c50(0x121)]()*fotosAnime['length'])];let _0x28a5e3=await fs[_0x511c50(0x122)](_0x511c50(0x126)+ramdomRes+_0x511c50(0x10b));const _0x5d8437=await tobi[_0x511c50(0x13c)](_0xd325a6['id'],_0x28a5e3,MessageType[_0x511c50(0x10f)],{'thumbnail':null});let _0x2f5de4=_0x5d8437[_0x511c50(0x127)]['ephemeralMessage']?_0x5d8437[_0x511c50(0x127)][_0x511c50(0x111)]:_0x5d8437;const _0x482c7f=[{'buttonId':'Rg','buttonText':{'displayText':_0x511c50(0x11f)},'type':0x1}],_0x2b9aed={'contentText':tempoByTobi+'\x20@'+num[_0x511c50(0x107)]('@')[0x0]+'\x20...\x20Para\x20permanecer\x20neste\x20grupo,\x20veja\x20a\x20imagem\x20acima\x20e\x20diga\x20qual\x20é\x20o\x20nome\x20do\x20anime!\x20🤝🏼','footerText':_0x511c50(0x100),'buttons':_0x482c7f,'headerType':0x4,'imageMessage':_0x2f5de4[_0x511c50(0x127)][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0xd325a6['id'],_0x2b9aed,MessageType[_0x511c50(0x110)],{'contextInfo':{'mentionedJid':[num]}});}else res=='4'&&(res=mett[Math[_0x511c50(0x124)](Math['random']()*mett[_0x511c50(0x106)])],setTimeout(()=>{const _0x4e2523=_0x511c50;tobi[_0x4e2523(0x101)](_0xd325a6['id'],'_'+tempoByTobi+_0x4e2523(0x12d)+num[_0x4e2523(0x107)]('@')[0x0]+_0x4e2523(0x13b),MessageType['text'],{'contextInfo':{'mentionedJid':[num]}});},0x3e8),setTimeout(()=>{const _0x232e30=_0x511c50;tobi[_0x232e30(0x101)](_0xd325a6['id'],fs[_0x232e30(0x122)](_0x232e30(0x132)),MessageType[_0x232e30(0x103)],{'mimetype':_0x232e30(0x12c),'ptt':!![],'contextInfo':{'mentionedJid':[num]}});},0x7d0));}}}else{if(_0x2f9ebe['action']==_0x511c50(0x11a)){num=_0x2f9ebe[_0x511c50(0x102)][0x0];try{ppimg=await tobi[_0x511c50(0xfc)](_0x2f9ebe[_0x511c50(0x102)][0x0][_0x511c50(0x107)]('@')[0x0]+'@c.us');}catch{ppimg=_0x511c50(0x11d);}mett=['1','2'],res=mett[Math[_0x511c50(0x124)](Math[_0x511c50(0x121)]()*mett['length'])];if(res=='1'){const _0x18d413=[_0x511c50(0x109)+num['split']('@')[0x0]+_0x511c50(0x130),'Adeus\x20@'+num[_0x511c50(0x107)]('@')[0x0]+_0x511c50(0x138)];var _0x3043a3=_0x18d413[Math['floor'](Math['random']()*_0x18d413[_0x511c50(0x106)])];num=_0x2f9ebe[_0x511c50(0x102)][0x0];let _0xc59b20=await getBuffer(ppimg);const _0x59f7c5=await tobi[_0x511c50(0x13c)](_0xd325a6['id'],_0xc59b20,MessageType['image'],{'thumbnail':null});let _0x46ab45=_0x59f7c5[_0x511c50(0x127)][_0x511c50(0x111)]?_0x59f7c5[_0x511c50(0x127)][_0x511c50(0x111)]:_0x59f7c5;const _0x7d991a=[{'buttonId':'k','buttonText':{'displayText':_0x511c50(0xf9)},'type':0x1}],_0x15d620={'contentText':''+_0x3043a3,'footerText':_0x511c50(0xf2),'buttons':_0x7d991a,'headerType':0x4,'imageMessage':_0x46ab45['message'][_0x511c50(0xf0)]};tobi[_0x511c50(0x101)](_0xd325a6['id'],_0x15d620,MessageType[_0x511c50(0x110)],{'contextInfo':{'mentionedJid':[num]}});}else res=='2'&&(res=mett[Math[_0x511c50(0x124)](Math['random']()*mett['length'])],_0x17577f(_0xd325a6['id']));}}}catch(_0x3567a1){console[_0x511c50(0x112)](_0x511c50(0x140),color(_0x3567a1,_0x511c50(0x11c)));}}),tobi['on']('group-update',async _0x2e1199=>{const _0x36493c=_0x4baa22;falfa={'key':{'fromMe':![],'participant':_0x36493c(0x10a),'remoteJid':_0x36493c(0x10a)},'message':{'groupInviteMessage':{'groupJid':_0x36493c(0x142),'inviteCode':_0x36493c(0xfb),'groupName':_0x36493c(0x120),'caption':''+tobi[_0x36493c(0x141)]['name']}}};const _0x4ddf08={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':_0x36493c(0x114),'body':'','previewType':_0x36493c(0x11e),'thumbnailUrl':'','thumbnail':img2}},_0x15914a={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':_0x36493c(0x135),'body':'','previewType':'PHOTO','thumbnailUrl':'','thumbnail':img2}},_0x2ad89d={'text':'oi','forwardingScore':0x3b9aca00,'externalAdReply':{'title':'「\x20*❗DESCRIÇÃO\x20ALTERADA❗*\x20」','body':'','previewType':_0x36493c(0x11e),'thumbnailUrl':'','thumbnail':img2}};metdata=await tobi['groupMetadata'](_0x2e1199[_0x36493c(0x113)]);if(_0x2e1199[_0x36493c(0xfa)]==_0x36493c(0xef))teks=_0x36493c(0x116),tobi[_0x36493c(0x101)](metdata['id'],teks,MessageType['text'],{'contextInfo':_0x4ddf08});else{if(_0x2e1199[_0x36493c(0xfa)]==_0x36493c(0xf3))teks='「\x20*[❗]\x20GRUPO\x20FECHADO*\x20」\x0a\x0a_O\x20grupo\x20foi\x20fechado\x20pelo\x20administrador_\x0a_Agora,\x20apenas\x20administradores\x20podem\x20enviar\x20mensagens_',tobi[_0x36493c(0x101)](metdata['id'],teks,MessageType[_0x36493c(0xf7)],{'contextInfo':_0x15914a}),console[_0x36493c(0x112)](_0x2e1199);else!_0x2e1199[_0x36493c(0x137)]==''&&(teks=_0x36493c(0x131)+_0x2e1199['descOwner']['split']('@')[0x0]+'\x0a•\x20Nova\x20Descrição\x20:\x20\x0a'+_0x2e1199[_0x36493c(0x137)],tobi['sendMessage'](metdata['id'],teks,MessageType[_0x36493c(0xf7)],{'contextInfo':_0x2ad89d}),console[_0x36493c(0x112)](_0x2e1199));}}));
/** Se alguém quiser o botão de welcome, eu vendo por 20 reais chama pv wa.me/559481417512 **/

/********** FUCTION ANTI CALL **********/
tobi.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LIGAÇÃO DETECTADA LIGAÇÕES = BLOCK \x1b[1;37m]')
tobi.sendMessage(callerId, `${emoji_bot} Ligações = block ${emoji_bot}`, MessageType.text)
setTimeout(async() => {
await tobi.blockUser(callerId, "add")
}, 3000)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
tobi.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

/********** FUCTION BATERIA **********/
tobi.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
})

/************* LINGUAGEM ************/
tobi.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
m = simple.smsg(tobi, mek)
if (!mek.key.fromMe && leitor === true) return
global.p
global.blocked

/************** HORAS ************/
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const speedB = moment.tz('America/Sao_Paulo').format('ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')
const hour_now = moment().format('HH:mm:ss')

/************** TYPE DOS CONSOLE ************/
const content = JSON.stringify(mek.message)
const from = m.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const type = Object.keys(mek.message)[0]

/************** MUKTI PREFIXOS ************/
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if(multi){
var p = /^[°•π÷×¶∆£¢€¥®™✓=|~,¿;+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
} else {
if (nopref){
p = ' '
} else {
if(variosPrefixo){
p = p}
}
}

/************** BUDY DO AUTO RESPONDER ************/
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

/************** CONST DE STRING ************/
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const autoResposta = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const marker = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const argss = body.split(/ +/g)
const arg = budy.slice(comando.length + 2, budy.length)
const isCmd = body.startsWith(p)
const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = tobi.user.jid
const q = args.join(' ')
const me = tobi.user
const tescuk = ["0@s.whatsapp.net"]
const _e = "Error"
const allchats = await tobi.chats.all()

/************** LINGUAGEM GRUPO ************/
const isGroup = from.endsWith('@g.us')
const senderr = isGroup ? mek.participant : mek.key.remoteJid
const sender = mek.key.fromMe ? tobi.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const jid = senderr
const groupMetadata = isGroup ? await tobi.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const groupOwner = isGroup ? groupMetadata.owner : ''
const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] 
const isOwner = ownerNumber.includes(sender)
const isBanned = ban.includes(sender) 
const bater = global.batrei[global.batrei.length - 1]
const desc = isGroup ? groupMetadata.desc : ''
const nãoMexaAquiSeuPreto = botNumber
const numberBot = [`${nãoMexaAquiSeuPreto}@s.whatsapp.net`] 
const isBotk = numberBot.includes(sender)

/************** MENU CONST ************/
const charge = charging ? 'sim' : 'não'
const totalchat = await tobi.chats.all()
const timestamp = speed();
const latensi = speed() - timestamp
const useLevel = getLevelingLevel(sender)
const checATM = checkATMuser(sender)
const useXp = getLevelingXp(sender)
const requireXp = 5 * Math.pow(useLevel, 2) + 50 * useLevel + 100

/************** VERIFICADO CONST ************/
const dfrply = fs.readFileSync('./base de dados/lib/bot/fotos/tobi_lolizit.jpg')
var _0xa51ca7=_0xaced;function _0xaced(_0x35347c,_0x510658){var _0x5638db=_0x5638();return _0xaced=function(_0xacedac,_0x84b4fb){_0xacedac=_0xacedac-0xde;var _0x4771c3=_0x5638db[_0xacedac];return _0x4771c3;},_0xaced(_0x35347c,_0x510658);}function _0x5638(){var _0x28499c=['2222919JYYIfj','9cvEdGi','6237242HLCvJI','6790095wKqXPF','50YxYOWN','676040qLmwAs','4895608ZZThOL','5645478DDCbnf','https://chat.whatsapp.com/CaZ8OlmI59gCKizmlXqqay','api','4rddZyj','1623284FjEDCH','7rooKIT','api.zeks.me'];_0x5638=function(){return _0x28499c;};return _0x5638();}(function(_0x4f4e82,_0x737634){var _0x27b9c8=_0xaced,_0x3b02bd=_0x4f4e82();while(!![]){try{var _0x400347=-parseInt(_0x27b9c8(0xe6))/0x1+parseInt(_0x27b9c8(0xe5))/0x2*(-parseInt(_0x27b9c8(0xe9))/0x3)+-parseInt(_0x27b9c8(0xe1))/0x4+parseInt(_0x27b9c8(0xde))/0x5+parseInt(_0x27b9c8(0xe2))/0x6*(parseInt(_0x27b9c8(0xe7))/0x7)+-parseInt(_0x27b9c8(0xe0))/0x8*(-parseInt(_0x27b9c8(0xea))/0x9)+-parseInt(_0x27b9c8(0xdf))/0xa*(-parseInt(_0x27b9c8(0xeb))/0xb);if(_0x400347===_0x737634)break;else _0x3b02bd['push'](_0x3b02bd['shift']());}catch(_0x4581ef){_0x3b02bd['push'](_0x3b02bd['shift']());}}}(_0x5638,0xd9247),semApikeyPraTu='apivinz',zeks=_0xa51ca7(0xe8),sexoMuito=_0xa51ca7(0xe4),grupoDoTobi=_0xa51ca7(0xe3));
function _0x2f25(_0x3fb1df,_0x246ad3){var _0x220811=_0x2208();return _0x2f25=function(_0x2f2539,_0x435f09){_0x2f2539=_0x2f2539-0x6f;var _0x132b32=_0x220811[_0x2f2539];return _0x132b32;},_0x2f25(_0x3fb1df,_0x246ad3);}var _0x2a04bc=_0x2f25;(function(_0x7399d3,_0x449ba7){var _0x15d48c=_0x2f25,_0x51e595=_0x7399d3();while(!![]){try{var _0x18f2c0=-parseInt(_0x15d48c(0x6f))/0x1+-parseInt(_0x15d48c(0x72))/0x2+parseInt(_0x15d48c(0x70))/0x3*(-parseInt(_0x15d48c(0x76))/0x4)+parseInt(_0x15d48c(0x71))/0x5+parseInt(_0x15d48c(0x74))/0x6*(parseInt(_0x15d48c(0x77))/0x7)+parseInt(_0x15d48c(0x75))/0x8+parseInt(_0x15d48c(0x73))/0x9;if(_0x18f2c0===_0x449ba7)break;else _0x51e595['push'](_0x51e595['shift']());}catch(_0x2ec434){_0x51e595['push'](_0x51e595['shift']());}}}(_0x2208,0x441eb),mtSexo=_0x2a04bc(0x78));function _0x2208(){var _0x4f9cc1=['6rcZSOt','266105pviyuZ','282936AclatQ','1338561yUJEMm','24BUNTbF','3485544ojvDna','143648WJBYbK','328958aHAEbL','copyright\x20©\x20Tobi/Lolizita-BOT','333308tOTgoW'];_0x2208=function(){return _0x4f9cc1;};return _0x2208();}

/************** PUSHNAME (NOME) ************/
const conts = mek.key.fromMe ? tobi.user.jid : tobi.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? tobi.user.name : conts.notify || conts.vname || conts.name || '-'
const nameOwner = tobi.contacts[`${OwnerNumber}@s.whatsapp.net`] != undefined ? tobi.contacts[`${OwnerNumber}@s.whatsapp.net`].notify || tobi.contacts[`${OwnerNumber}@s.whatsapp.net`].vname || getRegisterName(`${OwnerNumber}@s.whatsapp.net`) || `+${OwnerNumber.split('@')[0]}` : `+${OwnerNumber.split('@')[0]}`

/************** CONST ANTILINK ************/
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

/************** RECURSO DE SEGURANÇA ************/
const isWelcome = isGroup ? welcome.includes(from) : true 
const isLevelingOn = isGroup ? _leveling.includes(from) : true 
const isAntiLink = isGroup ? antilink.includes(from) : true 
const isAntifaker = isGroup ? antifaker.includes(from) : true 
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isAutoConversar = isGroup ? autconversa.includes(from) : false
const isAntiflod = isGroup ? antiflod.includes(from) : true
const isViewchat = isGroup ? viewchat.includes(from) : true

/************** REGISTRO ************/
const isRegistered = checkRegisteredUser(sender) 
const isUser = checkRegisteredUser(sender)

/************** PREMIUM ************/
const isPremium= prem.includes(sender)	 

/************** EM JAPONÊS 🙂 ************/
var ase = new Date();
var bolo_de_carne = ase.getHours();
switch(bolo_de_carne){
case 0: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 1: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 2: bolo_de_carne = `Konbanwa ${pushname}🌛`; break;
case 3: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 4: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 5: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 6: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 7: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 8: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 9: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 10: bolo_de_carne = `Ohayô ${pushname}✨`; break;
case 11: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 12: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 13: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 14: bolo_de_carne = `Konnichiwa ${pushname}🔥`; break;
case 15: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 16: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 17: bolo_de_carne = `Konnichiwa ${pushname}🌹`; break;
case 18: bolo_de_carne = `Konnichiwa ${pushname}??`; break;
case 19: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 20: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 21: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 22: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
case 23: bolo_de_carne = `Konnichiwa ${pushname}🌛`; break;
}
var bolo_de_carne = '' + bolo_de_carne;

/********** OUTRAS CONST **********/
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
tobi.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
} 

const sendSticker = (from, filename, mek) => {
tobi.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
}

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

/********** FUCTION FOTO **********/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tobi.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tobi.sendMessage(from, hasil, type, options).catch(e => {
tobi.sendMessage(from, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Erro ao baixar e enviar mídia_')
})
})
})
})
}

/********** ENVIAR MSG **********/
const msg = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const webPage = (teks) => {tobi.sendMessage(from, teks, text, {contextInfo: {text: 'hi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"previewType": "PHOTO","thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg","thumbnail": img2,}, mentionedJid:[sender]}, quoted : mek})
}

const enviar = (teks) => {
tobi.sendMessage(from, teks, text,  {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}

const reply = (teks) => {
tobi.sendMessage(from, teks, text, {quoted: mek})
}

const fotothumb = {text: 'oi', "forwardingScore": 1000000000, "externalAdReply": {"title": `${bolo_de_carne}`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": img2, mentionedJid:[sender]}
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

/********** COSTUM DO TTT **********/
const costum = (pesan, tipe, target, target2) => {
 tobi.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}

/********** SENDMESS DO BC **********/
const sendMess = (hehe, teks) => {
tobi.sendMessage(hehe, teks, text)
}

/********** RAMDOM **********/
const math = (teks) => {
return Math.floor(teks)
} 

/********** MECIONADOR **********/
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tobi.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}

/********** TIME **********/
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

/********** PERDA DE XP **********/
randomPerda = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(randomPerda)

/********** GANHO EM XP **********/
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(randomTTTXP)

const sendFileSenderUrl = async(link, type, options) => {
hasil = await getBuffer(link)
tobi.sendMessage(sender, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
tobi.sendMessage(sender, hasil, type, options).catch(e => {
tobi.sendMessage(sender, { url : link }, type, options).catch(e => {
enviar('_[ ! ] Erro ao baixar e enviar mídia_')
})
})
})
})
}


/********** MESS && PTBR **********/
only = {
tobireplayoff: `『❌』Comando ${comando} desativado com sucesso!`,
tobireplay: `『❗』Comando ${comando} ativado com sucesso!`,
tobantilink: `Link permitido por ser adm! ._.`,
}

/********** FUCTION PATENTE **********/
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {
patt = 'Bronze  I🥉'
} else if (nivelAtual === 2) {
patt = 'Bronze II🥉'
} else if (nivelAtual === 3) {
patt = 'Bronze  III🥉'
} else if (nivelAtual === 4) {
patt = 'Bronze  IV🥉'
} else if (nivelAtual === 5) {
patt = 'Bronze  V🥉'
} else if (nivelAtual === 6) {
patt = 'Prata I🥈'
} else if (nivelAtual === 7) {
patt = 'Prata II🥈'
} else if (nivelAtual === 8) {
patt = 'Prata III🥈'
} else if (nivelAtual === 9) {
patt = 'Prata IV🥈'
} else if (nivelAtual === 10) {
patt = 'Prata V🥈'
} else if (nivelAtual === 11) {
patt = 'Ouro I🥇'
} else if (nivelAtual === 12) {
patt = 'Ouro II🥇'
} else if (nivelAtual === 13) {
patt = 'Ouro III🥇'
} else if (nivelAtual === 14) {
patt = 'Ouro IV🥇'
} else if (nivelAtual === 15) {
patt = 'Ouro V🥇'
} else if (nivelAtual === 16) {
patt = 'Campeão I🏆'
} else if (nivelAtual === 17) {
patt = 'Campeão II🏆'
} else if (nivelAtual === 18) {
patt = 'Campeão III🏆'
} else if (nivelAtual === 19) {
patt = 'Campeão IV🏆'
} else if (nivelAtual === 20) {
patt = 'Campeão V🏆'
} else if (nivelAtual === 21) {
patt = 'Diamante I 💎'
} else if (nivelAtual === 22) {
patt = 'Diamante II 💎'
} else if (nivelAtual === 23) {
patt = 'Diamante III 💎'
} else if (nivelAtual === 24) {
patt = 'Diamante IV 💎'
} else if (nivelAtual === 25) {
patt = 'Diamante V 💎'
} else if (nivelAtual === 26) {
patt = 'Mestre I 🐂'
} else if (nivelAtual === 27) {
patt = 'Mestre II 🐂'
} else if (nivelAtual === 28) {
patt = 'Mestre III 🐂'
} else if (nivelAtual === 29) {
patt = 'Mestre IV 🐂'
} else if (nivelAtual === 30) {
patt = 'Mestre V 🐂'
} else if (nivelAtual === 31) {
patt = 'Mítico I 🔮'
} else if (nivelAtual === 32) {
patt = 'Mítico II 🔮'
} else if (nivelAtual === 33) {
patt = 'Mítico III 🔮'
} else if (nivelAtual === 34) {
patt = 'Mítico IV 🔮'
} else if (nivelAtual === 35) {
patt = 'Mítico V 🔮'
} else if (nivelAtual === 36) {
patt = 'God I🕴'
} else if (nivelAtual === 37) {
patt = 'God II🕴'
} else if (nivelAtual === 38) {
patt = 'God III🕴'
} else if (nivelAtual === 39) {
patt = 'God IV🕴'
} else if (nivelAtual === 40) {
patt = 'God V🕴'
} else if (nivelAtual === 41) {
patt = 'Grande Mestre I 🛐'
} else if (nivelAtual === 42) {
patt = 'Grande Mestre II 🛐'
} else if (nivelAtual === 43) {   	
patt = 'Grande Mestre III 🛐'
} else if (nivelAtual === 44) {
patt = 'Grande Mestre IV 🛐'
} else if (nivelAtual >= 45) {
patt = 'Deus-Sama🔰'
} 

/********** FUCTION TIPO DE USUÁRIO **********/
if (groupAdmins) {
prema = 'Ademir🤓'
}
if (isOwner) {
prema = `El ${SeuNome}🕴🏽`
} else {
var prema = 'Membro comum🗿'
}

/********** FUCTION BODIA **********/
var ase = new Date();
var tempo = ase.getHours();
switch(tempo){
case 0: tempo = `Boa noite ${pushname}🌛`; break;
case 1: tempo = `Boa noite ${pushname}🌛`; break;
case 2: tempo = `Boa noite ${pushname}🌛`; break;
case 3: tempo = `Bom Dia ${pushname}✨`; break;
case 4: tempo = `Bom Dia ${pushname}✨`; break;
case 5: tempo = `Bom Dia ${pushname}✨`; break;
case 6: tempo = `Bom Dia ${pushname}✨`; break;
case 7: tempo = `Bom Dia ${pushname}✨`; break;
case 8: tempo = `Bom Dia ${pushname}✨`; break;
case 9: tempo = `Bom Dia ${pushname}✨`; break;
case 10: tempo = `Bom Dia ${pushname}✨`; break;
case 11: tempo = `Boa tarde ${pushname}🔥`; break;
case 12: tempo = `Boa tarde ${pushname}🔥`; break;
case 13: tempo = `Boa tarde ${pushname}🔥`; break;
case 14: tempo = `Boa tarde ${pushname}🔥`; break;
case 15: tempo = `Boa tarde ${pushname}🌹`; break;
case 16: tempo = `Boa tarde ${pushname}🌹`; break;
case 17: tempo = `Boa tarde ${pushname}🌹`; break;
case 18: tempo = `Boa noite ${pushname}🌛`; break;
case 19: tempo = `Boa noite ${pushname}🌛`; break;
case 20: tempo = `Boa noite ${pushname}🌛`; break;
case 21: tempo = `Boa noite ${pushname}🌛`; break;
case 22: tempo = `Boa noite ${pushname}🌛`; break;
case 23: tempo = `Boa noite ${pushname}🌛`; break;
}
var tempo = '' + tempo;

/********** FUCTION LEVELING **********/
var up_porcenntagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const level_porcen = getLevelingLevel(sender)
if (level_porcen <= 10) {
up_porcenntagem = `*[█▒▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 20) {
up_porcenntagem = `*[██▒▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 30) {
up_porcenntagem = `*[███▒▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 40) {
up_porcenntagem = `*[████▒▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 50) {
up_porcenntagem = `*[█████▒▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 60) {
up_porcenntagem = `*[██████▒▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 70) {
up_porcenntagem = `*[███████▒▒▒] ${level_porcen}%*`
} else if (level_porcen <= 80) {
up_porcenntagem = `*[████████▒▒] ${level_porcen}%*`
} else if (level_porcen <= 90) {
up_porcenntagem = `*[█████████▒] ${level_porcen}%*`
} else if (level_porcen <= 100) {
up_porcenntagem = `*[██████████] ${level_porcen}%*`
} 		

/********** FUCTION BATERIA **********/
var porcentagem = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'  
const bateria = (`${baterai}`)
if (bateria <= 10) {
porcentagem = `*[█▒▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 20) {
porcentagem = `*[██▒▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 30) {
porcentagem = `*[███▒▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 40) {
porcentagem = `*[████▒▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 50) {
porcentagem = `*[█████▒▒▒▒▒] ${bateria}%*`
} else if (bateria <= 60) {
porcentagem = `*[██████▒▒▒▒] ${bateria}%*`
} else if (bateria <= 70) {
porcentagem = `*[███████▒▒▒] ${bateria}%*`
} else if (bateria <= 80) {
porcentagem = `*[████████▒▒] ${bateria}%*`
} else if (bateria <= 90) {
porcentagem = `*[█████████▒] ${bateria}%*`
} else if (bateria <= 100) {
porcentagem = `*[██████████] ${bateria}%*`
} 			

/********** FUCTION TEMPO **********/
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

/********** MENSAGENS DO BOT **********/
resposta = {
macaco: "Macaco 😡️",
erroKrl: "Deu erro Macaco 😡️",
hentaiseach: "❌ _*...Hentai não foi achado...*_❌",
erroB: `${ll}...❌Deu erro, Tente mais tarde❌...${ll}`,
happymod: `${ll}...❌Deu erro, Item pesquisado Não encontrado❌...${ll}`,
whatsappmodgb: `${ll}...❌Deu erro, Whatsapp pesquisado Não encontrado❌...${ll}`,
attp: `_Coloque o texto _\n\n*Exemplo ${p}attp ${SeuNome} gado*`,
play: `_*Sintaxe incorreta...*_\n\nUse assim: ${p + comando} F Marília Mendonça 👋😙`
}

erroB = {
erroAnimes: "❌Erro em Prucurar o Anime❌",
erroHentai: "❌Erro! Hentai Não Foi Achado❌",
erroXvideos: "❌Erro! Talvez o Comando Esteja Off❌",
erroHq: "❌Erro! Não consigui achar algo!❌",
erroMangá: "❌Erro! Não consigui achar o mangá!❌",
}

/********** VERIFICADOS **********/
/** Verificado com o nome bom dia **/
const tob = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${tempo}`}}}

/** Verificado com o nome ohayo **/
const tob1 = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Lolizita", "caption": `${bolo_de_carne}`}}}

/** Verificado com o nome e foto **/
const tob2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;AKAME,;;;\nFN:AKAME,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`), thumbnail:fs.readFileSync(`./base de dados/lib/bot/fotos/tobi_lolizit.jpg`),sendEphemeral: true}}}

/** Verificado de catálogo com nome **/
const tobCat = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": dfrply}, "title": `${bolo_de_carne}`, "description": `${bolo_de_carne}`, "currencyCode": "USD", "priceAmount1000": "2000", "retailerId": `${bolo_de_carne}`, "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}

/** Verificado de carrinho com nome **/
const tobCarr = {key : {participant : '0@s.whatsapp.net'}, message: {orderMessage: {itemCount : 123, status: 1, surface : 1, message: `${bolo_de_carne}`, orderTitle: `${bolo_de_carne}`, thumbnail: dfrply, sellerJid: '0@s.whatsapp.net' }}}

/** Verificado de localização com nome **/
const tobLoc = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {caption: `${bolo_de_carne}`,jpegThumbnail: dfrply}}}

/** Verificado de video com nome **/
const tobVid = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": {"title": `${bolo_de_carne}`, "h": `${bolo_de_carne}`, 'duration': '99999', 'caption': `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de documento com nome **/
const tobDoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${bolo_de_carne}`, jpegThumbnail: dfrply}}}

/** Verificado de convite com nome **/
const tobCon = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": `${bolo_de_carne}`,"groupName": `${bolo_de_carne}`, "caption": `${bolo_de_carne}`, 'jpegThumbnail': dfrply}}}

/** Verificado de sticker com nome **/
const tobStk = {"key": {"participant": `0@s.whatsapp.net`,"remoteJid": "6289643739077-1613049930@g.us","fromMe": false,"id": "3B64558B07848BD81108C1D14712018E"},"message": {"stickerMessage": {"fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=","pngThumbnail": dfrply,"mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE","fileLength": "60206","firstFrameLength": 3626,"isAnimated": false}},"messageTimestamp": "1614070775","status": "PENDING"}

/** Verificado de gif com nome **/
const tobGif = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `${bolo_de_carne}`,"h": `${bolo_de_carne}`,'duration': '99999', 'gifPlayback': 'true', 'caption': `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado com nome **/
const tobTex = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "extendedTextMessage": {"text": `${bolo_de_carne}`,"title": `${bolo_de_carne}`,'jpegThumbnail': dfrply}}}

/** Verificado de audio com nome **/
const tobAud = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "99999","ptt": "true"}}}

/********** BOTÃO LOC **********/
async function sendButLocation(from, text1, desc1, gam1, but = [], options = {}) {
const buttonMessages = { locationMessage: {jpegThumbnail: gam1}, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return tobi.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)
}

/********** BOTÃO MENSAGEM **********/
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
tobi.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

/********** BOTÃO VIDEO **********/
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await tobi.prepareMessage(from, kma, video)
const buttonMessages = {videoMessage: mhan.message.videoMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 5}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** BOTÃO IMAGE **********/
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await tobi.prepareMessage(from, kma, image, {thumbnail: null})
const buttonMessages = {imageMessage: mhan.message.imageMessage, contentText: text1, footerText: desc1, buttons: but, headerType: 4}
tobi.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

/********** FUNÇÕES APARTI DAQUI **********/
const cmdadd = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./base de dados/lib/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) cmdadd()
const reqcmd = JSON.parse(fs.readFileSync('./base de dados/lib/totalcmd.json'))[0].totalcmd

/********** BOTÃO CRIPTOGRAFADO **********/
function _0x1edd(_0x35fa61,_0x5a08d6){const _0x2e220d=_0x2e22();return _0x1edd=function(_0x1edd7d,_0x15cfef){_0x1edd7d=_0x1edd7d-0x142;let _0x2e64cd=_0x2e220d[_0x1edd7d];return _0x2e64cd;},_0x1edd(_0x35fa61,_0x5a08d6);}(function(_0x3dabbc,_0x30ab9e){const _0x1a8230=_0x1edd,_0x4bb719=_0x3dabbc();while(!![]){try{const _0x5aad5f=-parseInt(_0x1a8230(0x142))/0x1+parseInt(_0x1a8230(0x148))/0x2+parseInt(_0x1a8230(0x14a))/0x3+-parseInt(_0x1a8230(0x14e))/0x4*(parseInt(_0x1a8230(0x147))/0x5)+parseInt(_0x1a8230(0x14d))/0x6+-parseInt(_0x1a8230(0x14c))/0x7*(-parseInt(_0x1a8230(0x146))/0x8)+parseInt(_0x1a8230(0x14f))/0x9*(-parseInt(_0x1a8230(0x145))/0xa);if(_0x5aad5f===_0x30ab9e)break;else _0x4bb719['push'](_0x4bb719['shift']());}catch(_0x2bebb5){_0x4bb719['push'](_0x4bb719['shift']());}}}(_0x2e22,0xc5329));const mortandela=()=>{const _0x16042a=_0x1edd;sendButMessage(m['chat'],linguagem[_0x16042a(0x14b)](me),mess[_0x16042a(0x143)](),[{'buttonId':linguagem[_0x16042a(0x149)](),'buttonText':{'displayText':linguagem[_0x16042a(0x144)](me)},'type':0x1}],{'quoted':mek});};function _0x2e22(){const _0x5d418c=['1294210cjzbJd','71156bEPjJB','sexo','3226749nheZfa','nameByTobi','14TOvPIQ','8132874nCtIpv','8KVpZDX','18IxxpHw','827387gbGSAo','commandUsed','okLolizitaBot','8102870vgNaKp','5226904SHynfl'];_0x2e22=function(){return _0x5d418c;};return _0x2e22();}
/** Se alguém quiser o botão eu vendo por 10 reais chama pv wa.me/559481417512 **/

/********** FUNÇÕES REGISTRO DE TEMPO **********/
function fecha(){
myMonths = ["Janeiro","fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const stickerAdm = (hehe) => {
anu = fs.readFileSync('./base de dados/database/figurinhas/stickerAdm_sticker.webp')
tobi.sendMessage(hehe, anu, sticker,{
quoted: mek})
}

/*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./base de dados/lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return enviar("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return enviar(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(
`./base de dados/lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
   
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

 ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
 ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
 ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
tobi.sendMessage(from, chatAccept, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
tobi.sendMessage(
from, !mek.key.fromMe,
`『❗』 Esta e uma opção apenas para o @${boardnow.O} !`,
MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return enviar(`O jogo já começou!`);
fs.unlinkSync(`./base de dados/lib/tictactoe/db/${from}.json`);
tobi.sendMessage(
from,
`@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return enviar(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
sendButMessage(from, `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\nJogo termina empatado`, `Antis de iniciar outra partida, Certifique-se quê o jogo anterior foi resetado!`, [{buttonId: `${p}resetavelha`, buttonText: {displayText: `🎯 ＲＥＳＥＴＡ ＶＥＬＨＡ 🎯`}, type: 1}], {quoted: mek}) 
fs.unlinkSync(`./base de dados/lib/tictactoe/db/${from}.json`);
return;
}
const dinherowin = Math.ceil(Math.random() * 5000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
sendButMessage(from, `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\nVencido por @${winnerJID} 😎👑`, `Antis de iniciar outra partida, Certifique-se quê o jogo anterior foi resetado!`, [{buttonId: `${p}resetavelha`, buttonText: {displayText: `?? ＲＥＳＥＴＡ ＶＥＬＨＡ 🎯`}, type: 1}], {quoted: mek, contextInfo: {mentionedJid: [moving.winner == "O" ? moving.O + "@s.whatsapp.net": moving.X + "@s.whatsapp.net"]}});
setTimeout( () => {
if (fs.existsSync("./base de dados/lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./base de dados/lib/tictactoe/db/" + from + ".json");
enviar(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
}
}, 50000) 
enviar(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./base de dados/lib/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️* \n\n ❌ : @${moving.X}\n⭕ : @${moving.O}\nSua vez : @${moving.turn == "X" ? moving.X : moving.O}\n\n ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}\n\n`;
tobi.sendMessage(from, chatMove, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [moving.X + "@s.whatsapp.net", moving.O + "@s.whatsapp.net"]}})}}

if(isGroup && fs.existsSync(`./base de dados/lib/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./base de dados/lib/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return enviar('está perto')
xp = Math.floor(Math.random() * 14) + 3000
dinhero = Math.floor(Math.random() * 10) + 500
recompensa = `_*🎉 Parabéns ${pushname}, Você ganhou o jogo! 🎉*_\n_*Recompensa: ganhou: "${xp}" em xp e "${dinhero}" em dinhero*_\n\n_*Iniciando o proximo jogo em 5 segundos...*_`
if(budy.toUpperCase() == dataAnagrama.original) { sendButMessage(from, recompensa, `${linguagem.nameByTobi(me)}`, [{buttonId: `a`, buttonText: {displayText: `Obg`}, type: 1}], {quoted: mek}), fs.unlinkSync(`./base de dados/lib/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
addKoinUser(sender, dinhero)
setTimeout(async() => {
fs.writeFileSync(`./base de dados/lib/anagrama-${from}.json`, `${JSON.stringify(anagramaAleatorio[Math.floor(Math.random() * anagramaAleatorio.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./base de dados/lib/anagrama-${from}.json`))
sexo = `
╭━━ ⪩
▢ き⃟🧧_Anagrama_🧧⃟ き
▢ ╭═══⊷
▢ ⌁ _*Descubra A Palavra*_
▢ ⌁ _*Anagrama: ${dataAnagrama2.embaralhada}*_
▢ ⌁ _*Dica: ${dataAnagrama2.dica}*_
▢ ╰═══⊷
╰━━━ ⪨`
buffer = await getBuffer(aurlSexo);
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: sexo})
}, 5000)
}}

/********** FUCTION HIDETAG **********/
const hideTag = async function(from, text){
let anu = await tobi.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
tobi.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  

/********** FUCTION LEVEL XP **********/
if (!mek.key.fromMe && isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/database/audios/som` + res + `.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${up_porcenntagem}`}}}

let contentt = await getBuffer(`https://yuzzu-api.herokuapp.com/api/level?icon=https://i.ibb.co/KKgYHRW/8c5dc479e4a8a9404e292b5fc50ab8db.jpg`)
const media = await tobi.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p}info perfil`, buttonText: {displayText: '💗 ＰＥＲＦＩＬ 🦋'}, type: 1}]
const btn1 = {contentText: `
    ═══╾ Lᴇᴠᴇʟ Uᴘ ╼═══                           
  ➣ Numero: @${namelv.split('@')[0]}
  ┌──
▢ 〽️ Xp: ${getLevelingXp(sender)}
▢ 🔰 Level: ${getLevel} -> ${getLevelingLevel(sender)}
▢ 🆙 Patente : ${patt}
└──────────────`, 
buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
}
} catch (err) {
console.error(err)
}
}

/********** FUCTION DINHEIRO **********/
if (!mek.key.fromMe && isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

/***** FINALIZAR TTT AUTOMATICAMENTE *****/
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
tobi.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
tobi.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/***** SEXO, NÃO MEXAM AQUIKMMM *****/
function addMetadata(packname, author) {	
if (!packname) packname = ''; if (!author) author = '';	
author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
const buf2 = Buffer.from(last, "hex")	
const buf3 = Buffer.from(bytes)	
const buf4 = Buffer.from(JSON.stringify(json))	
const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
return `./src/stickers/${name}.exif`	
})	
}

if(isUrl(budy) && isAntiLink && isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
const linkAS = await tobi.groupInviteCode(`${from}`)
if (budy.match(linkAS)) return reply('Link do Grupo, não irei remover..')  
reply('*Link detectado, porém usuário é admin*')
}
if(isUrl(budy) && isAntiLink && !isGroupAdmins && isBotGroupAdmins && !mek.key.fromMe) {
reply('*Link detectado, punindo usuário...*')
kic = `${sender.split("@")[0]}@s.whatsapp.net`
tobi.groupRemove(from, [kic])
}

/*[--ANTI PALAVRÃO --]*/
if (!mek.key.fromMe && isGroup && isPalavrão) { 
if (palavra.includes(messagesC)) {
enviar(`Essᴀ ᴘᴀʟᴀᴠʀᴀ ғᴏɪ ᴘʀᴏɪʙɪᴅᴀ ɴᴇssᴇ ɢʀᴜᴘᴏ\nRᴇᴘᴇɴsᴇ ᴏǫᴜᴇ ᴠᴄ ғᴇᴢ ᴘᴏʀ 4 ᴍɪɴᴜᴛᴏs ғᴏʀᴀ ᴅᴏ ɢʀᴜᴘᴏ 👋`)
setTimeout( () => { 
tobi.groupRemove(from, [sender]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 2000)
setTimeout( () => { 
enviar(`Aᴅɪᴄɪᴏɴᴀɴᴅᴏ ${pushname} Nᴏᴠᴀᴍᴇɴᴛᴇ`)
}, 185000) //240000
var addd = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => { 
tobi.groupAdd(from, [addd]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}, 240000)
setTimeout( () => {
tobi.updatePresence(from, )
enviar("Aᴅᴇᴜsシ︎")
}, 0)
}
}

//ANTI SPAM EU PEGUEI DO ITALU/TIRINGA-BOT
if (isCmd && isFiltered(from) && !isGroup && isAntiflod && !isOwner && !mek.key.fromMe) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.antiFlodkkj(sender), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
}

if (isCmd && isFiltered(from) && isGroup && isAntiflod && !isOwner && !mek.key.fromMe) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${comando}`), 'DE:', color(pushname))
return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.antiFlodkkj(sender), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
}

/********** TIPOS DE MENSAGENS **********/
colors = ['red','white','black','blue','yellow','green']
//_TIPO DE MENSAGEM
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isDocument = type == 'documentMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isDocument) typeMessage = "Document"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const stickerMessage = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const tipoMensagem = type == 'audioMessage' ? 'Audio' : type == 'stickerMessage' ? 'Sticker' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Video' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : 'Mensagem'
if (!mek.key.fromMe && !isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!mek.key.fromMe && !isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'horas', color(hr, "yellow"))
if (!mek.key.fromMe && isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(comando, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))
if (!mek.key.fromMe && !isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color(`${tipoMensagem}`, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName), 'horas', color(hr, "yellow"))

/********** VISUALIZADOR AS MENSAGENS  **********/
tobi.chatRead(from)

/********** USUÁRIO BANIDO **********/
if (isCmd && isBanned) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.ban(SeuNome, pushname), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
return console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('BAN', "red"), ']', color('Ignorando', "yellow"), 'comando', color('do', "yellow"), color(pushname), 'Horas', color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'))
}

/********** LOGIN **********/
if (selectedButton == `Rg`) {
tobi.updatePresence(from, Presence.composing)
if (isUser) return enviar(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}Espere, Cadastrando: ${pushname}...!${ll}`)
try {
ppimg = await tobi.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registro.length}&seri=${serialUser}&pp=${ppimg}&bg=https://bit.ly/walpamikel`)
if (m.isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {quoted: mek, thumbnail: null, caption: linguagem.registroByTobiHehe(serialUser, time, pushname, sender)})
addATM(sender)
addLevelingId(sender)
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {quoted: mek, thumbnail: null, caption: linguagem.registroByTobiHehe(serialUser, time, pushname, sender)})
addATM(sender)
addLevelingId(sender)                  
}
}

/********** REGISTRO **********/
if ((budy === "login") || (budy === "Login") || (budy === "Login")) {
tobi.updatePresence(from, Presence.composing)
if (isUser) return enviar(`📌 *Você já está registrado*`)
const namaUser = q.substring(0, q.indexOf('/') - 0)
const serialUser = createSerial(20)
enviar(`${ll}...*❌ Esᴘᴇʀᴇ ❌*...${ll}`)
try {
var ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buff = await getBuffer(ppimg)
if (m.isGroup) {
addRegisteredUser(sender, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {quoted: mek, thumbnail: null, caption: linguagem.registroByTobiHehe(serialUser, time, pushname, sender)})
addATM(sender)
addLevelingId(sender)
} else {
addRegisteredUser(from, pushname, time, serialUser)
await tobi.sendMessage(from, buff, image, {quoted: mek, thumbnail: null, caption: linguagem.registroByTobiHehe(serialUser, time, pushname, sender)})
addATM(sender)
addLevelingId(sender)                  
}
}

//-TIME TEMPO ONLINE
if (selectedButton == `nãoDaEsseMekAiManoGay`) {
uptime = process.uptime();
tobi.sendMessage(from, `*${temporizado(uptime)}*`, MessageType.text, {quoted: mek})
}

/********** EVAL CMDS **********/
if (budy.startsWith('>')){
if(!isOwner) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return enviar(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
enviar(`${e}`)
}
}

/********** COMANDOS SEM PREFIX, BR TOBI **********/
if (!mek.key.fromMe) {
if (isAutoConversar) {
if ((budy.match("Pq")) || (budy.match("pq"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Pq_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("hentai")) || (budy.match("Hentai"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/hentai_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Analise")) || (budy.match("analise"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/Analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Sexo")) || (budy.match("sexo"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sexo_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Não")) || (budy.match("não"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/sim_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("🤔"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/analise_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("😭"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/chorando_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Mentira")) || (budy.match("mentira"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/verdade_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}

if ((budy.match("Bye")) || (budy.match("bye")) || (budy.match("Tchau")) || (budy.match("tchau"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/bye_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match("🙈")) || (budy.match("🙉")) || (budy.match("🙊")) || (budy.match("🐵")) || (budy.match("🐒"))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/audios/macaco_audio.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

if ((budy.match(`@${me.jid.split('@')[0]}`))) {
mett = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
res = mett[Math.floor(Math.random() * mett.length)]
if (res == "1") {
result = fs.readFileSync(`./base de dados/database/figurinhas/tag_sticker.webp`)
tobi.sendMessage(from, result, sticker, {quoted: mek})}}
}
}

if (!mek.key.fromMe) {
switch(autoResposta) {
case 'prefix':
pre = `O prefixo usado é : *${variosPrefixo ? `${prefixo}` : multi ? 'Multi prefixos' : 'Sem prefixo'}*`
enviar(String(pre))
console.log(pre)
break

case 'bot':
case 'loli':	
tobi.updatePresence(from, Presence.composing)
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/database/audios/loliAudios` + res + `.mp3`)
tobi.sendMessage(from, result, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
break

case '=>':
if (!isOwner) return 
var konsol = budy.slice(3)
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(String(e))
}
break
}
}


/********** TODOS OS CMD APARTI DAQUI **********/
switch(comando) {
	
/********** MENUS AQUI **********/
case 'menu':
case 'help':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, help(ll, p, hr, pushname, prema, checATM, useLevel, useXp, requireXp, patt, bateria, porcentagem, totalchat, me, reqcmd, _registro), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}logos`, buttonText: {displayText: `🎯 MENU LOGOS 🏝️`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'logos':
case 'logo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.logosMarker(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}playrs`, buttonText: {displayText: `🌙 MENU PLAYRS 🦋`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'playrs':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
sendButImage(from, linguagem.playrs(pushname, hr, allchats, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}grupo`, buttonText: {displayText: `☔ MENU GRUPO 👨`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'grupo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.menu2(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}jogos`, buttonText: {displayText: `❤️ MENU JOGOS ☔`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'jogos':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.jogos(pushname, hr, allchats, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}criador`, buttonText: {displayText: `☔ MENU CRIADOR 🌙`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'criador':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
sendButImage(from, linguagem.dono(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}animes`, buttonText: {displayText: `☔ MENU ANIMES 🌸️`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'animes':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.animes(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}bankloja`, buttonText: {displayText: `💲 MENU BANKLOJA 💱`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break;

case 'bankloja':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.bankloja(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}premium`, buttonText: {displayText: `🌙 MENU PREMIUM 🦋`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break

case 'premium':  
case 'prem':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.premium(pushname, hr, totalchat, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}figurinhas`, buttonText: {displayText: `🌙 MENU FIGURINHAS ☔`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break;

case 'figurinhas':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButImage(from, linguagem.figurinhas(pushname, hr, allchats, bateria, ll), linguagem.lolizitaInfo(totalchat, charge, baterai, latensi, horaOn, os), await getBuffer(aurlSexo), [{buttonId: `${p}logos`, buttonText: {displayText: `🎯 MENU LOGOS 🏝️`}, type: 1}, {buttonId: `${isRegistered ? `${p}info perfil` : `Rg`}`, buttonText: {displayText: `${isRegistered ? `🌙 MEU PERFIL 🍻` : `🌸 REGISTRAR 🐳`}`}, type: 1}]);
break
/********** FIM **********/

case 'dono':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (m.isGroup) enviar("❌ Aguarde! Cᴏɴᴛᴀᴛᴏ ᴇɴᴠɪᴀᴅᴏ ɴᴏ sᴇᴜ ᴘʀɪᴠᴀᴅᴏ. ❌")
tobi.sendMessage(sender, 'Esᴛᴇ ᴇ́ ᴍᴇᴜ ᴄʀɪᴀᴅᴏʀ [(>_<)] Cᴀsᴏ ᴛᴇɴʜᴀ ᴀʟɢᴜᴍᴀ ᴅᴜᴠɪᴅᴀ ғᴀʟᴇ ᴄᴏᴍ ᴇʟᴇ',MessageType.text, {quoted: mek})
tobi.sendMessage(sender, {displayname: "Jeff", vcard: vcard}, MessageType.contact, {quoted: mek})
break

case 'banir':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber} ${emoji_bot}`)
if (args[0].startsWith(`@${OwnerNumber}`)) return enviar(`Eu não posso enviar banir meu criador ${OwnerNumber} 😞`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
sexo = mek.message.extendedTextMessage.contextInfo.mentionedJid
proibir = sexo.length > 1 ? true : false
if (proibir) return sendButMessage(from, `*_🗣️ ${me.name}™_*`, `${linguagem.erroEncontrado()}\n${linguagem.erroTag()}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
if (sexo.length > 1) {
teks = 'Alvo removido com sucesso :\n'
for (let _ of sexo) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, sexo, true)
tobi.groupRemove(from, sexo)
} else {
mentions(`❌ Alvo removido com sucesso : @${sexo[0].split('@')[0]} ❌`, sexo, true)
tobi.groupRemove(from, sexo)
}
break

case 'add':
case 'reviver':
try {
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await tobi.groupAdd(from, [entah])
linkgc = await tobi.groupInviteCode(from)
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('❌ O alvo já está no grupo! ❌') 
if(inv[0].code == 403) return enviar('❌ Erro, conta privada do usuário ❌')
if(inv[0].code == 408) return enviar('❌ Erro, usuário acabou de sair ❌')
if(inv[0].code == 401) return enviar('❌ Erro, porque o bot está bloqueado pelo alvo ❌')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await tobi.groupAdd(from, [entah])
o = response.participants[0]
linkgc = await tobi.groupInviteCode(from)
let inv = (Object.values(o))
if(inv[0].code == 409) return enviar('❌ O alvo já está no grupo! ❌')
if(inv[0].code == 403) return enviar('❌ Erro, conta privada do usuário ❌')
if(inv[0].code == 403) return enviar('❌ Falhou, porque em privado ❌')
if(inv[0].code == 408) return enviar('❌ Falha, porque o alvo acabou de sair ❌')
if(inv[0].code == 401) return enviar('❌ Falha, porque o bot está bloqueado pelo alvo ❌')
}
} catch {
return 
}
break

case 'promover':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber} ${emoji_bot}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
sexo = mek.message.extendedTextMessage.contextInfo.mentionedJid
proibir = sexo.length > 1 ? true : false
if (proibir) return sendButMessage(from, `*_🗣️ ${me.name}™_*`, `${linguagem.erroEncontrado()}\n${linguagem.erroTag()}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
if (sexo.length > 1) {
teks = 'Promovido com sucesso\n'
for (let _ of sexo) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, sexo, true)
tobi.groupRemove(from, sexo)
} else {
mentions(`❌ Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} agora é admin do grupo! ❌`, sexo, true)
tobi.groupMakeAdmin(from, sexo)
}
break

case 'rebaixar':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} @${OwnerNumber} ${emoji_bot}`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
sexo = mek.message.extendedTextMessage.contextInfo.mentionedJid
proibir = sexo.length > 1 ? true : false
if (proibir) return sendButMessage(from, `*_🗣️ ${me.name}™_*`, `${linguagem.erroEncontrado()}\n${linguagem.erroTag()}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
if (sexo.length > 1) {
teks = 'Rebaixado com sucesso\n'
for (let _ of sexo) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, sexo, true)
tobi.groupRemove(from, sexo)
} else {
mentions(`${emoji_bot} Ok, chefe. esse cara aqui: @${mentioned[0].split('@')[0]} perdeu o adm com sucesso! ${emoji_bot}`, sexo, true)
tobi.groupDemoteAdmin(from, sexo)
}
break

case 'kick':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
kick = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupRemove(from, [kick])
await enviar(linguagem.banido())
break

case 'promote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
promoverGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupMakeAdmin(from, [promoverGay])
tobizinhokkkk = mek.message.extendedTextMessage.contextInfo.participant
enviar(`${emoji_bot} Esse macaco *@${tobizinhokkkk.split('@')[0]}*... agora é admintrador ${emoji_bot}`)
break

case 'demote':
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
rebaixarGay = mek.message.extendedTextMessage.contextInfo.participant
tobi.groupDemoteAdmin(from, [rebaixarGay])
kapiuugvb = mek.message.extendedTextMessage.contextInfo.participant
enviar(`${emoji_bot} Pronto, Esse macaco *@${kapiuugvb.split('@')[0]}*... perdeu seu cargo de admintrador ${emoji_bot}`)
break 

case 'addprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `${emoji_bot} @${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium com sucesso ${emoji_bot}`
mentions(`${susp}`, mentioned, true)   
break

case 'dellprem': 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
susp = `${emoji_bot} @${mentioned[0].split('@')[0]} foi removido da lista de usuários premium ${emoji_bot}`
mentions(`${susp}`, mentioned, true)   
break

case 'group': //by resen e Tobi
case 'grup':
case 'gp':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Sintaxe correta: ${p + comando} abrir/fechar ${emoji_bot}`)
if (args[0].toLowerCase() == 'abrir') { 
enviar(`${emoji_bot} Grupo aberto com sucesso ${emoji_bot}`)
tobi.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0].toLowerCase() == 'fechar') {
await tobi.groupSettingChange(from, GroupSettingChange.messageSend, true)
enviar(`${emoji_bot} Grupo fechado com sucesso ${emoji_bot}`)
}
break                  

case 'totag':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4', duration: 999999999,
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
 } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/gif',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'text/plain',
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, document, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await tobi.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4', duration: 999999999,
contextInfo: { mentionedJid: mem },
quoted: mek
}
ini_buffer = fs.readFileSync(file)
tobi.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`${emoji_bot} Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${p + comando} ${emoji_bot}`)
}
break

case 'setnome':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Novo nome do grupo> ${emoji_bot}`)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
tobi.groupUpdateSubject(idgrup, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot}  Nome do grupo alterado ${emoji_bot}`, text, {quoted: mek})
break

case 'setdesk':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args.length < 1) return enviar(`${emoji_bot} Use: ${p + comando} <Nova Descrição> ${emoji_bot}`)
tobi.groupUpdateDescription(from, `${body.slice(9)}`)
tobi.sendMessage(from, `${emoji_bot} Descrição do grupo alterada ${emoji_bot}`, text, {quoted: mek})
break

case 'setppgc':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isQuotedImage) return enviar(`${emoji_bot} Use: ${p + comando} <Marque uma foto> ${emoji_bot}`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const medipp = await tobi.downloadAndSaveMediaMessage(ftgp)
await tobi.updateProfilePicture (from, medipp)
enviar(`${emoji_bot}  foto do grupo alterada ${emoji_bot}`) 
break

case 'delete': 
case 'del':
case 'apagar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
try {
tobi.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
} catch {
enviar(`${emoji_bot} Só é possível deletar mensagens minhas ${emoji_bot}`)
}
break

case 'marcar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isGroupAdmins) return enviar(linguagem.admin())
if (!isBotGroupAdmins) return stickerAdm(from)
members_id = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(' '+todos+' ', members_id, true)
break

case 'info': //by resen e Tobi
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(`${emoji_bot} Use ${p + comando} <Grupo ou Perfil> ${emoji_bot}`)
if (args[0].toLowerCase() == 'grupo') {
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
ppUrl = await tobi.getProfilePicture(from) 
buffer = await getBuffer(ppUrl)
infoGrupTob = `
📛 *Nome* : ${groupName}
👤 *Dono do Grupo* : @${from.split("-")[0]}
👥 *Membro* : ${groupMembers.length}
👥 *Admin* : ${groupAdmins.length}

⬣ Welcome : ${isWelcome ? 'Ativado':'Desativado'}
⬣ Anti Link : ${isAntiLink? 'Ativado':'Desativado'}
⬣ Anti Fake : ${isAntifaker? 'Ativado':'Desativado'}
⬣ Self Chat : ${isAutoConversar? 'Ativado':'Desativado'}
⬣ Anti Flod : ${isAntiflod? 'Ativado':'Desativado'}
⬣ Levelling : ${isLevelingOn? 'Ativado':'Desativado'}

💬 Descrição do grupo :
\`\`\`${groupDesc}\`\`\``
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: infoGrupTob})
} else if (args[0].toLowerCase() == 'perfil') {
const isXpLevel = getLevelingLevel(sender)
const isXp = getLevelingXp(sender)
const isHours = getRegisterTime(sender) 
const serh = getRegisterSerial(sender)
const idad = getRegisterAge(sender)
const regin = getRegisterName(sender)
const requirXp = 500 * (Math.pow(2, isXpLevel) - 1)
const moneyDin = checkATMuser(sender)
const perfilMoney = checkATMuser(sender, moneyDin)
const teste64 = sender
const teste65 = await tobi.getStatus(teste64, MessageType.text)
try {
ppimg = await tobi.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
sendButImage(m.chat, linguagem.nameByTobi(me), linguagem.infoPerfil(pushname, isXpLevel, isXp, requirXp, sender, perfilMoney, isHours, patt), linguagem.buffer(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'listadmins': 
case 'listadmin':
case 'adminlist':
case 'listadm':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(adl, groupAdmins, true)
break

case 'linkgp': 
case 'link':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (args[0] === 'grupo') {
linkgc = await tobi.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
} else if (args[0] === 'pv') {
if (m.isGroup) enviar(`${emoji_bot} ${comando} enviado no seu pv ${emoji_bot}`)
linkgc = await tobi.groupInviteCode(from)
tobi.sendMessage(sender, 'https://chat.whatsapp.com/'+linkgc, MessageType.text)
} else if (args[0] === 'wame') {
tobi.sendMessage(from, linguagem.apiWame(sender), MessageType.text, {quoted: mek})
} else {
buffer = await getBuffer("https://telegra.ph/file/b82f523112d81d43340cc.jpg");
sendButImage(m.chat, linguagem.nameByTobi(me), mess.chooseTheType(), buffer, [{buttonId: `${p}linkgp grupo`, buttonText: {displayText: "🗣️ Lɪɴᴋ Gʀᴜᴏᴘ ⚠︎"}, type: 1}, {buttonId: `${p}linkgp pv`, buttonText: {displayText: `🗣️ Lɪɴᴋ Pʀɪᴠᴀᴛᴇ ⚠︎`}, type: 1}, {buttonId: `${p}linkgp wame`, buttonText: {displayText: `🗣️ Lɪɴᴋ Wᴀᴍᴇ ⚠︎`}, type: 1}], {quoted: mek})
}
break

case 'hidetag':
addFilter(from)
tobi.updatePresence(from, Presence.composing)  
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break

case 'ajuda':
let botao = tobi.prepareMessageFromContent(from, {"listMessage": {"title": `\n╭━━━━──「★」──━━━╮\n│︎ *ᴛᴏᴅᴏs ᴏs ᴍᴇɴᴜ* 👤⃟ き\n╰┬━━━━── • ──━━━┈ ⳹\n┌┤ *_ESSE É O MENU_* \n││ *_GERAL DA_*\n││ _*${me.name}*_\n│╰━─━─━─━◈━─━─━─\n╰━━━━━── • ──━━━━┈⳹`, "description": "\`\`\`_Aperte em_ *MENU* _Para Receber os Comandos_\`\`\`", "buttonText": "ᴍᴇɴᴜ", "listType": "SINGLE_SELECT", "sections": [{ "rows": [{ "title": "✙◗ Help", "description": "\`\`\`▢ 📛 Para receber o menu completo 📛 ▢\`\`\`", "rowId": `${p}menu` }, {"title": "✙◗ Playrs", "description": "\`\`\`▢ 🎵 Menu de Músicas 🎵 ▢\`\`\`", "rowId": `${p}Playrs` }, { "title": "✙◗ Grupo", "description": "\`\`\`▢ 😏 Menu dos Adms 😏 ▢\`\`\`", "rowId": `${p}Grupo`}, {"title": "✙◗ Jogos", "description": "\`\`\`▢ 🎮 Menu de Jogos 🎮 ▢\`\`\`", "rowId": `${p}Jogos`}, {"title": "✙◗ Criador", "description": `\`\`\`▢ ️👨🏻‍✈️ Menu do ${SeuNome} 👨🏻‍✈️ ▢\`\`\``, "rowId": `${p}Criador`}, {"title": "✙◗ Animes", "description": "\`\`\`▢ 🔥 Menu Animes/+18 🔥 ▢\`\`\`", "rowId": `${p}Animes`}, {"title": "✙◗ Bankloja", "description": "\`\`\`▢ 💰 Menu de Banco 💰 ▢\`\`\`", "rowId": `${p}Bankloja`}, {"title": "✙◗ Premium", "description": "\`\`\`▢ 💫 Menu dos Premiuns 💫 ▢\`\`\`", "rowId": `${p}Premium`}, {"title": "✙◗ Figurinhas", "description": "\`\`\`▢ 🌳 Menu de Figurinhas 🌳 ▢\`\`\`", "rowId": `${p}Figurinhas`}, ]}]}}, {quoted:mek})
tobi.relayWAMessage(botao)
break

case 'eval':
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m EVAL \x1b[1;37m]', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
eval(q)
} catch (err) {
enviar(`${err}`)
}
break

case 'welcome':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isWelcome) return enviar('*[❗] ja esta ativado amigo...*')
welcome.push(from)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = welcome.indexOf(welcome.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
welcome.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/welcome.json', JSON.stringify(welcome))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isWelcome ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isWelcome ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isWelcome ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'leveling':
case 'leveis':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isLevelingOn) return enviar('*[❗] ja esta ativado amigo...*')
_leveling.push(from)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = _leveling.indexOf(_leveling.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
_leveling.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/leveling.json', JSON.stringify(_leveling))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isLevelingOn ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isLevelingOn ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isLevelingOn ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'antilink':
case 'antilinks':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isAntiLink) return enviar('*[❗] ja esta ativado amigo...*')
antilink.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = antilink.indexOf(antilink.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antilink.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antilink.json', JSON.stringify(antilink))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isAntiLink ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isAntiLink ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isAntiLink ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'antifake':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isAntifaker) return enviar('*[❗] ja esta ativado amigo...*')
antifaker.push(from)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = antifaker.indexOf(antifaker.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antifaker.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/antifaker.json', JSON.stringify(antifaker))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isAntifaker ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isAntifaker ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isAntifaker ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'simih':
case 'selfchat':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isAutoConversar) return enviar('*[❗] ja esta ativado amigo...*')
autconversa.push(from)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = autconversa.indexOf(autconversa.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
autconversa.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/autconversa.json', JSON.stringify(autconversa))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isAutoConversar ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isAutoConversar ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isAutoConversar ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'antiflod':
case 'antiflods':
if (!isGroup) return enviar(linguagem.group())
if (!isBotGroupAdmins) return stickerAdm(from)
if (!isGroupAdmins) return enviar(linguagem.admin())
if (args[0] === 'on') {
if (isAntiflod) return enviar('*[❗] ja esta ativado amigo...*')
antiflod.push(from)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
let position = antiflod.indexOf(antiflod.find((x) => x === from))
if (position === -1) return enviar(`${comando} não estava ativo antes`)
antiflod.splice(position, 1)
fs.writeFileSync('./base de dados/database/arquivos/_antiflod.json', JSON.stringify(antiflod))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isAntiflod ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isAntiflod ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isAntiflod ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

//<~FIM DOS COMANDOS EM GRUPOS

//<~COMEÇO DOS COMANDOS STICKERS
case 'f':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'stiker':
case 'f':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
mortandela(m.chat)
console.log(`Iniciado : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(SeuNome)} ${ran} -o ${ran}`, async (error) => {
if (error) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(m.chat)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
mortandela(m.chat)
console.log(`Iniciado : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(SeuNome)} ${ran} -o ${ran}`, async (error) => {
if (error) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
mortandela(m.chat)
keyrmbg = 'Your-ApiKey'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
exec(`webpmux -set exif ${addMetadata(SeuNome)} ${ranw} -o ${ranw}`, async (error) => {
if (error) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.on('start', function (cmd) {
mortandela(m.chat)
console.log('Started :', cmd)
})
.on('error', function (err) {
fs.unlinkSync(media)
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
console.log('Error :', err)
})
.on('end', function () {
console.log('Finish')
fs.unlinkSync(media)
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Envie uma imagem com a legenda ${p}sticker ou imagem marcada já enviada`)
}
break

case 'sfundo':  
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await tobi.downloadMediaMessage(encmedia1)
const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `🔮 ${me.name}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `💎 @${pushname}._`
var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
tobi.sendMessage(from, st, sticker, {quoted: mek})
} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await tobi.downloadAndSaveMediaMessage(encmedia2, `./src/sticker/${sender}`)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${SeuNome}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${me.name}`
const Nombre2 = `${satu}` 
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
mortandela(m.chat)
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`❎ Falha, no momento da conversão de ${type} em adesivo`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./src/sticker/stickwm_${sender}.exif ./src/sticker/${sender}.webp -o ./src/sticker/${sender}.webp`, async (error) => {
if (error) return enviar('error')
sendSticker(from, fs.readFileSync(`./src/sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./src/sticker/${sender}.webp`)
fs.unlinkSync(`./src/sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./src/sticker/${sender}.webp`)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'st':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(m.chat)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
mortandela(m.chat)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
tobi.sendMessage(from, buffer, sticker, {
quoted: mek
})
fs.unlinkSync(rano)
})
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'stk':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(m.chat)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
mortandela(m.chat)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function() {
exec(`webpmux -set exif ${addMetadata(`${SeuNome}`)} ${ran} -o ${ran}`, async(error) => {
if (error) return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.erroFigurinhas(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, fs.readFileSync(ran), sticker, {
quoted: mek
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 'toimg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker não animado para isso ${emoji_bot}`)
mortandela(m.chat)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await tobi.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} falha ao converter sticker em imagem ${emoji_bot}`)
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null})
fs.unlinkSync(ran)
})
break

case 'togif':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker animado para isso ${emoji_bot}`)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await tobi.downloadAndSaveMediaMessage(encmediaaa)
mortandela(m.chat)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tobi.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, thumbnail: null})
fs.unlinkSync(mediaaa)
}
break

//<~COMEÇO DOS COMANDOS AUDIOS
case 'play':
try {
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
res = await yts(q)
teks = `
🎯 *Título:* ${res.all[0].title}
📼 *ID Video:* ${res.all[0].videoId}
📆 *Data da postagem :* ${res.all[0].ago}
♨️ *Visualizações :* ${res.all[ 0].views}
⏳ *Duração:* ${res.all[0].timestamp}
📁 *Canal:* ${res.all[0].author.name}
📊 *Link do Canal:* ${res.all[0].author.url}`
buffer = await getBuffer(res.all[0].image)
sendButImage(from, teks, `${ll}Escolha entre as tres opções.${ll}`, buffer, [{buttonId: `${p}play2 ${q}`, buttonText: {displayText: `☔ AUDIO 🎵`,}, type: 1}, {buttonId: `${p}playvid2 ${q}`, buttonText: {displayText: `🎮 VIDEO 💗`}, type: 1}, {buttonId: `${p}play3 ${q}`, buttonText: {displayText: `🎰 DOCUMENTO 📁`}, type: 1}]);
} catch (err) {
enviar(String(err))
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'play1':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
res = await yts(q)
teks = `
╭━━ ⪩
▢ き⃟🧧 Youtube Search 🧧⃟ き
▢ ╭═══⊷
▢ ⌁ 🎯 *Título:* ${res.all[0].title}
▢ ⌁ 📼 *ID Video:* ${res.all[0].videoId}
▢ ⌁ 📆 *Data da postagem :* ${res.all[0].ago}
▢ ⌁ ♨️ *Visualizações :* ${res.all[ 0].views}
▢ ⌁ ⏳ *Duração:* ${res.all[0].timestamp}
▢ ⌁ 📁 *Canal:* ${res.all[0].author.name}
▢ ⌁ 📊 *Link do Canal:* ${res.all[0].author.url}
▢ ╰═══⊷
╰━━━ ⪨`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: teks})
res = await y2mateA(res.all[0].url)
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
} catch {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'play2': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
res = await yts(q)
res = await y2mateA(res.all[0].url)
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
} catch (err) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'play3': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
teks = args.join(' ')
mortandela(m.chat)
res = await yts(q)
res = await y2mateA(res.all[0].url)
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/m4a', filename: res[0].output})
} catch (err) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'playvid':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
res = await yts(q)
enviar(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `❒「  *${me.name}*  」
🎯 *Título:* ${res.all[0].title}
📼 *ID Video:* ${res.all[0].videoId}
📆 *Data da postagem :* ${res.all[0].ago}
♨️ *Visualizações :* ${res.all[0].views}
⏳ *Duração:* ${res.all[0].timestamp}
📁 *Canal:* ${res.all[0].author.name}
📊 *Link do Canal:* ${res.all[0].author.url}

*_Aguarde o processo de download....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateV(res.all[0].url)
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
} catch {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playVideoErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'playvid1':  
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/video?video=${q}`)   
lagu = await getBuffer(anu.Link_De_Download)
tobi.sendMessage(from, lagu, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
} catch {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playVideoErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'playvid2': //a
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
res = await yts(q)
res = await y2mateV(res.all[0].url)
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
} catch {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.playVideoErro(p), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'tomp3':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
tobi.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return enviar(`Marque um vídeo com ${p}tomp3`)
mortandela(m.chat)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await tobi.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
fs.unlinkSync(duh)
if (err) return enviar('❌falha ao converter video para mp3❌')
buffer = fs.readFileSync(ran)
tobi.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break

case 'rapido':  
case 'nightcore':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bmedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bmedia} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bmedia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

case 'devagar': 
case 'slow':
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tobi.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'esquilo':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tobi.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'gemuk': 
case 'gigante':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tobi.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'fast': 
case 'rapid':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
amedia = await tobi.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${amedia} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(amedia)
if (err) return enviar('Erro')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'baixo': 
case 'bass':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'earrape': 
case 'estourar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)       
if (!isQuotedAudio) return enviar('Marque um áudio')
mortandela(m.chat)
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tobi.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

case 'ytsearch':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (args.length < 1) return enviar(resposta.play)
mortandela(m.chat)
const srch = args[0];
try {
var aramas = await yts(srch);
} catch {
return await tobi.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
});
ytresult += `◩ *${me.name}*`
await tobi.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg'),quoted: mek, caption: ytresult})
break

case 'sombrio':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mehdia = await tobi.downloadAndSaveMediaMessage(encmmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mehdia)
if (err) return enviar('Error!')
hah = fs.readFileSync(ran)
tobi.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break

//<~COMEÇO DOS COMANDOS DE JOGOS
case 'slot':
case 'sexokslot':
var somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == '🥑 : 🥑 : ??') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : ?? : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '?? : 🥥 : ??') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : ?? : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
if (!bater) {
bateriaLoliIta = `${tempo}`
}
if (bater) {
bateriaLoliIta = `bateria em : *${bater}*`
}
const buttons = [{buttonId: `${p}sexokslot`, buttonText: {displayText: `🎰 NEXT SLOT 🎰`}, type: 1}]
const buttonMessage = { contentText: 
`Consiga 3 iguais para ganhar
╭╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚╾╾╾╾ ≪ •❈• ≫ ╾╾╾╾╝

${vitr}`, footerText: `${bateriaLoliIta}`, buttons: buttons, headerType: 1}
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
enviar(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
tobi.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
break

case 'preto':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
d = []
teks = `O mais *${comando}* é : `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'sorteio':
case 'sortear':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
d = []
teks = `_*🗣️ Parabéns por ganhar ${q}:_* `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
break

case 'amongus':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus = 
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
mentions(`${sus}`, mentioned, true)
break

case 'getn':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque uma mensagem do alvo!')
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = tobi.contacts[ambl] != undefined ? tobi.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : tobi.contacts[ambl].notify || tobi.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
enviar(sname)
break

case 'getname':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(`Tag alguém`)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const arroz = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
nome = `${arroz ? `${arroz}` : "Erro"}`
tobi.sendMessage(from, nome, text, {quoted: mek})	
break

case 'dado':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/datauser/dados/'+dadu+'.webp')
tobi.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tagme':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
const tagme = {text: `@${sender.split("@")[0]} 🧙‍♂️`, contextInfo: {mentionedJid: [sender]}}
tobi.sendMessage(from, tagme, text)
break

case 'cassino':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing) 
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🍒',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : ?? : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🔔',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '?? : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '?? : 🍇 : 🍇')) {
var Vitória = "Você ganhou!!!"
} else {
var Vitória = "Você perdeu..."
}
if (!bater) {
bateriaLoliIta = `bateria: Não disponível!`
}
if (bater) {
bateriaLoliIta = `bateria em : *${bater}*`
}
const cassinoButtons = [{buttonId: `${p}cassino`, buttonText: {displayText: `Next`}, type: 1}]
const buttonkMessage = {
contentText: 
`
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`,
footerText: `${bateriaLoliIta}`, buttons: cassinoButtons, headerType: 1}
tobi.sendMessage(from, buttonkMessage, MessageType.buttonsMessage, {quoted: mek})
if (Vitória == "Você ganhou!!!") {
dinherocassino = Math.floor(Math.random() * 14) + 10000
addKoinUser(sender, dinherocassino)
setTimeout( () => {
enviar(`Parabéns você ganhou *${dinherocassino}* dinheiro 💰💎`)
}, 1100)
}
break

case "ppt": 
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (args.length < 1) return enviar(linguagem.tterro())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break

case 'gado':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil)
break

case 'sn':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return tobi.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break

case 'chance':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
tobi.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tobi.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
tobi.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'ttt':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
const limitrl = getLimit(sender, daily)
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "on") {
enviar(`
「❗ESPERE❗ 」

 Alguém já está jogando no momento
 Por favor aguarde 8 minutos`)
} else if (tttset.waitingTime == "on") {
enviar(`
「❗ESPERE 8 MINUTOS❗ 」

Alguém jogou recentemente
Por favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`
「❗Defina a dificuldade❗ 」

${p}ttt easy
Dificuldades: easy, normal... 
hard e impossible....`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
enviar(`
「❗ESPERE❗」

Opa, deixe seus amigos jogarem.
também, tente novamente Em 8 minutos.`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`╭◪「❗COMEÇOU❗ 」╰───────────────╮  \n╭───────────────╯\n├❏ O Jogo Começou!!!\n├❏ Modo: ${tttset.tttdifficulty}\n╰───────────────╯`, text, tescuk, crtt)
tobi.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tobi.sendMessage(from,`Caso não saiba como jogar digite: ${p}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'level':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.levelOff(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${up_porcenntagem}`}}}
tobi.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, patt, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break

case 'ranklevel':
case 'nivelrall':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isLevelingOn) return enviar(resposta.leveis)
let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = `*〈👾 Rᴀɴᴋ Lᴇᴠᴇɪs 👾〉*\n\n`
let nom = 0
try {
for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `⪧ ⃝༘⃕ꪶ📱ꫂ @${userh[i].id.replace('@s.whatsapp.net', '')}\n⪧ ⃝༘⃕ꪶ👾ꫂ 𝚇ᴘ: ${userh[i].xp}\n⪧ ⃝༘⃕ꪶ🌀ꫂ 𝙻ᴇᴠᴇʟ: ${userh[i].level}\n\n`
}
tobi.sendMessage(from, leaderboardlvl, text, {quoted: mek})
} catch (err) {
console.error(err)
await enviar(`pelo menos 10 usuários para poder acessar o banco de dados`)
}
break

case 'coord':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
tttset.playertest = sender
if (!isGroup) {
enviar(linguagem.group())
} else if (tttset.tttstatus == "off") {
enviar(`Você ainda não iniciou o jogo\nDigite ${p}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite o comando com uma coordenada\nExemplo: ${p}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você ganhou no jogo da velha\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você Ganhou.`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "??"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tobi.sendMessage(from, `『❗』Parabens *${pushname}* Você perdeu.\n\n➣  PUNIÇÃO: +${randomTTTXP} XP 🔮`, text)
} else {
tobi.sendMessage(from, `『❗』Vitoria da *${me.name}* Você Perdeu amigo!`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "??"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${me.name}*\n\n ➣ NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
tobi.sendMessage(from, `『❗』Empate entre *${pushname}* e *${me.name}*`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'ttthelp':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
tobi.sendMessage(from, ttthelp(p), text, {quoted:mek})
break

case 'tttme':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tobi.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 7; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 3) {board += `${i + 1}º 🏆 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} ??\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 4) {board += `${i + 1}º 💎 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 5) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} ??\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
} else if (i == 6) {board += `${i + 1}º 🐂 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n║ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n║ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n║ ➣ Empates: ${tictactoe[i].ties} 🌀\n║ ➣ Pontos: ${tictactoe[i].points} ✨\n╚╾╾╾╾╾⊷╾╾╾╾╾⊷╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tobi.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'pau':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
break
   
case 'gay':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'roleta':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./base de dados/database/figurinhas/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
tobi.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
tobi.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

case 'caracoroa':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
const cara = fs.readFileSync('./base de dados/datauser/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/datauser/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/datauser/cara/'+fej+'.webp')
tobi.sendMessage(from, cararoa, sticker, {quoted: mek})
break
//<~FIM DOS COMANDOS DE JOGOS

//<~COMEÇO DOS HENTAI
case 'zoro':
case 'nami':
case 'carrot':
case 'buggy':
case 'shanks': 
case 'sakura':
case 'hinata':
case 'madara': 
case 'sasuke':
case 'obito':
case 'shikamaru':
case 'shikaku':
case 'shikadai':
case 'asuma': 
case 'luffy':
case 'ace':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
mortandela(m.chat)
pw = [`wallpaper ${comando}`, `HD ${comando}`, `${comando} Anime`, `${comando} kawaii`, `${comando} Tumblr`, `${comando} Png`, `${comando} Fanart`, `${comando} icon funny`]
teks = pw[Math.floor(Math.random() * pw.length)]
res = await googleImage(teks, google)
function google(error, result){
if (error){ return sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break

case 'holo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private())  
res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'erofeet':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'trap':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'eron':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'anal':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'ero':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'cum':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'les':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'holoero':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case  'hentai':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
try {
tk = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(tk.url)
tobi.sendMessage(sender, buffer, image, {quoted: mek, thumbnail:null})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'eroyuri':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'hentain':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case  'neko':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
try {
znn = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(znn.url)
tobi.sendMessage(sender, buffer, image, {caption: `${comando}, certo?`, quoted: mek, thumbnail:null})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'lewd':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'solog':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'feet':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'feetg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'classic':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'erokemo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'futanari':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'femdom':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'blowjob':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'pwankg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'lewdk':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case'boobs':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'spank':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'trapnime':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
try {
tobir = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(tobir.url)
tobi.sendMessage(sender, buffer, image, { quoted: mek, thumbnail:null})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'solo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'erok':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'feed':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'hololewd':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'lewdkemo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
try {
if (!isGroup) mortandela(m.chat)
if (m.isGroup) enviar(linguagem.Private()) 
res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
tobi.sendMessage(sender, buf, MessageType.image, {quoted: mek, thumbnail:null})
})
})
} catch (e) {
if(console.log == "marker was not found")
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break
//<~FIM DOS COMANDOS DE HENTAI

//<~COMEÇO DOS COMANDOS ANIMES
case 'shotas':
try {
buffer = await getBuffer("https://lolizit-api.herokuapp.com/api/" + comando + "?apikey=" + compreSuaApikey)
const media = await tobi.prepareMessage(from, buffer, MessageType.image, {thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p + comando}`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}Loli`, buttonText: {displayText: '🍻 ＮＥＸＴ ＬＯＬＩ🌙'}, type: 1}]
const btn1 = {contentText: `*『${me.name}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
tobi.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'loli':
mortandela(m.chat)
try {
buffer = await getBuffer("https://lolizit-api.herokuapp.com/api/" + comando + "?apikey=" + compreSuaApikey)
var mediakkkTobi = await tobi.prepareMessage(from, buffer, MessageType.image, { thumbnail: null})
var qweriioByTobi = mediakkkTobi.message["ephemeralMessage"] ? mediakkkTobi.message.ephemeralMessage : mediakkkTobi
const nextloliByTobi = [{buttonId: `${p}loli`, buttonText: {displayText: '🍻 ＰＲＯＸＩＭＡ🌙'}, type: 1}, {buttonId: `${p}waifu`, buttonText: {displayText: '🍻 ＮＥＸＴ ＷＡＩＦＵ🌙'}, type: 1}]
const btn1ByTobi = {contentText: `*『${me.name}™』*\n\n${ll}${pushname} Quer outra imagem? ._. ${ll}`, footerText: `${mtSexo}`, buttons: nextloliByTobi, headerType: 4, imageMessage: qweriioByTobi.message.imageMessage}
tobi.sendMessage(from, btn1ByTobi, MessageType.buttonsMessage, {quoted: mek})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'waifu':
try {
addFilter(from)
mortandela(m.chat)
tobi.updatePresence(from, Presence.composing)
axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
sendButImage(from, linguagem.nameByTobi(me), linguagem.photoFound(comando), buf, [{buttonId: p + comando, buttonText: {displayText: linguagem.anotherPicture()}, type: 1}])})})
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'megumin':
try {
mortandela(m.chat)
buffer = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
sendButImage(from, linguagem.nameByTobi(me), linguagem.photoFoundMegumin(comando), buffer, [{buttonId: p + comando, buttonText: {displayText: linguagem.anotherPicture()}, type: 1}])
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'pinterest':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
mortandela(m.chat)
teks = `${q}`
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `${teks}`, thumbnail: null})
}
}
break
//<~FIM DOS COMANDOS DE ANIMES

//<~COMEÇO DOS COMANDOS DO DONO
case 'bateria':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.sendMessage(from, linguagem.bateria(baterai, porcentagem), text, {contextInfo: fotothumb, quoted: mek})
break

case 'bc':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (args.length < 1) return enviar('Cadê o texto?')
tobis = await tobi.chats.all()
for (let _ of tobis) {
tobi.sendMessage(_.jid, `${q}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Transmissão De Aviso`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
enviar('Transmissão enviada com sucesso')
break

case 'bcstik':
case 'bcfig':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isQuotedSticker) return enviar('Marque uma figurinha!!!')
bcsticker = await tobi.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await tobi.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
tobi.sendMessage(_.jid, bc, sticker) 
}
enviar(`Figurinha envianda para: ${totalchat.length} chats`)
}
break

case 'clone':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (args.length < 1) return enviar('Mencione quem devo roubar a foto de perfil')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tobi.getProfilePicture(id)
buffer = await getBuffer(pp)
tobi.updateProfilePicture(botNumber, buffer)
mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('ocorreu um erro')
}
break

case 'block':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobi.blockUser(`${body.slice(8)}@c.us`, "add")
tobi.sendMessage(from, `Usuário bloqueado`, text, {quoted: mek})
break

case 'addban':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi banido e não poderá mais usar os comandos do bot`
mentions(`${susp}`, mentioned, true)  
break

case 'unban':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./base de dados/datauser/banned.json', JSON.stringify(ban))
susp = `『❗』@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot`
mentions(`${susp}`, mentioned, true)  
break

case 'q': 
if (!m.quoted) return enviar('responder à mensagem!')
let qse = tobi.serializeM(await m.getQuotedObj())
if (!qse.quoted) return enviar('a mensagem que você está respondendo não contém uma resposta!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'antipalavras':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(linguagem.group())
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isBotGroupAdmins) return stickerAdm(from)
if (args[0] === 'on') {
if (isPalavrão) return enviar('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (args[0] === 'off') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/database/arquivos/palavrão.json', JSON.stringify(palavrão))
sendButMessage(from, linguagem.nameByTobi(me), mess.functionOff(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else {
sendButMessage(from, linguagem.nameByTobi(me), `${isPalavrão ? linguagem.modeOff(comando) : linguagem.modeOnn(comando)}`, [{buttonId: `${isPalavrão ? `${p + comando} off` : `${p + comando} on`}`, buttonText: {displayText: `${isPalavrão ? 'Desligar' : 'Ativar'}`}, type: 1}], {quoted: mek})
}
break

case 'bcb':
if (args.length < 1) return enviar('texto?')
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
for (let _ of totalchat) {
sendButImage(_.jid, "*_" + q + "_*", linguagem.nameByTobi(me), await getBuffer(aurlSexo), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}]);
} await enviar("Transmissão realizada!");
break

case 'addpalavra':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* adicionado na lista com sucesso!`)
break

case 'delpalavra':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
if (args.length < 1) return enviar( `Use assim : ${p + comando} [palavra]. exemplo ${p + comando} puta`)
let dbw = body.slice(12)
var position = palavra.indexOf(dbw)
palavra.splice(position, 1)
fs.writeFileSync('./base de dados/lib/palavras.json', JSON.stringify(palavra))
await enviar(`Palavra *${q}* removida da lista com sucesso!`)
break 

case 'listname':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (!isPalavrão) return enviar(`『❗』A função anti palavras está desativada`)
teks = `Lista de palavras: \n\n`
for (let ahzhgxnshxg of palavra) {
teks += `⪧ ${ahzhgxnshxg}\n`
}
teks += `\nTotal : ${palavra.length}\nUse o comando\n${p}Addpalavra『Nome』\nPara adicionar texto\n\n E use o comando\n${p}Delpalavra『Nome』\nPara tirar texto`
tobi.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": palavra } })
break

case 'mystat':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
var groups = tobi.chats.array.filter(v => v.jid.endsWith('g.us'))
var privat = tobi.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
let total = math(`${groups.length}*${privat.length}`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ Velocidade : *${latensi.toFixed(4)} (s)*
▢ ⌁ Ativo a : *${temporizado(uptime)}*
▢ ⌁ Total de chats : *${totalchat.length}*
▢ ⌁ Total de grupos : *${groups.length}*
▢ ⌁ Total de pessoas no pv : *${privat.length}*
▢ ╰═══⊷
╰━━━ ⪨
╭━━ ⪩
▢👮🏻‍♂️⃟ き ɪɴғᴏ/ᴄᴇʟʟ き⃟👮🏻‍♂️ 
▢ ╭═══⊷
▢ ⌁ Bateria : *${baterai}*
▢ ⌁ Carregando : *${charge}*
▢ ⌁ Uso da ram : *${ram2}*
▢ ⌁ Plataforma : *${os.platform()}*
▢ ⌁ Nome do host : *${os.hostname()}*
▢ ⌁ Versão do celular : *${tobi.user.phone.os_version}*
▢ ⌁ Tempo de atividade : *${temporizado(os.uptime())}*
▢ ⌁ Versão do whatsapp : *${tobi.user.phone.wa_version}*
▢ ⌁ Modelo do dispositivo : *${tobi.user.phone.device_model}*
▢ ╰═══⊷
╰━━━ ⪨`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: teks})
break

case 'tagstick':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await tobi.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
var value = args.join(" ")
var group = await tobi.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
tobi.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque um sticker para que eu mencione todos com ele`)
}
break

case 'ping':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
sendButMessage(from, linguagem.nameByTobi(me), linguagem.speed(latensi), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek}) 
break

case 'visuchat':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
const readallid = await tobi.chats.all()
tobi.setMaxListeners(25)
for (let xyz of readallid) {
await tobi.chatRead(xyz.jid)
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": "Todos os chats foram vistos",
'jpegThumbnail': fs.readFileSync('./base de dados/lib/bot/fotos/logo.jpeg')
}
}
}
})
break

case 'bloqueados':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
teks = 'Esta é uma lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tobi.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break

case 'desligar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
enviar('Bot desligado')
setTimeout(() => {
tobi.close()
}, 3000)
break

case 'reiniciar':
addFilter(from)
tobi.updatePresence(from, Presence.composing) 
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
npm = `npm start`
enviar("Aguarde, Estou Reiniciando...")
exec(npm, (err, stdout) => {
if(err) return tobi.sendMessage(from, "Erro", text, {quoted: mek})
if (stdout) {
tobi.sendMessage(from, stdout, text, {quoted: mek})
} 
})
break

case 'clearchat': 
case 'clearall':
case 'clear-all':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
tobif = await tobi.chats.all()
list_chat = await tobi.chats.all()
for (let chat of list_chat) {
tobi.modifyChat(chat.jid, "delete", {includeStarred: false})
}
tobi.sendMessage(from, `Pronto`, text, {
quoted: { key: {fromMe: false,
participant: `0@s.whatsapp.net`,
...(from ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
"imageMessage": {
"caption": `Todos os chats foram apagados`
}
}
}
})
break
//<~FIM DOS COMANDOS DE DONOS

case 'report':
addFilter(from)
tobi.updatePresence(from, Presence.composing) //info
const bug = `${q}`
 if (args.length > 300) return tobi.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `╭ ⋟ Sugestão + Reporte\n├ ⋟ De: ${pushname}\n├ ⋟ Numero: @${sender.split("@s.whatsapp.net")[0]}\n╰━━━━━── • ──━━━━━\n ⋟ 𝖲𝗎𝗀𝖾𝗌𝗍𝖺̃𝗈:\n${bug}`
var options = {text: teks1, contextInfo: {mentionedJid: [sender]},}
tobi.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text)
enviar("Mensagem enviada ao meu dono; Spam = block + ban.")
break

//<~ COMEÇO DOS COMANDOS DE PREM

case 'ddd':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Use ${p + comando} 94`)
try {
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${dddlist}`})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'letra':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Qual é o nome da música? ._.")
mortandela(m.chat)
teks = body.slice(7)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
lirikLagu(teks).then((res) => {
if (!res[0].result) {
enviar("_*❌Titulo não encontrado...❌*_\n\nTalves eu não tenha essa resposta") 
} else {
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${res[0].result}`})
}
})
break

case 'github':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length == 0) return enviar(`_*Sintaxe de nome incorreto...*_\n\nExemplo: ${p + comando} Tobizinho`)
mortandela (from)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/github?nomedeusuario=${q}`)
teks = `🏷️ Nome : ${anu.Nome_De_Usuario}\n📆 Criada em : *${anu.Criada_Em}*\n💫 Ultima atualização : *${anu.Ultima_Atualizacao}*\n👤 Seguidores : *${anu.Total_De_Seguidores}*\n👥 Total de Repositorios : *${anu.Total_De_Seguidores}*\n🌍 Seguindo : *${anu.Total_Seguindo} Pessoas*\n📊 Seguidores : \n*${anu.Link_De_Seguidores}*\n📁 Repositório : \n*${anu.Link_Do_Repositorios}*`
tobi.sendMessage(from, await getBuffer(aurlSexo), image, {quoted: mek, thumbnail:null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'mediafire':
addFilter(from)
tobi.updatePresence(from, Presence.composing)   
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('Onde está o link?')
if(isUrl(args[0]) && !args[0].includes('mediafire')) return enviar("Só é permitido link do mediafire!")
mortandela(m.chat)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `
き⃟❗️MEDIAFIRE DOWNLOAD❗⃟ き

${ll}📁 Nome : ${res[0].nama}${ll}
${ll}📊 Tamanho : ${res[0].size}${ll}
${ll}🧧 Link : ${res[0].link}${ll}

_*Aguarde o processo de upload de mídia......*_`
enviar(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'covidst':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(m.chat)
teks = args.join(' ')
if (!q) return enviar(`${emoji_bot} Use apenas a sigla do estado e, apenas uma sigla por consulta ${emoji_bot}`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/brasil?estado=${q}`)
const by_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ Sigla do estado: ${anu.Sigla_Do_Estado ? anu.Sigla_Do_Estado : "Erro! :/"}
┃│➩ Estado: ${anu.Estado_Informado ? anu.Estado_Informado : "Erro! :/"}
┃│➩ Casos desconhecidos: ${anu.Casos_Desconhecidos ? anu.Casos_Desconhecidos : "Erro! :/"}
┃│➩ Casos encontrados: ${anu.Casos_Encontrados ? anu.Casos_Encontrados : "Erro! :/"}
┃│➩ Mortes encontradas: ${anu.Mortes_Encontradas ? anu.Mortes_Encontradas : "Erro! :/"}
┃│➩ Previsões Econtradas: ${anu.Previsoes_Encontradas ? anu.Previsoes_Encontradas : "Erro! :/"}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${by_tobi_thiago}`})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'sticknime':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(m.chat)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`${emoji_bot} Forma correta : ${p + comando} One piece ${emoji_bot}`)
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/pinterest/?pin=" + q + "&apikey=" + compreSuaApikey)
res = anu.resultado
random =  res[Math.floor(Math.random() * res.length)]
tobi.sendMessage(from, await getBuffer(random), image, {quoted: mek, thumbnail: null})
} catch (error) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'wikipedia':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Cadê o texto vida? kkkkk")
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
wikipediaByTobi = q
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/educacional/wikipedia?pergunta=${wikipediaByTobi}`)
if (!anu.Resultado) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
} else {
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${anu.Resultado}`})
}
break

case 'storesearch':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagem você quer que eu pesquise? `);
mortandela(m.chat)
teks = body.slice(7)
try {
sexooo = await axios.get(`https://api.zeks.me/api/sgplay?apikey=apivinz&q=${teks}`)
sexooo2 = sexooo.data
zaps = `*Lista de ${sexooo2.result[0].title}*\n\n`
for (let i = 0; i < sexooo2.result.length; i++) {
zaps += `\n$‣ 🧧 Nome : *${sexooo2.result[i].title}*\n‣ 🏷️Link : *${sexooo2.result[i].url}*\n‣ ✔️ Versão *${sexooo2.result[i].rating}*\n`
}
buffer = await getBuffer(sexooo2.result[0].thumb)
tobi.sendMessage(from, buffer, image, {quoted: mek, caption: zaps})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'buscaimg':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`❎ Que imagem você quer que eu pesquise? `);
mortandela(m.chat)
try {
let pin = await hx.pinterest(q);
let ac = pin[Math.floor(Math.random() * pin.length)];
let di = await getBuffer(ac);
await tobi.sendMessage(from, di, image, {quoted: mek, caption: `✅ *${q}*` });
} catch (e) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break;

case 'glosearch':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar('O que você está procurando?')
teks = args.join(' ')
mortandela(m.chat)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
teks += `\n
「  *─「🍛 GOOGLE 🍛」*  」
‣ *🧧Título :* ${i.title}
‣ *🏷️Link :* ${i.link}
‣ *📁Sobre :* ${i.snippet}`
}
tobi.sendMessage(from, await getBuffer(aurlSexo), image, {quoted: mek, thumbnail:null, caption: teks})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'playstore1':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if(!q) return enviar('O que você está procurando?')
mortandela(m.chat)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
let play = await hx.playstore(`${q}`)
let store = ' 「🍛PLAY STORE🍛」'
for (let i of play){
store += `
‣ *📌Nome* : ${i.name}
‣ *📟Ligação* : ${i.link}
‣ *🎈Dev* : ${i.developer}
‣ *🔗Link Dev* : ${i.link_dev}\n❉─── 「🍛PLAY STORE🍛」───❉`
}
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${store}`})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'celular':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!q) return enviar(`Qual celular você está procurando?`)
teks = args.join(' ')
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
╭━━━々${comando} 々━━━
▢📝 Titulo: ${anu.judul}
▢❗Última atualização: ${anu.rilis}
▢📱 Tamanho do celular: ${anu.ukuran}
▢⚡ Tipo: ${anu.type}
▢🗃️ Armazenamento: ${anu.storage}
▢📴 Tela: ${anu.display}
▢📳 Polegada: ${anu.inchi}
▢🔰 Resolução da câmera: ${anu.pixel}
▢📲 Resolução do video: ${anu.videoPixel}
▢💭 Ram do celular: ${anu.ram}
▢❤️ Hardware do celular: ${anu.chipset}
▢⚠️ Bateria: ${anu.batrai}
▢🔋 Tipo da bateria: ${anu.merek_batre}
╰════╾「🌀」╼════╾`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${busca_celular}`})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'rename':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (!isQuotedSticker) return enviar("Macaco, Tem que ser uma figurinha");
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
kls = args.join(" ").split("|");
pack = kls[0] !== "" ? kls[0] : `🔮 ${pushname} ┃ ᶜʳⁱᵃᵈᵒʳ`;
author2 = typeof kls[1] !== "undefined" ? kls[1] : `💎 @${me.name}`;
const dlfile = await tobi.downloadMediaMessage(encmediats)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
tobi.sendMessage(from, imageBuffer, sticker, {quoted: mek})
break

case 'covidmundo':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
mortandela(m.chat)
try {
teks = args.join(' ')
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial`)
try {
ppimg = await tobi.getProfilePicture(me.jid)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const bya_tobi_thiago = `
╭═══════════════⊷
╰╮✙◗ Covid Mundo
╭┤➩ Total de casos: ${anu.Total_Casos}
┃│➩ Total de casos ativos: ${anu.Total_Casos_Ativos}
┃│➩ Total de casos criticos: ${anu.Total_Casos_Criticos}
┃│➩ Total de casos hoje: ${anu.Total_Casos_Hoje}
┃│➩ Total de mortes: ${anu.Total_Mortes}
┃│➩ Total de mortes hoje: ${anu.Total_Mortes_Hoje}
┃│➩ Total de recuperados: ${anu.Total_Recuperados}
┃╰═════════════⊷
╰══════「★」═════⊷`
buffer = await getBuffer(ppimg)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${bya_tobi_thiago}`})
} catch (e) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break 

//<~COMEÇO DOS COMANDOS DE BANCO
case 'buypack':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
payout2 = 1
const valorPack = 1000
const buyPacks = valorPack * payout2
if ( checkATMuser(sender) <= buyPacks) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : ${valorPack} mil`)
if ( checkATMuser(sender) >= buyPacks) {
confirmATM(sender)
var pornoByTobi = [
"Michelle Rabbit\nhttps://mega.nz/folder/FXB0ELpS#CaCYgD8f8YNPc_dL4JjtDA ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ",
"Sia Sibéria\nhttps://drive.google.com/drive/u/0/mobile/folders/1pOfYV7ZFqumnZpB-6eu03fHsByBJgNWt",
"Nicole Bum\nhttps://drive.google.com/drive/mobile/folders/1MRARgrA4GIcw14MGNpr5NxAKJTcnLjra",
"Love Lilah\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3 ",
"Taty Maia\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR ",
"Me1adinha\nhttps://accounts.google.com/ServiceLogin?service=lh2&passive=1209600&osid=1&continue=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&followup=https://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?key%3DZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn&authuser=0\n(Via Google Fotos) ",
"Mari Ávila\nhttps://drive.google.com/drive/u/0/mobile/folders/1lVU8GgLTHfPoYUh5ZJ1oj5gluiTRmgB5 ",
"Feh Galvão\nhttps://mega.nz/folder/OxQiHJAA#8dGkVcq08YtonYSJQgZFfQ/folder/etx0QRQT ",
"Marina Mui\nhttps://mega.nz/folder/nhxWCQhC#jefLXWFJiqCXMtj6wEEN4A ",
"Sophia Carracini\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o ",
"Maria Eugênia\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3 ",
"Skylar Vox\nhttps://mega.nz/folder/XIQTSKzR#_0vLyBUESlCj3l5HCCUkQg ",
"Neiva Mara\nhttps://mega.nz/folder/PZZxQABC#IVO1DL-zczyMd1Kr83sDBw ",
"Amorazz\nhttps://mega.nz/folder/6kpT0IoT#Zqin16-ASUvoXgoEK6BsIw ",
"Nayara\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE ",
"Megnutt\nhttps://mega.nz/folder/UAJE0DQT#gCEzz702Amr2rdqSWmshMA/folder/lQx21JjC ",
"Littl Misfit\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL ",
"Anitta\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3 ",
"MC Princesa\nhttps://drive.google.com/drive/u/0/mobile/folders/1Zsj66cMEPgQTcT91VenAkl9L1TAuguSF ",
"MC Pipokinha\nhttps://drive.google.com/drive/u/0/mobile/folders/1X7u7cj8MKj1cE6hM2_mkQe9bOF8M2npm ",
"Lana Rhoades\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw ",
"Belle Delphine\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9 ",
"Venomous Dolly\nhttps://mega.nz/folder/pxYAXLjI#QnZHek_zGQDz5ct9d63Bmg ",
"MC Mirella\nhttps://seulink.online/qOkcdS\n(Esse ta com encurta) ",
"LoverLaci\nhttps://mega.nz/folder/yRIHgQ5A#euOpAQNEcZiej5uBuxjBkw/folder/XEQWSZBC ",
"Victoria Matosa\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9 ",
"Segredos Da Ana\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg\n(FONTE: Wakai T) ",
"Letícia Shirayuki\nhttps://www.mediafire.com/file/2a4kq8pmxc3je71/Let%25C3%25ADcia_Shirayuki.zip/file ",
"KITTYXKUM\nhttps://mega.nz/folder/f4xDSS7R#_5ZrSNVwLJ4nEUdEJxoijw ",
"Kinechan\nhttps://mega.nz/folder/GgxRQCaS#kdT7IidrqwgbggnpZOkMHA ",
"Grazi Mourão\nhttps://mega.nz/folder/2hwgwYpI#kUTsXqrwDNFeKcDhTINz-w ",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"https://mega.nz/folder/aU1wVTZR#6_P4jZGjUZmHqC5Fu2Y78Q",
"https://photos.app.goo.gl/Tqvfv8yVdp3FaUnX9",
"https://photos.app.goo.gl/phyRpNFLcAtsknfJ7",
"https://photos.app.goo.gl/g685WWL4T7BcZssk8",
"https://photos.app.goo.gl/TBbkjGGdAVHjPFt5A",
"https://photos.app.goo.gl/gNxLbJHGVzeWY9iS9",
"https://photos.app.goo.gl/Jr4Qk1dFSJepPdRc7",
"Polonesa Do Hype\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC",
"Ashley Tervort\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA ",
"Ashley Alban\nhttps://mega.nz/folder/9eBBBQZb#pi0kaL6zqRYq3SoSJHUJpQ ",
"Emília Bunny\nhttps://mega.nz/folder/q1pkBJoI#5ZiKfZhaKIUg9ea0eS6EYw ",
"Maru Karv\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw ",
"Evilena\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo ",
"Bambi Doe\nhttps://mega.nz/folder/IxgyhZJI#Rd8bzK3_Ri2I3LUvy2Tf6Q ",
"Mulher Melão\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg ",
"Aline Faria\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ ",
"Rafaela Nery\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0 ",
"Remy LaCroix\nhttps://mega.nz/folder/sTxmzDAb#_0igusp-mS454WIEh_lGqg ",
"Mayakayagaia\nhttps://mega.nz/folder/5MsATbYI#V-90W2qijBk3N5YzJTgfHQ ",
"Bella Thorne\nhttps://mega.nz/folder/okw0gYLL#O6-OqnJhRYTbHiMJbNqI3Q ",
"Canela Skin\nhttps://mega.nz/folder/vN5XBIIZ#m7P5H4J_B5HcsYrf26tmoQ ",
"Hailey Queen\nhttps://mega.nz/folder/FFlgXBIT#8X5NYUFWkTjVDUqmwXSVow/folder/pc1yVbyA ",
"Adriana Chechik\nhttps://mega.nz/folder/1XgFnKyJ#HETOSi3Qi8Kwckbm2FBXDw ",
"Dripxxx\nhttps://mega.nz/folder/UdEjxYbA#2dGzAJq9JR8Qy8C8Y3VirQ ",
"Steffy Moreno\nhttps://mega.nz/folder/QkYARZ7J#vtktDmYALs5wwcImYy8tnw ",
"Angelic Videos\nhttps://mega.nz/folder/XgMRQYAL#GidekeyDkkEDFWit2kAJ_g "]
var pornkkkByTobiNekkkk = pornoByTobi[Math.floor(Math.random() * pornoByTobi.length)]
tobi.sendMessage(from, `${pornkkkByTobiNekkkk}`, text, {contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: true, sendEphemeral: true, "externalAdReply": {"title": `Packs porno?? by © Tobikkk`, "body": "", "previewType": "PHOTO", "thumbnailUrl": "https://telegra.ph/file/bbb5eca08130920edbcb4.jpg", "thumbnail": img2}}})
}
break

case 'buyprem':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (prem.includes(sender)) return enviar(linguagem.erroPrem())
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/datauser/premium.json', JSON.stringify(prem))
await enviar(`き⃟💲COMPRA BEM SUCEDIDA💲️⃟き\n\nき⃟👤️ Vendedor : *${me.name}*\nき⃟🏷️ Comprador : *${pushname}*\nき⃟💱 Preço do premium : *${koinPerlimit2}*`)				
}
break

case 'transfer':
case 'transferir':             			
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!q.includes('/')) return  enviar(`[❗] Use assim : ${p}transferir @/2500`)
const tujuan = q.substring(0, q.indexOf('/') - 1)
const jumblah = q.substring(q.lastIndexOf('/') + 1)
if(isNaN(jumblah)) return await enviar('[❗] PRECISA SER UM NÚMERO')
if (jumblah < 100) return enviar(`transfrência mínima e de 100 reais`)
if (checkATMuser(sender) < jumblah) return enviar(`[❗] você não tem dinheiro suficiente para fazer uma transferência, você precisa ter no minímo 100 de dinhero`)
const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
fee = 0.010 *  jumblah 
hasiltf = jumblah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumblah)
addKoinUser('556181496039@s.whatsapp.net', fee)
enviar(`
き⃟💲TRANSFERÊNCIA💲️⃟き

き⃟👤️ Transferidor: wa.me/${sender.split("@")[0]}
き⃟🏷️ Recebidor : ${tujuan}
き⃟💱 Valor Da Transferência : ${jumblah}
き⃟🧧Taxa : ${fee}`)
break		

case 'darmoney':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message[type].contextInfo.mentionedJid[0]
if (uangLimite1 <= 1) return enviar(`Precisa dar no minímo 1 limit`)
if (isNaN(uangLimite1)) return enviar(`[❗] USE ASSIM\n ${p + comando} @556181496039 5`)
if (!numeroUang) return enviar(`[❗] USE ASSIM\n ${p + comando} @556181496039 5`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./base de dados/datauser/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
╭─❒ 「 Sucesso! 」 ❒
├ *🦈 ID : *${createSerial(8)}*
├ *🦈 Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
├ *🦈 Usúario : *@${updated.id.replace('@s.whatsapp.net','')}*
├ *🦈 Dinheiro:* ${verMoney ? `${verMoney}` : "0"}
└❏`
console.log(uang[found]);
enviar(result)
} else {
enviar(`[❗] Desculpe ${pushname}, este ${numeroUang} número não está registrado no bot...`)
}
break

case 'apostar':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isGroup) return enviar(`SOMENTE EM GRUPOS`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `10000`
if (checkxpr <= quantidader) return enviar(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
if (args.length !== 1) return enviar('Especifique a quantidade de dinheiro para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return enviar(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 1000) return enviar(`O minimo para se apostar é de 1000 dinheiro`)
if (isNaN(args[0])) return enviar('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await enviar(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await enviar(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await enviar(`👎🏼BAAAAH MÁ SORTE😔\n\nPerdeu ${nrolxp} KKK Continua apostando pra perder mais otário kkkkkkkkkkkkkkk`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await enviar(`👍🏼MUITA SORTE!!!😬\n\nVocê pulou o muro, e se salvou da polícia.\nGanhou ${prolxp} Dinheiro, Meu soldado anti prisão!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await enviar(`💀 WASTED - SE FODEU ⚰️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, pra ganhar, aposte mais alto.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await enviar(`✨CONGRATULATIONS💫\n\nVocê finalmente ganhou, receba seus ${prolxp} de dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
}
break

case 'dinheiro':
case 'money':
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
sendButMessage(m.chat, linguagem.dinheiroConta(checkDinheiro), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
break

case 'rankmoney':
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
_registro.sort((a, b) => (a.name < b.name) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【DINHEIRO】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│ ➣ Nome: _*${uang[i].nome ? uang[i].nome : "Sem nome"}*_
│ ➣ Dinheiro: _*${uang[i].uang ? uang[i].uang : "0"}*_ 💰
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await sendButMessage(from, `*_🗣️ ${me.name}™_*`, `${rankDinheiro}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
} catch (err) {
console.error(err)
await enviar(`Precisa ter mais Usuários registrados`)
}
break

case 'vermoney':
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (args.length < 1) return enviar(`Use ${p + comando} @tag`)
const verMoneyki = mek.message[type].contextInfo.mentionedJid[0]
const verMoneyMencionador = checkATMuser(verMoneyki)
mentioned = mek.message[type].contextInfo.mentionedJid[0]
const feijoada = tobi.contacts[mentioned] != undefined ? tobi.contacts[mentioned].vname || tobi.contacts[mentioned].notify: undefined
sendButMessage(from, `${linguagem.nameByTobi(me)}`, `${linguagem.checarDinheiro(verMoneyMencionador)}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
break

case 'tts': 
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (args.length < 1) return tobi.sendMessage(from, `Você deve usar o comando da forma correta:\n${p}tts (língua) (texto)\nExemplo: ${p}tts pt bom dia\n\nUse: ${p}ts para listar todas as línguas`, text, {quoted: mek})
const gtts = require('./base de dados/lib/gtts')(args[0])
if (args.length < 2) return tobi.sendMessage(from, 'Cadê o texto?', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? enviar('Texto muito grande')
: gtts.save(ranm, dtt, function() {
tobi.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

case 'ts':
enviar(ts())
break

case 'jogodavelha':
 addFilter(from)
tobi.updatePresence(from, Presence.composing)
if(!isGroup) return enviar('comando apenas para grupos')
if (fs.existsSync(`./base de dados/lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
 
 [❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
 
 ❌ : @${boardnow.X}
 ⭕ : @${boardnow.O}
 
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
 
 
  ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
  ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
  ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
 
 
 `;
tobi.sendMessage(from, chatMove, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return enviar(
`*⟅❗⟆ Jogue com Alguém!!!!*
*para inicar a partida : ${p + comando} @membro do gp*`
 );
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(
`./base de dados/lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
 
@${sender.replace(
"@s.whatsapp.net",
""
)} _está te desafiando para uma partida de jogo da velha..._
 
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
`;
tobi.sendMessage(from, strChat, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case  'resetavelha':
if (fs.existsSync("./base de dados/lib/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./base de dados/lib/tictactoe/db/" + from + ".json");
enviar(`Jogo da velha resetado com sucesso nesse grupo!`);
} else {
 enviar(`Não a nenhuma sessão em andamento...`);
}
break

case 'anagrama':
if (!isGroup) return enviar('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * anagramaAleatorio.length)
if(!isGroupAdmins ) return enviar('comando apenas para admins')
 if(args.length == 0) return enviar('use *anagrama ativar para ativar o jogo do anagrama\npara desativar user *anagrama desativar')
if (args.join(' ') === 'ativar') {
if(fs.existsSync(`./base de dados/lib/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./base de dados/lib/anagrama-${from}.json`))
enviar(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./base de dados/lib/anagrama-${from}.json`, `${JSON.stringify(anagramaAleatorio[anaaleatorio])}`)
sexo = `
╭━━ ⪩
▢ き⃟🧧_${comando}_🧧⃟ き
▢ ╭═══⊷
▢ ⌁ _*Descubra A Palavra*_
▢ ⌁ _*Anagrama: ${anagramaAleatorio[anaaleatorio].embaralhada}*_
▢ ⌁ _*Dica: ${anagramaAleatorio[anaaleatorio].dica}*_
▢ ╰═══⊷
╰━━━ ⪨`
sendButMessage(from, sexo, `${linguagem.nameByTobi(me)}`, [{buttonId: `a`, buttonText: {displayText: `Arigato`}, type: 1}], {quoted: mek})
}
} else if (args.join(' ') ==='desativar') {
if(!fs.existsSync(`./base de dados/lib/anagrama-${from}.json`)) return enviar('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./base de dados/lib/anagrama-${from}.json`)
enviar("Desativado com sucesso")
}
break 

case 'exec':
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
exc = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
enviar(util.format(eval(`;(async () => { ${exc} })()`)))
} catch(e){
enviar(String(e))
}
break

case 'setprefix':
if (!isOwner) return sendButMessage(m.chat, linguagem.nameByTobi(me), mess.noMonkey(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
if (args.length < 1) return enviar(`*✳️Formato de comando!*\n\n*📌 Exemplo :*\n •${p + comando} multi\n •${p + comando} nopref\n •${p + comando} # (Personalizado!)`)
if((args[0]) == 'multi'){
if(multi)return enviar('_✳️ O prefixo atual é multiprefixo! _ ')
multi = true
nopref = false
variosPrefixo = false
enviar(`✅ O prefixo foi alterado para * multiprefixo *`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return enviar('_✳️ já está sem prefixo!_')
multi = false
variosPrefixo = false
nopref = true
enviar(`✅ Prefixo alterado para * noprefix*\n\n📌Você não precisa mais de um prefixo para usar os comandos`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
variosPrefixo = true
prefixo = `${q}`
enviar(`✅ Prefixo alterado para: *${q}*`)
}
break

case 'xvideos': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Aplicativos 😡")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/xvideoslista?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 XVIDEOSKKJ 🍛」\n\n"
for(let i of res){
title = i.nome ? `‣ ☂️ Nome* :\n${i.nome}\n` : ''
link = i.link ? `‣ 🌙 Link* :\n${i.link}\n\n` : ''
teks += title + link
}
tobi.sendMessage(from, teks, MessageType.text, {quoted: mek})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'attp':
addFilter(from) 
if (args.length < 1) return enviar(resposta.attp)
mortandela(from)
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
tobi.sendMessage(from, anu, sticker, {quoted: mek})
break

case 'xvideosplay':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Macaco! Use ${p}xvideos sweetie fox, e pegue algum link 😡`)
if (isUrl(args[0]) && !args[0].includes('xvideos')) return enviar("Link que não seja do xvideos, não é permitido!!! Macaco 😡")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/download/xvideos?link=" + q + "&apikey=" + compreSuaApikey)
buffer = await getBuffer(anu.resultado.link)
tobi.sendMessage(from, buffer, video, {quoted: mek, thumbnail: null})
} catch (err) {
sendButMessage(m.chat, linguagem.erroLink(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'quadrinhos':
case 'manga':
case 'mangá':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Mangás/Anime 😡")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/quadrinhos?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 𝗟𝗜𝗦𝗧𝗔 𝗛𝗤 𝗗𝗘 𝗦𝗘𝗫𝗢 🍛」\n\n"
for(let i of res){
teks += `‣ *☂️ Nome* : ${i.nome}\n‣ *🌙 Link* : ${i.link}\n‣ *🌙 Desc* : ${i.desc}\n\n「🍛 𝗟𝗜𝗦𝗧𝗔 𝗛𝗤 𝗗𝗘 𝗦𝗘𝗫𝗢 🍛」\n\n`
}
tobi.sendMessage(from, await getBuffer(aurlSexo), image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'wikihentai': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Mangás/Anime 😡")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/hentaisTube?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 𝗟𝗜𝗦𝗧𝗔 𝗛𝗘𝗡𝗧𝗔𝗜 🍛」\n\n"
for(let i of res){
teks += `‣ *☂️ Nome* : ${i.nome}\n‣ *🌙 Link* : ${i.link}\n\n「🍛 𝗟𝗜𝗦𝗧𝗔 𝗛𝗘𝗡𝗧𝗔𝗜 🍛」\n\n`
}
buffer = await getBuffer(anu.resultado[0].imagem)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'hentaiplay':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar(`Macaco! Use ${p}wikihentai succubus, e pegue algum link 😡`)
if(isUrl(args[0]) && !args[0].includes('hentaistube')) return enviar("Link que não seja do hentaistubes, não é permitido!!! Macaco 😡")
url = budy.slice(12)
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/download/hentai?link=" + q + "&apikey=" + compreSuaApikey);
buffer = await getBuffer(anu.resultado.video)
tobi.sendMessage(from, buffer, video, {quoted: mek, thumbnail: null})
} catch {
sendButMessage(m.chat, linguagem.erroLink(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'wikianime': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Mangás/Anime 😡")
mortandela(m.chat)
title = budy.slice(10)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/animes?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 𝗟𝗜𝗦𝗧𝗔 𝗔𝗡𝗜𝗠𝗘𝗦 🍛」\n\n"
for(let i of res){
teks += `‣ *☂️ Nome* : ${i.nome}\n‣ *🌙 Link* : ${i.link}\n\n「🍛 𝗟𝗜𝗦𝗧𝗔 𝗔𝗡𝗜𝗠𝗘𝗦 🍛」\n\n`
}
buffer =  res[Math.floor(Math.random() * res.length)].foto
sendFileFromUrl(buffer, image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'happymod': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Aplicativos 😡")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/happymod/?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 𝗛𝗔𝗣𝗣𝗠𝗢𝗗𝗬 🍛」\n\n"
for(let i of res){
teks += `‣ *☂️ Nome* : ${i.nome}\n‣ *🌙 Link* : ${i.link}\n\n「🍛 𝗛𝗔𝗣𝗣𝗠𝗢𝗗𝗬 🍛」\n\n`
}
buffer =  res[Math.floor(Math.random() * res.length)].icon
sendFileFromUrl(buffer, image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'uptodown': 
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise títulos de Aplicativos 😡")
mortandela(m.chat)
title = budy.slice(8)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/pesquisa/apk/?nome=" + q + "&apikey=" + compreSuaApikey);
res = anu.resultado
teks = "「🍛 Uᴘᴛᴏᴅᴏᴡɴ 🍛」\n\n"
for(let i of res){
const sexoNome = i.nome ? `‣ ☂️ Nome do aplicativo* :\n${i.nome}\n` : ''
const sexoLink = i.link ? `‣ 🌙 Link do aplicativo* :\n${i.link}\n\n` : ''
teks += `${sexoNome + sexoLink}`
}
buffer =  res[Math.floor(Math.random() * res.length)].foto
sendFileFromUrl(buffer, image, {quoted: mek, thumbnail: null, caption: teks})
} catch {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'tikstalker':
case 'tiktokstalk':
try {
addFilter(from)
tobi.updatePresence(from, Presence.composing)
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Pesquise nomes de usuários do tiktok!")
mortandela(m.chat)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/stalk/tk/?usuario=" + q + "&apikey=" + compreSuaApikey);
const instaTikTok = anu.resultado.user.signature ? `Descrição : ${anu.resultado.user.signature}` : ""
teks = `Nome : ${anu.resultado.user.nickname}\n`
teks += `Seguindo : ${anu.resultado.stats.followingCount}\n`
teks += `Seguidores : ${anu.resultado.stats.followerCount}\n`
teks += `Curtidas : ${anu.resultado.stats.heart}\n`
teks += `Videos : ${anu.resultado.stats.videoCount}\n`
teks += `${instaTikTok}`
buffer = await getBuffer(anu.resultado.user.avatarLarger)
tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail: img2, caption: teks})
} catch (error) {
sendButMessage(m.chat, linguagem.erroTitle(), linguagem.nameByTobi(me), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

case 'natural-leaves':
case 'transformer':
case 'greenhorror':
case 'sciencefiction':
case 'metallic':
case 'magmahot':
case 'thunder':
case 'berry':
case 'embossed':
case 'harrypotter':
case 'impressiveglitch':
case 'neondevilwings':
case 'artpaper':
case 'snow':
case 'futuristicneon':
case 'wonderfulgraffiti':
case 'bearmascot':
case 'luxurygold':
case 'cloud':
case 'sandsummer':
case 'sandwriting':
case 'realisticcloud':
case 'sandengraved':
case '3dglue':
case 'summerysand':
case '1917style':
case 'neonlight':
case 'metaldarkgold':
case 'steeltext':
case 'captainamerica':
case 'chocolate':
case 'toxic':
case 'matrix':
case 'horrorblood':
case '3dbox':
case 'thunder2':
case 'drop-water':
case 'black-pink':
case 'lava':
case 'blood':
case 'xmascards3d':
case '3d-gradient':
case 'christmas':
try {
if (!isOwner && !isPremium) return webPage(semPremium(p))
if (args.length < 1) return enviar("Texto?!")
await mortandela(from)
anu = await fetchJson("https://lolizit-api.herokuapp.com/api/textpro/" + marker + "?apikey=" + compreSuaApikey + "&text=" + q)
buffer = await getBuffer(anu.resultado);
await tobi.sendMessage(from, buffer, image, {quoted: mek, thumbnail: null, caption: "Niih <3"})
} catch(sexo) {
sendButMessage(m.chat, linguagem.nameByTobi(me), linguagem.googleErroFoto(), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.randomSexo()}, type: 1}], {quoted: mek})
}
break

default:

if (isAutoConversar && isGroup && !mek.key.fromMe && budy != undefined) {
try { 
anu = await simih(budy);
enviar(String(anu))
} catch (err) {
}
}

if (body == p + comando)  {
console.log('\x1b[1;31m~\x1b[1;37m>', '[', color('CMD', "red"), ']', color('Comando', "yellow"), color(`${p}${comando}`, "yellow"), color('não registrado', "yellow"), color('de', "yellow"), color(pushname, "yellow"))
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'red'))
}
}
})
}
starts()