import * as Koa from "koa";
import * as http from "http";
import { createSocketServer } from "./socket";

const app = new Koa();
const server = http.createServer(app.callback());

createSocketServer(server);

server.listen(6543, "127.0.0.1", () => {
	console.log('SERVER STARTED');
});
