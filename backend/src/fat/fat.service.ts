import { Injectable } from '@nestjs/common';

@Injectable()
export class FatService {
  getAll(): string {
    return 'returns all FAT records';
  }

  createFat(createFatDto): string {
    //should be unique probably in name
    return 'creates a new unique Fat';
  }

  updateFat(updateFatDto, id): string {
    //should be unique probably in name
    return 'updates existing Fat record';
  }

  archiveFat(id): string {
    //should be unique probably in name
    return 'archives existing Fat record';
  }
}
