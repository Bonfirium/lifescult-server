import Game from "./game";
import { sendToUser, userIsConnected } from "./socket";

interface UserInfo { game: Game; }

const users: { [userId: string]: UserInfo } = {};
const activeGames: Set<Game> = new Set();

let unallocatedUserId: string | null = null;

export function findGame(userId: string) {
	if (users[userId]) throw new Error('game already found');
	if (!unallocatedUserId || !userIsConnected(unallocatedUserId)) unallocatedUserId = userId;
	else {
		const game = new Game();
		activeGames.add(game);
		for (const { userId: _userId, first_step, starting_hand } of [
			{ userId: unallocatedUserId, first_step: true, starting_hand: game.hand1 },
			{ userId: userId, first_step: false, starting_hand: game.hand2 },
		]) {
			sendToUser(_userId, 'game_found', { first_step, starting_hand: starting_hand.map((card) => card.id) });
		}
	}
}
