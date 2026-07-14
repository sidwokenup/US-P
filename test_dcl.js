const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
<script>
    var content = "<!DOCTYPE html><html><head><style>body { background: red; }</style><script>document.addEventListener('DOMContentLoaded', () => console.log('FIRED DOMContentLoaded!'));</sc"+"ript></head><body><h1>Hello</h1></body></html>";
    document.open();
    document.write(content);
    document.close();
</script>
</body>
</html>`;

const dom = new JSDOM(html, { runScripts: "dangerously" });
setTimeout(() => {
    console.log("JSDOM finished.");
}, 500);
