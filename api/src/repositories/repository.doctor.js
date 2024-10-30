import { query } from "../database/postgres.js";
async function Listar(name){

    let filtro = [];

    let sql = "select * from doctors ";

    if(name){
        sql = sql + " where name like $1 ";
        filtro.push('%' + name + '%');
    }
        sql = sql + " order by name "
    
    const doctors = await query(sql, filtro);

    return doctors;
}

async function Inserir(name, specialty, icon){

    let sql = `insert into doctors(name, specialty, icon) values($1, $2, $3)
               RETURNING id_doctor`;
    
    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}
export default { Listar,Inserir };