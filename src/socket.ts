import * as _createSocket from "socket.io";
import { initEventsHandlers } from "./controllers";
import { Server } from "http";

const socketOfUser: { [userId: string]: SocketIO.Socket } = {};

let io: SocketIO.Server;

export function createSocketServer(server: Server) {
	io = _createSocket(server);

	io.on('connection', (socket) => {
		socketOfUser[socket.client.id] = socket;
		socket.on('disconnect', () => {
			delete socketOfUser[socket.client.id];
		});
		initEventsHandlers(socket);
	});
}

export function getSocketOfUser(userId: string) {
	const result = socketOfUser[userId];
	if (!result) throw new Error(`no user with id ${userId}`);
	return result;
}

export function sendToUser(userId: string, event: string, data?: any) {
	getSocketOfUser(userId).emit(event, data);
}

export function onceToUser(userId: string, event: string, data?: any) {
	getSocketOfUser(userId).once(event, data);
}

export function userIsConnected(userId: string): boolean {
	return !!socketOfUser[userId];
}
