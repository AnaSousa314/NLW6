import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService{
  async execute(user_id:string){
    const complimentsepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsepositories.find({
      where:{
        user_sender: user_id
      }
    });

    return compliments
  }
}

export {ListUserSendComplimentsService}