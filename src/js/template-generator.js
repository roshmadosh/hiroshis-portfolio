const path = require('path');
const fs = require('fs');

const blocks = [
  {
    fileName: 'header',
    path: path.join('src', 'html', 'partials', 'header.html'),
  },
  {
    fileName: 'home',
    path: path.join('src', 'html', 'sections', 'home.html'),
  },
  { 
    fileName: 'footer',
    path: path.join('src', 'html', 'partials', 'footer.html'),
  }
]
const indexHTMLLocation = path.join('public', 'index.html'); 

exports.indexHTMLLocation = indexHTMLLocation;
exports.generateTemplate =  function generateTemplate() {
  let template = fs.readFileSync(path.join('src', 'html', 'index.html')).toString();
  blocks.forEach(block => {
    blockHTML = fs.readFileSync(block.path);
    template = template.replace(`<div include-html="${block.fileName}"></div>`, blockHTML);
  })
  fs.writeFileSync(indexHTMLLocation, template);
}
