import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HeroDto } from './hero.dto';
import { Hero } from './hero.entity';

@Injectable()
export class HeroService {
  constructor(
    @Inject('HERO_REPOSITORY')
    private heroRepository: Repository<Hero>,
  ) {}
  public async findAll(): Promise<Hero[]> {
    return this.heroRepository.find();
  }

  public async createOne(hero: HeroDto): Promise<Hero> {
    let createdHero = await this.heroRepository.save(hero);
    createdHero = await this.heroRepository.findOne({
      where: { id: createdHero.id },
    });
    return createdHero;
  }
}
