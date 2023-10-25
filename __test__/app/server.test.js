const request = require('supertest')
const app = require('../../app/index')

describe('server tests', () => {
  it('tests if the server is up and running', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})
