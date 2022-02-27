// eslint-disable-next-line node/no-deprecated-api
import { parse, URL, UrlWithParsedQuery } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    let parsedUrl
    try {
      parsedUrl = new URL(url)
    } catch (error) {
      throw new InvalidArgument('url')
    }
    return parsedUrl
  }

  public static parseUrlDeprecated (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
