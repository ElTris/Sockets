class Socket {
  constructor(io) {
    this.io = io;
    this.socket_events();
  }

  socket_events() {
    this.io.on("connection", (socket) => {
      socket.on("sender", (data) => {
        console.log(data.text);
        this.io.emit("server_message", data);
      });
    });
  }
}

module.exports = Socket;
