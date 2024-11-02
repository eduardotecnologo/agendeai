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

async function ListarServicos(id_doctor){

    let sql = `select 
                ds.id_service ,
                s.description ,
                ds.price 
                from doctors_services ds,
                        services s 
                where ds.id_doctor = s.id_service
                and ds.id_doctor = $1
                order by s.description`;
    const serv = await query(sql, [id_doctor]);
    return serv;
}
async function Inserir(name, specialty, icon){

    let sql = `insert into doctors(name, specialty, icon) values($1, $2, $3)
               RETURNING id_doctor`;
    
    const doctor = await query(sql, [name, specialty, icon]);

    return doctor[0];
}

async function Editar(id_doctor, name, specialty, icon){

    let sql = `update doctors set name=$1, specialty=$2, icon=$3 
               where id_doctor = $4`;
    
    await query(sql, [name, specialty, icon,id_doctor]);
    return {id_doctor};
}

async function Excluir(id_doctor){
    let sql = `delete from doctors where id_doctor = $1`;
    await query(sql, [id_doctor]);
    return {id_doctor};
}
export default { Listar,ListarServicos,Inserir, Editar, Excluir};