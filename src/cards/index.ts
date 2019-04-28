import ICard from "./ICard";
import monsters from "./monsters";

const cards: Array<ICard> = [
	...monsters,
];

const cardWithId: { [cardId: string]: ICard } = {};

for (const card of cards) {
	if (cardWithId[card.id]) throw new Error(`card's id duplicate: ${card.id}`);
	cardWithId[card.id] = card;
}

export default cardWithId;

export function getRandomCard() {
	return cards[Math.floor(Math.random() * cards.length)];
}
