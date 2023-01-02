import { Module } from '@nestjs/common';
import { PhotosResolver } from './photos.resolver';

@Module({
    providers: [PhotosResolver],
})
export class PhotosModule {}
