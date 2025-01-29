import { TrackAction, TrackActionTypes, TrackState } from "@/types/track"

const initialState: TrackState = {
    tracks: [],
    error: ''
}

export const trackReducer = (state = initialState, action: TrackAction): TrackState => {
    console.log("⚡ Reducer action:", action.type);
    
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS_ERROR:
            console.log("❌ Error occurred:", action.payload);
            return { ...state, error: action.payload }

        case TrackActionTypes.FETCH_TRACKS:
            console.log("✅ Tracks fetched successfully: " + action.payload);
            return { ...state, error: '', tracks: action.payload }

        default:
            return state;
    }
}
