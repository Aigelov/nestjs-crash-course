import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('item')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({length: 255})
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  qty: number;

  @CreateDateColumn()
  created: Date;
}
