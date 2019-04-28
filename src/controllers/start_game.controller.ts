import { Socket } from "socket.io";
import { findGame } from "../game.service";

export default (socket: Socket) => {
	findGame(socket.client.id);
};
