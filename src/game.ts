import ICard from "./cards/ICard";
import { getRandomCard } from "./cards";

const START_CARDS_COUNT = 4;

function getRandomStartHand() {
	return new Array(START_CARDS_COUNT).fill(0).map(() => getRandomCard());
}

export default class Game {
	public hand1: Array<ICard>;
	public hand2: Array<ICard>;

	constructor() {
		this.hand1 = getRandomStartHand();
		this.hand2 = getRandomStartHand();
	}
}
