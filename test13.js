const fs = require('fs');
const orig = fs.readFileSync('c:\\Users\\acer\\Desktop\\US-P\\Wi044nhelpHr044\\index.html', 'utf8');

const html = `<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
<script>
    var content = ${JSON.stringify(orig)};
    document.open();
    document.write(content);
    document.close();
</script>
</body>
</html>`;

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\test13.html', html);
