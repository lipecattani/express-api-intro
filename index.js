const express = require('express');
const app = express();
const tarefasRoutes = require('./routes/tarefas');

app.use(express.json());

app.use('/tarefas', tarefasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
