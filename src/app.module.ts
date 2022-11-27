import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HeroModule } from './hero/hero.module';
import { UniversityModule } from './universe/universe.module';

@Module({
  imports: [ConfigModule.forRoot(), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
