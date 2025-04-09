// controllers/tarefaController.js

const TarefaModel = require('../model/tarefaModel');

exports.listarTarefas = (req, res) => {
  const tarefas = TarefaModel.listar();
  res.json(tarefas); // ou renderizar se quiser com template
};

exports.adicionarTarefa = (req, res) => {
  const { descricao } = req.body;

  if (descricao) {
    TarefaModel.adicionar(descricao);
  }

  res.redirect('/');
};

exports.removerTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  TarefaModel.remover(id);
  res.redirect('/');
};
