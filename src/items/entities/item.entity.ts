import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({length: 255})
  name: string;

  @Column('text')
  desciption: string;

  @Column('int')
  qty: number;
}
