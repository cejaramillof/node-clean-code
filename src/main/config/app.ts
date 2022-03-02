import * as express from 'express'
import { config as dotenv } from 'dotenv'

import routes from './routes'
import middlewares from './middlewares'

const app = express()

middlewares(app)
routes(app)

dotenv()

export default app
