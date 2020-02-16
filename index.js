const express = require('express');

const app = express();
app.listen(4000, () => {
  console.log('listining on port');
});

app.use(express.static('public'));
