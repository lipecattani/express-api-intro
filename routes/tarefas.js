const express = require('express');
const router = express.Router();

let tarefas = ['Estudar Node.js', 'Gravar curso'];

router.get('/', (req, res) => {
  res.json({ tarefas });
});

router.post('/', (req, res) => {
  const { tarefa } = req.body;
  if (!tarefa) {
    return res.status(400).json({ erro: 'Tarefa é obrigatória.' });
  }

  tarefas.push(tarefa);
  res.status(201).json({ mensagem: 'Tarefa adicionada com sucesso!', tarefas });
});

module.exports = router;
