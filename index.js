const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
