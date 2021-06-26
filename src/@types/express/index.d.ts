//sobrescreve a biblioteca do express para reconhecer o Request user_id
declare namespace Express{
  export interface Request{
    user_id: string
  }
}