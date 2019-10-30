const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://teste:teste@omnistack-vgqln.mongodb.net/semana-09?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
//GET (pegar do backend)
//POST (criar)
//PUT (editar)
//delete (deletar)

// req.query = acessar query params (para filtro)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)


// iniciar terminal = yarn dev

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333);