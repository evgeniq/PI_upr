import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [HeroListComponent],
  imports: [TableModule],
  providers: [HeroService],
  bootstrap: [],
})
export class HeroModule {}
