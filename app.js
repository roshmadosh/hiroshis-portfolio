const path = require('path');
const { indexHTMLLocation, generateTemplate } = require('./src/js/template-generator.js');
const express = require('express');

const app = express();
generateTemplate();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(indexHTMLLocation);
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
})