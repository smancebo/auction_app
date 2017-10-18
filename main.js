const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const api = require('./server/api');
const auctionStack = require('./server/bussiness/AuctionStack');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));


let players = [];

function replacer(key, value) {
  if(key.startsWith('_')) return undefined
  else return value;
}


function removePlayer(username) {
  players = players.filter((player) => {
    return player.username !== username;
  });
}



app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
const port = 8090;

auctionStack.__fill().then(() => {

  app.listen(port);
  server.listen(8091);
  console.log(`server running on port ${port}`);

  var nsp = io.of('/auction');
  //
  nsp.on('connection', (socket) => {
    let { username } = socket.handshake.query;
    let { id } = socket;

    removePlayer(username);
    players.push({
      username,
      id
    });
    socket.join('current-auction');

    auctionStack.on('started', () => {
      debugger
      socket.emit('current-auction', JSON.stringify(auctionStack.current, replacer));
    });
    socket.emit('current-auction', JSON.stringify(auctionStack.current, replacer));
    //
    auctionStack.on('tick', (tick) => {
      socket.to('current-auction').emit('auction-tick', tick);
    })

    socket.on('disconnect', (reason) => {
      removePlayer(username);
    })
  });
  //auctionStack.current.start();
  auctionStack.on('pushed', async (args) => {
    console.log(auctionStack.current);
    if(!auctionStack.current.started) {
      auctionStack.next()
    }
  });
  auctionStack.on('ended', async() => {
    await auctionStack.next();

  })
});
