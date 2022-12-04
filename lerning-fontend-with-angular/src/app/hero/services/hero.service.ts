import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) {}

  getAllHeroes() {
    return this.http.get(`${environment.backendUrl}/hero`);
  }
}
