import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import style from "@/style/Player.module.scss"
import React from "react";
import { ITrack } from "@/types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'artist 1',
        text: 'text 1',
        listens: 3,
        audio: "http://localhost:5000/audio/c4e7b34f-8b34-4dbc-b917-9c0dfa3b6708.mp3",
        picture: "http://localhost:5000/image/d422e27b-ae3b-45dc-a9d7-6c30839b6243.png",
        comments: []
    }
    const active = false;
    return (
        <div className={style.player}>
            <IconButton>
                {active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12 }}>{track.artist}</div>
                {active && <div>02:42 / 03:22</div>}
            </Grid>
            <TrackProgress left={0} right={100} onchange={() => ({})} />
            <VolumeUp style={{marginLeft: 'auto'}} />
            <TrackProgress left={0} right={100} onchange={() => ({})} />
        </div>
    );
};

export default Player;