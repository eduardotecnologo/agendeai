import bcrypt from "bcrypt";
import repositoryUser from "../repositories/repository.user.js";
async function Inserir(name, email, password){
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await repositoryUser.Inserir(name, email, hashPassword);
    return user;
}

async function Login(email, password){
    const user = await repositoryUser.ListarByEmail(email);
    if(user.length == 0){
        return [];
    }else{
        if(await bcrypt.compare(password, user.password)){
            return user;
        }else{
            return [];
        }
    }
    return user;
}

export default {Inserir,Login};