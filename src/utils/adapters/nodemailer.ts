import { createTransport } from 'nodemailer'
import * as Mail from 'nodemailer/lib/mailer'
import { AddEmailAccount, IMessage } from '../../domain/useCases/addEmail'

export class MailNodemailerProvider implements AddEmailAccount {
  private readonly transporter: Mail
  constructor () {
    this.transporter = createTransport({
      host: process.env.HOSTNAME,
      secure: false,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
  }

  async sendEmail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}
