const express = require("express");
const http = require("http");
const socket_io = require("socket.io");
const path = require("path");
const cors = require("cors");
const Socket = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.server = http.createServer(this.app);
    this.io = socket_io(this.server, {
      /** configuracion **/
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
  }

  sockets_config() {
    new Socket(this.io);
  }

  execute() {
    // INICIOANDO MIDDLWARES
    this.middlewares();

    // CONFIGURACION DE SOCKETS
    this.sockets_config();

    // INICIANDO SERVER
    this.server.listen(this.port, () => {
      console.log(`server is already running on port: ${this.port}`);
    });
  }
}

module.exports = Server;
