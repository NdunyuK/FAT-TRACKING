import { Module } from '@nestjs/common';
import { SplitterService } from './splitter.service';

@Module({
  providers: [SplitterService]
})
export class SplitterModule {}
