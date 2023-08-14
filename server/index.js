const express = require('express');
const{renderToString}=require('react-dom/server');
const React = require('react');
const App = require('../src/App').default;

const app=express();
const PORT = 9000;

app.use(express.static('build')); 

app.get('/', (req, res) => {
  const content = renderToString(<App />);

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Your App Name</title>
      <link rel="stylesheet" href="/path-to-your-css.css"> <!-- CSSへのパスも適切に指定 -->
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/client.bundle.js"></script>
    </body>
  </html>
`;

res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
