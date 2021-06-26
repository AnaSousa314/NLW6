import {Request,Response,NextFunction} from 'express'
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';


export async function ensureAdmin(req: Request,res: Response, next:NextFunction){
  const {user_id} = req
  console.log(user_id);

  const usersRepositories = getCustomRepository(UsersRepositories);

  const {admin} = await usersRepositories.findOne(user_id)


//verificar se o usuario é admin


if(admin){
  return next();
}

// status 401 Unauthorized
return res.status(401).json({
  error: "User Unauthorized"
})


}