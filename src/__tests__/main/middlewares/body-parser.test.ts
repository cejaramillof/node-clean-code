import * as request from 'supertest'
import app from '../../../main/config/app'

describe('BodyParser Middleware', () => {
  it('Should verify body-parse', async () => {
    app.post('/body-parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/body-parser').send({ name: 'Carlos' })
      .expect({ name: 'Carlos' })
  })
})
