import express from 'express'

// @types/express - adicionamos isso para que haja o autocomplete

const app = express();

/*
 *GET => Buscar Informação
 *POST => Inserir(Criar) uma informação
 *PUT => Alterar uma informação 
 *DELETE => Remover um dado
 *PATCH => Alterar uma informação específica (ex.: somente senha)
*/

app.get('/test',(req,res)=>{
  // Request => Entrando
  // Response => Saindo

  // coloque return antes para evitar possíveis loops
  return res.send("Olá NLW")
 });

 app.post('/test-post',(req,res)=>{
   return res.send("Post")
 })

app.listen(3000, ()=>{
  console.log('Server is running NLW')
})