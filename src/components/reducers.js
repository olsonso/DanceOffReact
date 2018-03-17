import { ACTIVE, isMove, compare } from "./Game";
import { assign, set, get } from "lodash/fp";

export function setGameState(state) {
    const player = get(state.p, state);
    const opponent = get(state.p === "p1" ? "p2" : "p1", state);

    return assign(state, {
        player: player,
        opponent: opponent,
        isFinished: isMove(player) && isMove(opponent),
        isWon: compare(player, opponent),
        isPlayed: isMove(player),
        isDraw: isMove(player) && isMove(opponent) && player === opponent,
    });
}

export default function reducers(state, action) {
    switch (action.type) {
        case INIT_PLAYER_1:
        return assign(state, { id: action.id, p: "p1", p1: ACTIVE, loading: true });
        case INIT_PLAYER_2:
        return assign(state, { id: action.id, p: "p2", p2: ACTIVE, loading: true });
        case SINGLE_PLAYER:
        return setGameState(assign(state, { isSinglePlayer: true, p2: ACTIVE }));
        case RESET:
        return setGameState(assign(state, { p1: ACTIVE, p2: ACTIVE }));
        case PLAYER_1:
        return setGameState(assign(state, { p1: action.move, loading: false }));
        case PLAYER_2:
        return setGameState(assign(state, { p2: action.move, loading: false }));
        case MOVE:
        return setGameState(set(state.p, action.move, state));
        default:
        return state;
    }
}
