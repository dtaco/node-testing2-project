const request = require('supertest')
const db = require('../data/db-config')
const server = ('./server.js')

const joke1 = {joke: "Porque el maiz se fue al hospital?", punchline:"Esta malito"}
const joke2 = {joke:'Why was seven afraid of eight?', punchline:'Because seven eight nine!'}

it("correct env variable", () => {
    expect(process.env.NODE_ENV).toBe('testing')
})