import { Column, Entity, BeforeInsert, BeforeUpdate } from 'typeorm';
import { BaseEntity } from './base.entity';
import { TypeUser } from 'src/common/constants';
import * as bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

@Entity('users', { schema: 'public' })
export class UserEntity extends BaseEntity {
  @Column({ default: null })
  password: string;

  @Column({ unique: true, nullable: true })
  phone?: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({
    type: 'enum',
    enum: TypeUser,
    default: TypeUser.Customer,
  })
  type: TypeUser;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.id = nanoid();
    this.password = await bcrypt.hash(this.password, 10);
  }
}
