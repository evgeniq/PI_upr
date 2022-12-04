import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: any;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
      },
      error: (err) => {},
    });
  }
}
