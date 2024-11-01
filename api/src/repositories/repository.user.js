import { query } from "../database/postgres.js";
async function Inserir(name, email, password){

    let sql = `INSERT INTO users(name, email, password) VALUES($1, $2, $3)
               RETURNING id_user`;
    
    const user = await query(sql, [name, email, password]);

    return user[0];
}

async function ListarByEmail(email){

    let sql = `SELECT * FROM users WHERE email = $1`;
    const user = await query(sql, [email]);
    if(user.length == 0){
        return [];
    }else{
        return user[0];
    }
}

export default { Inserir, ListarByEmail };