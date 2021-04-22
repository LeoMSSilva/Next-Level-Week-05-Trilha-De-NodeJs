import express from "express";

const app = express();

app.get('/', (req, res) => {
	res.json({
		mensagem: "Hello Next Level Week 05"
	})
});

app.post('/', (req, res) => {
	res.json({
		mensagem: "Hello Next Level Week 05"
	});
});

app.listen(3333, () => {
	console.log('Servidor rodando na porta 3333');
	console.log('Acesse: http://127.0.0.1:3333');
});
