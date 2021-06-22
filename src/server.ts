import express from 'express';
import 'reflect-metadata';
import './database';
import {router} from './routes';

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


app.listen(3000, ()=>{
  console.log('Server is running NLW')
})