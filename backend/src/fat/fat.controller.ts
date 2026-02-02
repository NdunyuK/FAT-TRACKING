import { Controller, Get, Post, Body, Put, Param, Patch } from '@nestjs/common';
import { FatService } from './fat.service';
import { CreateFatDto, UpdateFatDto } from './fat.dto';

@Controller("fat")
export class FatController {
  constructor(private readonly fatService: FatService) {}

  @Get()
  getAll(): string {
    return this.fatService.getAll();
  }
  @Post()
  createFat(@Body() createFatDto : CreateFatDto): string {
    console.log(createFatDto)
    return this.fatService.createFat(createFatDto)
  }
  @Put(':id')
  updateFat(@Body() updateFatDto : UpdateFatDto, @Param('id') id : string): string {
    console.log(updateFatDto)
    return this.fatService.updateFat(updateFatDto, id)
  }
  @Patch(':id')
  archiveFat(@Param('id') id : string): string {
    console.log(id)
    return this.fatService.archiveFat(id)
  }
}
