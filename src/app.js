const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to Babali Shop',
  });
});

app.listen(3000, () => {
  console.log(`Babali Shop API on port ${3000}`);
});