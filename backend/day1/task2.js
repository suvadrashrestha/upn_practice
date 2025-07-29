// Read about url module and use it to accomplish (https://nodejs.org/api/url.html): a. Parsing a request paths b. Parsing a headers c. Parsing a payload d. Parsing a query
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;
  const path = parsedUrl.pathname;

  const headers = req.headers;

  let body = '';

  req.on('data', chunk => {
    body += chunk.toString(); 
  });

  req.on('end', () => {
    let parsedBody = {};
    try {
      parsedBody = JSON.parse(body);
    } catch (e) {
      parsedBody = { raw: body };
    }

    const result = {
      method: req.method,
      path,
      query,
      headers,
      body: parsedBody 
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
