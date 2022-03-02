import app from '../config/app'

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Server is working at Port: \x1b[32m${port}\x1b[0m`)
})
