import { Bird, Eagle, Penguin } from '../../models/bird.model'

describe('Bird', () => {
  it('Shouldnt Fly', () => {
    const eagle = new Bird({
      name: 'Bird',
      age: 30,
      origin: 'North America'
    })
    expect((eagle as any).fly).toBeUndefined()
  })
  it('Eagle should Fly', () => {
    const eagle = new Eagle({
      name: 'Eagle',
      age: 30,
      origin: 'North America'
    })
    expect(eagle.fly()).toEqual('Eagle')
  })

  it('Penguin shouldnt Fly', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origin: 'North America'
    })
    expect((penguin as any).fly).toBeUndefined()
  })

  it('Penguin should Walk and Swim', () => {
    const penguin = new Penguin({
      name: 'Penguin',
      age: 30,
      origin: 'North America'
    })
    expect(penguin.swim()).toEqual('Penguin')
    expect(penguin.walk()).toEqual('Penguin')
  })
})
