const request = require('supertest')
const app = require('../../app/index')

describe('test app at /', () => {
  it('should return 200', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
  })
})
