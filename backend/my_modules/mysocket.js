const SocketIO = require('socket.io');

module.exports = (server) => {
    const io = SocketIO(server, { path: '/socket.io'});

    io.on('connection',(socket) => {
        const req = socket.request;
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속!', ip, socket.id, req.ip);
        socket.on('disconnect',()=> {
            console.log('클라이언트 접속 해제', ip, socket.id);
            clearInterval(socket.interval);
        });

        socket.on('error',(error)=> {
            console.error(error);
        })

        socket.on('reply',(data) => {//클라이언트의 답장
            console.log(data);
        })

        socket.interval = setInterval(()=> {
            socket.emit('news','Hello Socket.IO');
        },3000);//3초마다 클라이언트에게 통신
    })

    // 클라이언트는 socket.io를 받고 connect를 만들어줘야함
    //단방향 통신 서버센트 알아볼것
}