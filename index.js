const http = require("http");
const fs = require("fs");
const PORT = 3000;
const users =[];

const requestListener = (req, res) => {
  const {method, url} = req;
  if(method === 'GET'){
    if(url === '/'){
      fs.readFile('./views/index.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
      })
      return
    }
    if(url === '/about'){
      fs.readFile('./views/about.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
      })
      return
    }
    if(url === '/contacts'){
      fs.readFile('./views/contacts.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
    })
    return
    }
  }
  if(method==='POST'){
    if(url==='/create-user'){
      let jsonString = ''
      req.on('data', chunk=>{
      jsonString += chunk ;  
      })
    req.on("end", ()=>{
      const user =JSON.parse(jsonString)
      delete user.password;
      user.id = Date.now()
      users.push(user)
      res.end(user)
    })
      return;
    }
  }
  
    fs.readFile('./views/404.html', {encoding:'utf8'}, (err, data)=>{
      if(err){
        console.log(err)
      }
      res.end(data)
    })
  
};
const server = http.createServer(requestListener);
server.listen(PORT);






