import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { HYDRATE } from "next-redux-wrapper";
import { PlayerAction, PlayerActionTypes } from "@/types/player";

export const rootReducer = combineReducers({
    player: playerReducer,
});

const reducer = (
    state: RootState | undefined,
    action: PlayerAction | { type: typeof HYDRATE; payload: RootState }
): RootState => {
    if (action.type === HYDRATE) {
        const nextState: RootState = {
            ...state, 
            ...action.payload, 
        };
        if (state?.player) nextState.player = state.player;
        return nextState;
    } else {
        return rootReducer(state, action as PlayerAction);
    }
};

export type RootState = ReturnType<typeof rootReducer>;
export default reducer;
