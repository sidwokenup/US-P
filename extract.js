const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\acer\\Desktop\\US-P\\x8f9q2m\\index.html', 'utf8');
const match = content.match(/var _0xpayload = "(.*?)";/);
fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\debug_mac.html', Buffer.from(match[1], 'base64').toString('utf8'));

const contentWin = fs.readFileSync('c:\\Users\\acer\\Desktop\\US-P\\z3b5n1p\\index.html', 'utf8');
const matchWin = contentWin.match(/var _0xpayload = "(.*?)";/);
fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\debug_win.html', Buffer.from(matchWin[1], 'base64').toString('utf8'));
