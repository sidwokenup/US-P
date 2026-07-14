const fs = require('fs');

const html = `<script>
    document.write('<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Synchronous Write!</h1><script>console.log("Script executed!");</sc'+'ript></body></html>');
</script>`;

fs.writeFileSync('c:\\Users\\acer\\Desktop\\US-P\\sync_test2.html', html);
