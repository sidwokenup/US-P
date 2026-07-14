const fs = require('fs');

const html = `<script>
    document.write('<!DOCTYPE html><html><head><style>body { background: red; }</style></head><body><h1>Hello</h1><script>console.log("Ran!");</sc'+'ript></body></html>');
</script>`;

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\test_sync_head.html', html);
