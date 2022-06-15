import { Server } from 'http';
var x1 = 0;
var x2 = 0;
const s = Server((req, res) => {
    if (req.url === '/login') {
        res.write('andreeva.anna2909');
    } else if (req.url === `/deg/${x1}/${x2}`) {
       res.write(x1 ** x2);
    }
    res.end();
});
s.listen();