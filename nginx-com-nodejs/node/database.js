const MySql = require('mysql');

const connection = MySql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'docker',
    database: 'nodeapp'
})

module.exports = {
    connect: () => {
        return new Promise((resolve, reject) => {
            connection.connect((error) => {
                if (error) {
                    return reject(error)
                } else {
                    resolve()
                }
            })
        })
    },
    query: (query) => {
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    return reject(error)
                } else {
                    resolve(results)
                }
            })
        })
    },
    close: () => {
        return new Promise((resolve, reject) => {
            connection.end((error) => {
                if (error) {
                    return reject(error)
                } else {
                    resolve()
                }
            })
        })
    }
}