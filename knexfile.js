const sharedConfig = {
    client: 'sqlite3',
    migrations: { directory: './data/migrations' },
    seeds:{ directory: './data/seeds'},
    useNullAsDefault: true,
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)}
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: {
            filename: './data/jokes.db3'
        },
    },
    testing : {
        ...sharedConfig,
        connection: {
            filename: './data/jokes.test.db3',
        }
    }
};