const httpStatus = require('http-status')
const request = require('supertest')
const app = require('../config/app.config')

describe('AuthController', () => {
  it('register', () => {
    const formData = {
      firstName: 'Jhon',
      lastName: 'Doe',
      phone: '6282322153795',
      email: 'jhon@example.com',
      password: 'jhondoe123',
      passwordConfirmation: 'jhondoe123'
    }

    return request(app)
      .post('/api/v1/auth/register')
      .send(formData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((res) => {
        if (res.status === httpStatus.UNPROCESSABLE_ENTITY) {
          expect(res.body.data).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                value: expect.any(String),
                msg: expect.any(String),
                param: expect.any(String),
                location: expect.any(String),
              })
            ])
          )
          expect.objectContaining({
            status: httpStatus.UNPROCESSABLE_ENTITY,
            message: expect.any(String)
          })
        } else if (res.status === httpStatus.CREATED) {
          expect(res.body.data).toEqual(
            expect.objectContaining({
              token: expect.any(String)
            })
          )
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.CREATED,
              message: expect.any(String)
            })
          )
        } else {
          expect(res.body.data).toBeNull()
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.BAD_REQUEST,
              message: expect.any(String)
            })
          )
        }
      })
  })

  it('login', () => {
    const formData = {
      email: 'jhon@example.com',
      password: 'jhondoe123',
    }

    return request(app)
      .post('/api/v1/auth/login')
      .send(formData)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then((res) => {
        if (res.status === httpStatus.OK) {
          expect(res.body.data).toEqual(
            expect.objectContaining({
              token: expect.any(String)
            })
          )
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.OK,
              message: expect.any(String)
            })
          )
        } else {
          expect(res.body.data).toBeNull()
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.UNPROCESSABLE_ENTITY,
              message: expect.any(String)
            })
          )
        }
      })
  })

  it('logout', () => {
    return request(app)
      .patch('/api/v1/auth/logout')
      .expect('Content-Type', /json/)
      .then((res) => {
        if (res.status === httpStatus.OK) {
          expect(res.body.data).toBeNull()
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.OK,
              message: expect.any(String)
            })
          )
        } else {
          expect(res.body.data).toBeNull()
          expect(res.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.UNAUTHORIZED,
              message: expect.any(String)
            })
          )
        }
      })
  })
})