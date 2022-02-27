import { InvalidArgument } from '../../errors/invalid-arg'
import { UrlLogin } from '../../protocols/http'

describe('Protocols Http and Querys', () => {
  test('Login Url', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')
    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Login Query Response', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const objectFromQueryParams = Object.fromEntries(parsedUrl.searchParams)

    const expectAuthUser = {
      user: 'user',
      password: 'password'
    }

    expect(objectFromQueryParams).toEqual(expectAuthUser)
    expect(parsedUrl.searchParams.get('user')).toEqual(expectAuthUser.user)
    expect(parsedUrl.searchParams.get('password')).toEqual(expectAuthUser.password)
  })

  test('User Url ', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parsedUrl.href).toBe('http://localhost:3000/user')
    expect(parsedUrl.port).toBe('3000')
  })

  test('User Query Response', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const objectFromQueryParams = Object.fromEntries(parsedUrl.searchParams)

    const expectUser = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }

    expect(objectFromQueryParams).toEqual(expectUser)
    expect(parsedUrl.searchParams.get('user')).toEqual(expectUser.user)
    expect(parsedUrl.searchParams.get('password')).toEqual(expectUser.password)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectError).toThrowError('Invalid Argument: url')
    expect(expectError).toThrowError(new InvalidArgument('url'))
  })
})
