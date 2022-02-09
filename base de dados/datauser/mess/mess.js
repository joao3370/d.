const emojiFunction = "︎︎🔮"
const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, OwnerNumber, SeuNome} = infos

const messResp = ["[ ! ] Aguarde, estou fazendo...", "Tome um pouco de café enquanto eu termino ☕..", "Estou ennviando já!!", "❬❗❭ Aguarde alguns segundos...", "Tô enviando já amigão!"]
const sexoMess = messResp[Math.floor(Math.random() * messResp.length)] 

exports.commandUsed = () => {
return sexoMess;
}

exports.levelOff = () => {
return " [×] *_...Leveis não está ativado..._* [×]";
}
//levelOff

exports.noMonkey = () => {
return "*_ [×] Comando privado para meu dono  [×]_*";
}
//noMonkey

exports.menuWithRr = () => {
return `*_ [×] ERRO ENCONTRADO NO MENU  [×]_*\n\n*_Tente de novo_*`;
}
//menuWithRr

exports.functionOff = (comando) => {
return `*_${emojiFunction} Função ${comando} desativado com sucesso!_*`;
}
//functionOff

exports.functionOn = (comando) => {
return `*_${emojiFunction} Função ${comando} ativado com sucesso!_*`;
}
//functionOn

exports.chooseTheType = () => {
return `*_${emojiFunction} Escolha entre as 3 opções!_*`;
}
//chooseTheType
