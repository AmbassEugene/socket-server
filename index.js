const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

const io = new Server(httpServer, {
  /* options */
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("socket connection valid: ", {
    connected: socket.connected,
    id: socket.id,
  });

  socket.on("send_message", (data) => {
    console.log("message event received: ", data);
    socket.emit("send_message", data);
  });
});

httpServer.listen(PORT, () => console.log("listening on port:", PORT));
