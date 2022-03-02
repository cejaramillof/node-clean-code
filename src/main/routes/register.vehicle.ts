import { Router } from 'express'

export default (router: Router): void => {
  router.post('/vehicle', (req, res) => {
    res.send(200)
  })
}
