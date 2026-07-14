const fs = require('fs');

const html = `<!DOCTYPE html>
<html>
<head><title>Async Inject Test</title></head>
<body>
<script>
    const decoded = \`
        <head><style>h1 { color: red; }</style></head>
        <body>
            <h1>Injected!</h1>
            <script>console.log("Inline script ran!");</sc\`+\`ript>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></sc\`+\`ript>
            <script>
                setTimeout(() => {
                    console.log("jQuery available:", typeof $ !== 'undefined');
                }, 500);
            </sc\`+\`ript>
        </body>
    \`;

    setTimeout(() => {
        // We can create a new document using DOMParser, then adopt its nodes
        const parser = new DOMParser();
        const doc = parser.parseFromString(decoded, 'text/html');
        
        document.documentElement.replaceWith(doc.documentElement);

        // Scripts parsed via DOMParser do NOT execute. We must clone and replace them.
        const scripts = document.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.textContent = oldScript.textContent;
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });
    }, 200);
</script>
</body>
</html>`;

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\async_test.html', html);
