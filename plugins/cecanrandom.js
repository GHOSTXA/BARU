let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/cecan.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    conn.sendButtonImg(m.chat, img, 'Nih', ownername, 'Next', `.cecanrandom`, m) 
}
handler.help = ['cecanrandom']
handler.tags = ['asupan']
handler.limit = 5
handler.command = /^(cecanrandom)$/i

module.exports = handler
