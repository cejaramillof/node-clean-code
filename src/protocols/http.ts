// eslint-disable-next-line node/no-deprecated-api
import { parse, URL, UrlWithParsedQuery } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): URL {
    try {
      return new URL(url)
    } catch (error) {
      throw new InvalidArgument('url')
    }
  }

  public static parseUrlDeprecated (url: string): UrlWithParsedQuery {
    return parse(url, true)
  }
}
