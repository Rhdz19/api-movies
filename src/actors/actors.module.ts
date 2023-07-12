import { Module } from '@nestjs/common';
import { ActorsController } from './actors.controller';

@Module({
  imports: [],
  controllers: [ActorsController],
  providers: [],
})
export class ActorsModule {}
