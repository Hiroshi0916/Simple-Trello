const express = require('express');
const{renderToString}=require('react-dom/server');
const React = require('react');
const App = require('../src/App').default;

const app=express();
const PORT = 9000;


app.get('/', (req, res) => {
  const content = renderToString(<App />);

  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Trello App with SSR</title>
    <link rel="stylesheet" href="/static/css/main.48d821ec.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="/client.bundle.js"></script>
    </body>
  </html>
`;

res.send(html);
});
app.use(express.static('build')); 

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
