import * as mongoose from 'mongoose'

export default (): void => {
  void mongoose.connect(
    process.env.MONGO_URI,
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: 'tddtest'
    },
    (res: any): void => {
      try {
        console.log('DB Connected at Port \x1b[32m27017\x1b[0m - \x1b[32m%s\x1b[0m', 'online')
      } catch (error) {
        res.status(500).json({
          ok: false,
          message: 'Error to connect database'
        })
      }
    })
}
