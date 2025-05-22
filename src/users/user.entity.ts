import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity {
  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  password: string;
}
