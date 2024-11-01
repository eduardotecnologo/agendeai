import jwt from "jsonwebtoken";
import 'dotenv/config';

const secretToken = process.env.SECRET_TOKEN;

function CreateToken(id_user){
    const token = jwt.sign({id_user}, secretToken, {
        expiresIn: 9999
    });
    return token;
}

function ValidateToken(req, res, next) {
    const authToken = req.headers.authorization; 
    if (!authToken) {
        return res.status(401).json({ error: "Token não informado!" });
    }
    const [bearer, token] = authToken.split(" "); // "Bearer" "000000"
    if (bearer !== "Bearer" || !token) {
        return res.status(401).json({ error: "Token inválido!" });
    }
    jwt.verify(token, secretToken, (err, tokenDecoded) => {
        if (err) {
            return res.status(401).json({ error: "Token inválido!" });
        }
        
        req.id_user = tokenDecoded.id_user;
        next(); // Se validado, segue!
    });
}

export default{CreateToken, ValidateToken};