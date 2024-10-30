import controllerUser from "../services/service.user.js";
async function Inserir(req, res){
    const { name, specialty, icon } = req.body;
    const doctor = await serviceUser.Inserir(name, specialty, icon);
    res.status(201).json(doctor);
}

export default {Listar, Inserir, Editar, Excluir};

