import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserInterface } from '../../types/user.interface';

@Entity({ name: 'user' })
export class UserEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
