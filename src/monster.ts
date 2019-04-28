import { IMonster } from "./cards/ICard";

export default interface IMonsterToken extends IMonster {
	belongs_to_first_player: boolean;
}
