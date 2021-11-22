const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Working page')
});

const connect = server.listen(8081, () => {
    let port = connect.address().port;
    console.log('Escuchando por puerto', port)
})

//IP de mi computadora
// http://192.168.0.11:3000/
// http://127.0.0.1:3000/