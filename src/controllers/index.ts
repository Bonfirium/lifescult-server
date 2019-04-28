import { Socket } from "socket.io";
import find_game from "./start_game.controller";

export const handlers: { [key: string]: (socket: Socket, msg?: any) => void; } = {
	find_game,
};

export function initEventsHandlers(socket: Socket) {
	for (const event in handlers) {
		if (!Object.prototype.hasOwnProperty.call(handlers, event)) continue;
		socket.on(event, (msg) => handlers[event](socket));
	}
}
