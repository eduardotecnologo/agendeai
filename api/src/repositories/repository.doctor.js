import { query } from "../database/postgres.js";
async function Listar(){

    let sql = "select * from doctors order by name";
    
    const doctors = await query(sql, []);
    // const doctors = [
    //     {id: 1, name:"Eduardo", specialty: "Developer", icon:"M"},
    //     {id: 2, name:"Alexandre", specialty: "Developer", icon:"M"},
    //     {id: 3, name:"Lucio", specialty: "Developer", icon:"M"},]
    return doctors;
}
export default { Listar };