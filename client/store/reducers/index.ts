import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { trackReducer } from "./trackReducer";
import { playerReducer } from "./playerReducer";
import { TrackAction, TrackActionTypes } from "@/types/track";
import { PlayerAction } from "@/types/player";

// Комбінуємо ред'юсери
const combinedReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
});

const reducer = (
    state: RootState | undefined,
    action: PlayerAction | TrackAction | { type: typeof HYDRATE; payload: RootState }
): RootState => {
    if (action.type === HYDRATE) {
        return {
            ...state, 
            ...action.payload, 
            track: {
                ...state?.track, // Гарантуємо, що старий track не перезаписується пустими значеннями
                ...action.payload.track
            },
            player: {
                ...state?.player,
                ...action.payload.player
            }
        };
    }
    
    return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combinedReducer>;
export default reducer;
