
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './models/hero';
import { Villain } from './models/villain';
import { Result } from './models/result';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class HeroGameService {
  readonly jsonURL: string = 'https://my-json-server.typicode.com/JadMashtoub3/MockHeroGameJSONserver/'
  constructor(private _http: HttpClient) { }
  //retrieves from mock server
  getAllHeroes(): Observable<Hero[]> {
    const url = this.jsonURL + "heroes"
    return this._http.get<Hero[]>(url);
  }
  getAllVillains(): Observable<Villain[]> {
    const url = this.jsonURL + "villains"
    return this._http.get<Villain[]>(url);
  }
}
