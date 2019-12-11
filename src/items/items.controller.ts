import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { ItemEntity } from './entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  // @Get()
  // async findAll(): Promise<ItemEntity[]> {
  //   return await this.itemsService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param() param): Promise<ItemEntity> {
  //   return await this.itemsService.findOne(param.id);
  // }

  // @Post()
  // create(@Body() createItemDto: CreateItemDto): string {
  //   return `
  //     Name: ${createItemDto.name}
  //     Desc: ${createItemDto.description}
  //   `;
  // }
  //
  // @Delete(':id')
  // delete(@Param('id') id): string {
  //   return `Delete ${id}`;
  // }
  //
  // @Put(':id')
  // update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
  //   return `Update ${id} - Name: ${updateItemDto.name}`;
  // }
}
