import 'reflect-metadata';

import express, { NextFunction,Request,Response } from 'express';
import "express-async-errors"; //para tratar erros sem usar try catch

import {router} from './routes';

import './database';


const app = express();

app.use(express.json());

app.use(router);

/*
  Tipos de parametros
  1 Routes Params - fazem parte da rota. são obrigatórios. ex http://localhost:3000/produtos
  
  2 Query Params - fazem parte de uma query, usado em filtros por exemplo. não são obrigatorios. ex: http:localhost:3000/produtos?name=teclado

  3 Body Params - vem no corpo da requisição, só podendo ser usados em POST, PUT e PATCH.ex.:
  {"name":"teclado","description":"teclado bom"}
*/

//Coloca-se o middleware de tratativa de erros depois das rotas, sempre
app.use((err: Error,req: Request,res: Response,next: NextFunction)=>{
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  } 

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

app.listen(3000, ()=>{
  console.log('Server is running NLW')
})