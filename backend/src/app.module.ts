import { Module } from '@nestjs/common';
import { FatController } from './fat/fat.controller';
import { FatService } from './fat/fat.service';
import { SplitterModule } from './splitter/splitter.module';
import { FatModule } from './fat/fat.module';

@Module({
  imports: [SplitterModule, FatModule],
  controllers: [FatController],
  providers: [FatService],
})
export class AppModule {}
