const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('The webserver is working \o/')
})

const server = app.listen(8000, () => {
    const port = server.address().port
    console.log("HTTP Server listening on localhost:", port)
});
