import {Request,Response,NextFunction} from 'express'
import {verify} from 'jsonwebtoken'

interface IPayload{
  sub: string
}
export function ensureAuthenticate(req: Request,res: Response, next:NextFunction){
//Receber o token
  const authToken = req.headers.authorization
  //console.log(authToken);

  //Validar se authToken está preenchido
  if (!authToken) {
    return res.status(401).end();
  }

  const [,token] = authToken.split(" ");//a primeira posicao do array será ignorada e a segunda irá para a variável token
  //console.log(token)


  //Validar se token é valido
  try {
    const {sub} = verify(token,"0624c2d266cd7b2918b563598437f35d") as IPayload;
    //não seria mais fácil só dar um toString?
    //console.log(decode)
    
    
    // Recuperar informacoes do usuario
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  } 





  // status 401 Unauthorized
  /* return res.status(401).json({
    error: "User Unauthorized"
  }) */
  

}