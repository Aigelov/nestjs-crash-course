import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemEntity } from './entities/item.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature([
    //   ItemEntity,
    // ]),
  ],
  controllers: [],
  providers: [],
})
export class ItemsModule {}
