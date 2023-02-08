const PORT = 3036;
const app = require('express')();

app.options('/a', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  res.send('a options res');
});
app.get('/a', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  res.send('a get res');
});

app.options('/b', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

  res.send('b options res');
});
app.post('/b', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

  res.send('b get res');
});

app.options('/bb', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

  res.send('bb options res');
});
app.post('/bb', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

  res.send('bb get res');
});

app.options('/c', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS',
  );
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');

  res.send('c options res');
});
app.put('/c', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');

  res.send('c get res');
});

app.listen(PORT, console.log(`listening to ${PORT}`));
