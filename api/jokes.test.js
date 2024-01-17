const request = require('supertest')
const db = require('../data/db-config')
const server = ('./server.js')

it("correct env variable", () => {
    expect(process.env.NODE_ENV).toBe('testing')
})