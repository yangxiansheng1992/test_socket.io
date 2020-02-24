const http=require('http');
const sk=require("socket.io");

const server=http.createServer((req,res)=>{

})
server.listen(1992);

let ws=sk.listen(server);

let aSock=[];

ws.on('connection',sock=>{
  aSock.push(sock)
  sock.on("msg",(str)=>{
    aSock.forEach(item=>{
      if(item!=sock){
        item.emit('msg',str)
      }
    })
  })
})