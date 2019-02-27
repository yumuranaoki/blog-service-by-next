const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/post/:id', (req, res) => {
    const pathName = '/post';
    const queryParams = { id: req.params.id }
    app.render(req, res, pathName, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8000, (err) => {
    if (err) throw err;
    console.log('ready on http://localhost:8000')
  })
})
.catch((ex) => {
  console.log(ex.stack)
  process.exit(1);
})