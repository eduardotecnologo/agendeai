import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";

 const router = Router();


 // Doctors
 router.get("/doctors",controllerDoctor.Listar);
 router.post("/doctors",controllerDoctor.Inserir);
 router.put("/doctors/:id_doctor",controllerDoctor.Editar);
 router.delete("/doctors/:id_doctor",controllerDoctor.Excluir);

 // Users Account
 router.post("/users/register", controllerUser.Inserir);

 export default router;