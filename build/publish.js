const { inlineSource } = require('inline-source');
const fs = require('fs');
const path = require('path');
const htmlpath = path.resolve('./index.html');

inlineSource(htmlpath, {
    compress: true,
    rootpath: path.resolve('./'),
    // Skip all css types and png formats
    ignore: ['png']
}).then(html => {
    // Do something with html
    //console.log(html);
    fs.writeFileSync('./dist/index.html', html, { encoding: 'utf8', flag: 'w' });
}).catch(err => {
    // Handle error
    console.error(err)
});