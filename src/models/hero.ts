import { Villain } from './villain';

export interface IHero {
  HeroID: number;
  HeroName: string;
  MaxValue: number;
  MinValue: number;
  UsesLeft: number;
}
export class Hero {
  HeroId: number;
  HeroName: string;
  MaxValue: number;
  MinValue: number;
  UsesLeft: number;
  uses: number;

  constructor(IHero: IHero) {
    this.HeroId = IHero.HeroID;
    this.HeroName = IHero.HeroName;
    this.MaxValue = IHero.MaxValue;
    this.MinValue = IHero.MinValue;
    this.UsesLeft = IHero.UsesLeft;
    this.uses = this.UsesLeft;
  }
}
