export interface IVillain {
  VillainID: number;
  VillainName: string;
  Health: number;
}
export class Villain {
  VillainID: number;
  VillainName: string;
  Health: number;
  HealthCurrent: number;

  constructor(
    VillainID: number,
    VillainName: string,
    Health: number,
    HealthCurrent: number
  ) {
    this.VillainID = VillainID;
    this.VillainName = VillainName;
    this.Health = Health;
    this.HealthCurrent = HealthCurrent;
  }
}
