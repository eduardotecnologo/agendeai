import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

const db = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,                
});

function query(command, params, method = 'all') {//Opcional
    return new Promise((resolve, reject) => {
        db.query(command, params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows); // O resultado das consultas retorna as linhas
            }
        });
    });
}

db.connect(err => {
    if (err) {
        return console.error('Erro ao conectar com o banco: ' + err.stack);
    } else {
        console.log('Conectado ao banco de dados PostgreSQL');
    }
});

export { db, query };
