// import express
const express = require('express');

// starts express
const app = express();

// local onde build ira gerar os arquivos
const outputPath = `${__dirname}/build`;

// seta o diretorio de build para servir o conteudo estatico
app.use(express.static(outputPath));

// qualquer requisicao sera direcionada para o index.html no diretorio de build
app.get("/*", (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

// express vai ouvir na porta que o Heroku disponibilizar
app.listen(process.env.PORT);
