const express = require('express');
const path = require('path');
const tarefaController = require('./controller/tarefaController');

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos da pasta "view"
app.use(express.static(path.join(__dirname, 'view')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.get('/usuarios', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'usuarios.html'));
});

app.get('/tarefas', tarefaController.listarTarefas);
app.post('/adicionar', tarefaController.adicionarTarefa);
app.get('/remover/:id', tarefaController.removerTarefa);

// Iniciando servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
