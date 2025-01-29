import { TrackAction, TrackActionTypes } from "@/types/track"
import axios from "axios"
import { Dispatch } from "redux"


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            console.log("🔍 Fetching tracks...");
            const response = await axios.get('http://localhost:5000/tracks')
            console.log("✅ Tracks fetched:", response.data);
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Unpossible to pull tracks'
            })
        }
    }
}