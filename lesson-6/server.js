const http = require('http');

const server = http.createServer((req, res) => {
    // Каждый ответ отдаем через 100 ms
    setTimeout(() => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Hellow word\n');
    }, 100);
})

server.listen(8080, () => {
    console.log('Server running');
})