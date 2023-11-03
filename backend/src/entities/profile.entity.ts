import { TypeProfile } from 'src/common/constants';
import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'profiles', schema: 'public' })
export class ProfileEntity extends BaseEntity {
  @Column({ nullable: true, unique: true })
  email?: string;

  @Column({ nullable: true, unique: true })
  phone?: string;

  @Column({
    type: 'enum',
    enum: TypeProfile,
    default: TypeProfile.Customer,
  })
  type: TypeProfile;

  @Column({ nullable: true })
  full_name?: string;

  @Column({ nullable: true })
  image_path?: string;

  @Column({ nullable: true })
  user_id?: string;
}
