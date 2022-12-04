
import {BadRequestException, Inject, Injectable,NotFoundException } from '@nestjs/common';
import { Hero } from 'src/hero/hero.entity';
import { Repository } from 'typeorm';
import { UniverseDto } from './universe.dto';
import { Universe } from './universe.entity';

@Injectable()
export class UniverseService {
  constructor(
    @Inject('UNIVERSE_REPOSITORY')
    private universeRepository: Repository<Universe>,
    @Inject('HERO_REPOSITORY')
    private heroRepository: Repository<Hero>,
  ) {}
  public async findAll(): Promise<Universe[]> {
    return this.universeRepository.find({ relations: ['heroes'] });
  }

  public async createOne(hero: UniverseDto): Promise<Universe> {
    let createdUniverse = await this.universeRepository.save(hero);
    createdUniverse = await this.universeRepository.findOne({
      where: { id: createdUniverse.id },
    });
    return createdUniverse;
  }

  public async updateOne(universeDto: UniverseDto): Promise<Universe> {
    const { id, name } = universeDto;
    let persistedUniverse = await this.universeRepository.findOne({
      where: { id }
    });
    if (!persistedUniverse) {
      throw new NotFoundException(`Universe with id ${id} was not found.`);
    }

    persistedUniverse = await this.heroRepository.save({ id, ...universeDto });
    return persistedUniverse;
  }


  public async deleteOne(id: number): Promise<any> {
    let persistedUniverse = await this.heroRepository.findOne({
      where: { id }
    });
    if (!persistedUniverse) {
      throw new NotFoundException(`Universe with id ${id} was not found.`);
    }
    persistedUniverse = (await this.heroRepository.delete({ id }))?.raw;
    return persistedUniverse;
  }
}
