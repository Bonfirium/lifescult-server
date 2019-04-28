import { IMonster } from "./ICard";

const monsters: Array<IMonster> = [{
	id: 'monster/eclipse-bird',
	cost: 2,
	power: 1,
	max_hp: 2,
	regen: 1,
	uncontrollability: 3,
	wildness: 3,
}, {
	id: 'monster/yith',
	cost: 1,
	power: 2,
	max_hp: 5,
	regen: 2,
	uncontrollability: 1,
	wildness: null,
	pre_turn: (game, token) => {
		if (token.wildness !== null) return;
		// sendToUser()
		// const abilityIsUsed = await 
	},
}];

export default monsters;
