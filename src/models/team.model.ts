import { ISoccerPlay, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlay {
  position (name: string, tShirt: number, skills: any[]): any[] {
    return [
      name, tShirt, skills
    ]
  }

  attack (name: string): string {
    return name
  }
}
