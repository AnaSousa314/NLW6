import {Entity, PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("users")

class User {
  @PrimaryColumn()
  readonly id: string;
  
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(){
    //se o id for null ele criará um
    if(!this.id){
      this.id = uuid();
    }
  }
}

export {User};