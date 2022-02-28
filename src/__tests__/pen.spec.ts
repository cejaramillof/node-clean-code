import { Pen } from '../models/pen'

describe('Pen', () => {
  test('Pen', () => {
    // Metodos = Verbos/Acciones
    // Clases/Objetos = Sustantivos
    const pen = new Pen('Hola Mundo')
    expect(pen.write()).toBe('Hola Mundo')
  })
})
