import * as express from 'express'
import { config as dotenv } from 'dotenv'

import routes from './routes'

const app = express()

routes(app)
dotenv()

export default app
