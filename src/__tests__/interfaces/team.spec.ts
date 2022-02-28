import { Team } from '../../models/team.model'

describe('Team class', () => {
  it('Position', () => {
    const team = new Team()

    const position = {
      name: 'goalkeeper',
      tShirt: 1,
      skills: ['kick hard', 'Run fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(Object.values(position))
  })

  it('Soccer Play', () => {
    const soccerPlay = new Team()
    expect(soccerPlay.attack('name')).toBe('name')
  })
})
