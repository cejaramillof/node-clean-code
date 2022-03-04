declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number
      MONGO_URI: string
      HOSTNAME: string
      EMAIL_PORT: number
      EMAIL: string
      PASSWORD: string
    }
  }
}

export {}
