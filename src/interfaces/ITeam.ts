export interface ISoccerPlay {
  attack: (name: string) => void
}

export interface ITeam {
  position: (name: string, tShirt: number, skills: any[]) => void
}
