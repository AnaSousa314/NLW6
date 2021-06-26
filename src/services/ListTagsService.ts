import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import {classToPlain} from 'class-transformer'

class ListTagsService{
  async execute(){
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    // muda const acima para let
    // tags = tags.map((tag)=>(
    //    {...tag, nameCustom: `#${tag.name}`}
    //  ))

    return classToPlain(tags);
  }
}

export {ListTagsService}