const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const io = new Server(app, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

server.listen(PORT, () => console.log("Server started at PORT: ", PORT));
