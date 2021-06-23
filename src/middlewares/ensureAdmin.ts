import {Request,Response,NextFunction} from 'express'


export function ensureAdmin(req: Request,res: Response, next:NextFunction){
//verificar se o usuario é admin
const admin = true;

if(admin){
  return next();
}

// status 401 Unauthorized
return res.status(401).json({
  error: "User Unauthorized"
})


}