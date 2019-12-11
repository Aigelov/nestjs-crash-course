import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemEntity } from './entities/item.entity';

@Injectable()
export class ItemsService {
  // constructor(
  //   @InjectRepository(ItemEntity)
  //   private readonly itemRepository: Repository<ItemEntity>,
  // ) {
  // }
  //
  // async findAll(): Promise<ItemEntity[]> {
  //   return await this.itemRepository.find();
  // }

  // async findOne(id: string): Promise<ItemEntity> {
  //   return await this.itemRepository.findOne({
  //     id: id,
  //   });
  // }
}
