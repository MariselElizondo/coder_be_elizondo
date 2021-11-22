const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<iframe width="727" height="409" src="https://www.youtube.com/embed/InSydaLSSlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});

const connect = server.listen(8080, () => {
    let port = connect.address().port;
    console.log('Escuchando por puerto', port)
})

//IP de mi computadora
// http://192.168.0.11:3000/
// http://127.0.0.1:3000/