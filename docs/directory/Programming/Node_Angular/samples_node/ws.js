const ws = require('ws')

const wss = new ws.Server({
    port: 8080
})


wss.on('connection', (ws) => {
    console.log('client connected', ws)  
    ws.send('Hello from the server !')
    
    ws.on('message', (message) => {
        console.log('message :', message)
        ws.send('reçu !')
    })
})

