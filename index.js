const  http = require ('http');

const PORT =3000;

const requestListener =(req, res)=>{
console.log("req=", req)
console.log("res=", res)
res.end("Hi! from node!")
}
const server = http.createServer(requestListener);
server.listen(PORT)


//console.log(server)