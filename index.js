const express = require('express');
const path = require('path');

const app = express();
const appPort = process.env.PORT || 4000;
const appURL = process.env.APPURL || `http://localhost:${appPort}/`;
const root = path.join(__dirname, './static');

app.use(express.json());
app.use(express.static(root));
app.set('views', root);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile('home.html', { root: root  });
});

app.get('/demographics', (req, res) => {
  res.sendFile('demographics.html', { root: root  });
});

app.listen(appPort);
