import { Server } from 'http';
const s = Server((req, res) => {
    if (req.url === '/login') {
        res.write('andreeva.anna2909');
    } else if (req.url.startsWith('/deg/')) {
        const [,,_number,_power] = req.url.split('/');
        res.write(Math.pow(Number(_number), Number(_power)).toString());
    }
    res.end();
});
s.listen(4321);
