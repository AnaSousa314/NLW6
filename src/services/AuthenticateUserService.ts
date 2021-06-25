import { getCustomRepository } from "typeorm"

import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest{
  email: string,
  password: string
}

class AuthenticateUserService{
  async execute({email,password}:IAuthenticateRequest){
    const userRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await userRepositories.findOne({
      email
    });

    if(!user){
      throw new Error("Email/Password incorrect")
    }

    // Verificar se senha está correta
     const passwordMatch = await compare(password, user.password);

     if(!passwordMatch){
      throw new Error("Email/Password incorrect")
     }


    // Gerar token
     const token = sign({
       email: user.email
     }, "0624c2d266cd7b2918b563598437f35d"/* md5 criado em um site, transformar em .env */,{
       subject: user.id,
       expiresIn: "1d"//tempo de expiração 1 dia
    })

    return token
  }
}

export {AuthenticateUserService}