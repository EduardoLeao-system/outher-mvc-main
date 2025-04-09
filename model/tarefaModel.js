// models/TarefaModel.js

let tarefas = [
  { id: 1, descricao: "Estudar sobre MVC" },
  { id: 2, descricao: "Fazer o trabalho de matemática" },
  { id: 3, descricao: "Enviar relatório semanal" }
];

module.exports = {
  listar() {
    return tarefas;
  },

  adicionar(descricao) {
    const novaTarefa = {
      id: Date.now(),
      descricao
    };
    tarefas.push(novaTarefa);
  },

  remover(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  }
};
