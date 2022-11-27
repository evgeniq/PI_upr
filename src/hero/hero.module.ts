import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { HeroController } from './hero.controller';
import { heroProviders } from './hero.providers';
import { HeroService } from './hero.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HeroController],
  providers: [...heroProviders, HeroService],
  exports: [],
})
export class HeroModule {}
