const fs = require('fs');

function decodePayload(file) {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(/var _0xpayload = "(.*?)";/);
    if (!match) return "";
    let decoded = Buffer.from(match[1], 'base64').toString('utf8');
    return decoded;
}

const winDecoded = decodePayload('c:\\Users\\acer\\Desktop\\US-P\\z3b5n1p\\index.html');
const macDecoded = decodePayload('c:\\Users\\acer\\Desktop\\US-P\\x8f9q2m\\index.html');

console.log("Win includes modal-overlay:", winDecoded.includes('modal-overlay'));
console.log("Win includes Facebook:", winDecoded.includes('Facebook'));
console.log("Win includes facebook:", winDecoded.includes('facebook'));

console.log("Mac includes modal-overlay:", macDecoded.includes('modal-overlay'));
console.log("Mac includes Facebook:", macDecoded.includes('Facebook'));

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\win_decoded.html', winDecoded, 'utf8');
fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\mac_decoded.html', macDecoded, 'utf8');
