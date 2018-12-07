const fs = require('fs')

fs.writeFile('test.txt', 'Test Data', (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log('file written')
    }
})
