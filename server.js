const http = require('http');

const server = http.createServer(function (req, res) {

    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');

    const name = 'Bhargavi';
    const date = new Date().toLocaleDateString();

    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello my name is ' + name + ' and the date is ' + date + '</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});