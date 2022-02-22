import teste from './test'

test('Node is a constructor', () => {
  expect(typeof teste).toEqual('function')
})
