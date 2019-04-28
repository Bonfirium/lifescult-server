import Game from "lifescult-lib";
import { sendToUser, userIsConnected } from "./socket";

interface UserInfo {
	game: Game;
	player: number;
}

const userInfoById: { [userId: string]: UserInfo } = {};

let unallocatedUserId: string | null = null;

export function findGame(userId: string) {
	if (userInfoById[userId]) throw new Error('game already found');
	if (!unallocatedUserId || !userIsConnected(unallocatedUserId)) unallocatedUserId = userId;
	else {
		const game = new Game();
		userInfoById[unallocatedUserId] = { game, player: 0 };
		userInfoById[userId] = { game, player: 1 };
		for (let player = 0; player < 2; player++) {
			sendToUser(player === 0 ? unallocatedUserId : userId, 'game_found', {
				first_step: player === game.playerMove,
				starting_hand: game.hands[player],
			});
		}
	}
}
