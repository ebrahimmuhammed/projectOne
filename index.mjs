import http from 'http';
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('Assalamu Alaikkum  Va Rahmathullahi vabarakathuhu\n');

});
server.listen(port,()=>{
    console.log(`server run at https://localhost:${port}/`);
});
