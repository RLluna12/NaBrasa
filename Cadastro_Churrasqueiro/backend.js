const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3004;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'nabrasa',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(bodyParser.json());
app.use(cors());

app.get("/Churrasqueiro", (req, res) => {
    console.log("GET /churrasqueiro");
    pool.query(
        'SELECT * FROM churrasqueiro',
        (err, results) => {
            if (err) {
                console.error("Erro ao buscar churrasqueiro:", err);
                return res.status(500).send(err.message);
            }
            console.log("Churrasqueiros encontrados:", results);
            res.status(200).json(results);
        }
    );
});

app.post("/churrasqueiro", (req, res) => {
    const { ID, Nome, Endereco, Email, Telefone, Senha, CPF } = req.body;
    pool.query(
        'INSERT INTO churrasqueiro(ID, Nome, Endereco, Email, Telefone, Senha, CPF) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ID, Nome, Endereco, Email, Telefone, Senha, CPF],
        (err, results) => {
            if (err) {
                console.error("Erro ao cadastrar churrasqueiro:", err);
                return res.status(500).send(err.message);
            }
            console.log("Churrasqueiro cadastrado com sucesso!");
            res.status(200).send('Churrasqueiro cadastrado com sucesso!');
        }
    );
});

app.put("/churrasqueiro/:id", (req, res) => {
    const clientId = req.params.id;
    const { Nome, Endereco, Email, Telefone, Senha, CPF } = req.body;
    pool.query(
        'UPDATE cliente SET Nome=?, Endereco=?, Email=?, Telefone=?, Senha=?, CPF=? WHERE ID=?',
        [Nome, Endereco, Email, Telefone, Senha, CPF, clientId],
        (err, results) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Churrasqueiro não encontrado');
            }
            res.status(200).send('Churrasqueiro atualizado com sucesso!');
        }
    );
});

app.delete("/churrasqueiro/:id", (req, res) => {
    const clientId = req.params.id;
    pool.query(
        'DELETE FROM churrasqueiro WHERE ID=?',
        [clientId],
        (err, results) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Churrasqueiro não encontrado');
            }
            res.status(200).send('Churrasqueiro removido com sucesso!');
        }
    );
});

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});
