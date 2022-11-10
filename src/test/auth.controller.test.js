const httpStatus = require('http-status')
const request = require('supertest')
const app = require('../config/app.config')

// const okObject = {
//   message: () => "Ok",
//   pass: true,
// }

// expect.extend({
//   jsonToNull(r, a) {
//     if (r === null) return okObject
//     if (expect(r).toEqual(expect.any(Array))) return okObject
//     if (expect(r).toEqual(expect.any(Object))) return okObject

//     return {
//       message: () => `expected ${r} to be ${a} type or null`,
//       pass: false,
//     }
//   },
//   byPass() {
//     return okObject
//   }
// })

describe('AuthController', () => {
  it('register -> login -> logout -> me', async () => {
    // === REGISTER ===
    const formRegister = {
      firstName: 'Jhon',
      lastName: 'Doe',
      phone: '+6285920616343',
      email: 'jhon@example.com',
      password: 'password',
    }
    const register = await request(app)
      .post('/api/v1/auth/register')
      .send(formRegister)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
    if (register.status === httpStatus.UNPROCESSABLE_ENTITY) {
      expect(register.body.data).toEqual(
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
    } else if (register.status === httpStatus.CREATED) {
      expect(register.body.data).toEqual(
        expect.objectContaining({
          token: expect.any(String)
        })
      )
      expect(register.body.header).toEqual(
        expect.objectContaining({
          status: httpStatus.CREATED,
          message: expect.any(String)
        })
      )

      // === LOGIN ===
      const formLogin = {
        email: 'jhon@example.com',
        password: 'password',
      }
      const login = await request(app)
        .post('/api/v1/auth/login')
        .send(formLogin)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
      if (login.status === httpStatus.OK) {
        expect(login.body.data).toEqual(
          expect.objectContaining({
            token: expect.any(String)
          })
        )
        expect(login.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.OK,
            message: expect.any(String)
          })
        )

        // === ME ===
        const me = await request(app)
          .get('/api/v1/auth/me')
          .set('Authorization', `Bearer ${login.body.data.token}`)
          .expect('Content-Type', /json/)
        if (me.status === httpStatus.OK) {
          expect(me.body.data).toEqual(
            expect.objectContaining({
              id: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
              phone: expect.any(String),
            })
          )
          expect(me.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.OK,
              message: expect.any(String)
            })
          )
        } else {
          expect(me.body.data).toBeNull()
          expect(me.body.header).toEqual(
            expect.objectContaining({
              status: httpStatus.UNAUTHORIZED,
              message: expect.any(String)
            })
          )
        }

        // === LOGOUT ===
        const res = await request(app)
          .patch('/api/v1/auth/logout')
          .expect('Content-Type', /json/)
        if (res.status === httpStatus.OK) {
          expect(res.body.data).toBeTruthy()
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

      } else {
        expect(res.body.data).toBeNull()
        expect(res.body.header).toEqual(
          expect.objectContaining({
            status: httpStatus.UNPROCESSABLE_ENTITY,
            message: expect.any(String)
          })
        )
      }

    } else {
      expect(register.body.data).toBeNull()
      expect(register.body.header).toEqual(
        expect.objectContaining({
          status: httpStatus.BAD_REQUEST,
          message: expect.any(String)
        })
      )
    }
  })
})