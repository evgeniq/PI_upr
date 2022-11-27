import { DataSource } from 'typeorm';
import { Hero } from './hero.entity';

export const heroProviders = [
  {
    provide: 'HERO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Hero),
    inject: ['DATA_SOURCE'],
  },
];
