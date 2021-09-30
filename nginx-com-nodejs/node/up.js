const Database = require('./database')

const SCRIPT = `
    CREATE TABLE IF NOT EXISTS people(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255)
    );
`

;(async () => {
    try {
        await Database.connect()
    
        await Database.query(SCRIPT)
        console.log('Table(People) created!')
        
        await Database.close()
    } catch (error) {
        console.error(error)
    }
})()