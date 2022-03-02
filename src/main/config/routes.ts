import { Express, Router } from 'express'
import * as fq from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  fq.sync('**/src/main/routes/**.ts')
    .map(async (file: string) => (await import(`../../../${file}`)).default(router))
}
