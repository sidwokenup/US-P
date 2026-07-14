const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
<script>
    document.open();
    document.write('<html><body><h1>Replaced!</h1><script>console.log("Script executed!");</sc'+'ript></body></html>');
    document.close();
</script>
</body>
</html>`;

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\inline_test.html', html);
