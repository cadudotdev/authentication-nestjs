import { EntityInterface } from './entity.interface';

export interface UserInterface extends EntityInterface {
  nickname: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
