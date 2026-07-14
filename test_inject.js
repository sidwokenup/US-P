const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = `<!DOCTYPE html>
<html>
<head></head>
<body>
  <script>
    document.open();
    document.write("<!DOCTYPE html><html><head></head><body><h1>Injected</h1></body></html>");
    document.close();
  </script>
</body>
</html>`;

const dom = new JSDOM(html, { runScripts: "dangerously" });
setTimeout(() => {
    console.log(dom.window.document.documentElement.outerHTML);
}, 100);
