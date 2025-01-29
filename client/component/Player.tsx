import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import style from "@/style/Player.module.scss"
import React, { useEffect } from "react";
import { ITrack } from "@/types/track";
import TrackProgress from "./TrackProgress";
import { useTypeSelector } from "@/hooks/useTypedSelector";
import { useAction } from "@/hooks/useActions";

let audio: HTMLAudioElement | undefined;
const Player = () => {
    const { pause, volume, active, duration, currentTime } = useTypeSelector(state => state.player);
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useAction();

    useEffect(() => {
        if (!audio) {
            audio = new Audio;
        } else {
            setAudio();
            play();
        }
    }, [active])

    const setAudio = () => {
        if(active && audio){
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => {
                if (audio)
                    setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                if (audio)
                    setCurrentTime(Math.ceil(audio.currentTime))
            }
            console.log(pause);
        }
    }

    const play = () => {
        if (pause) {
            playTrack();
            if (audio)
                audio.pause();

        } else {
            pauseTrack();
            if (audio)
                audio.play();
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (audio)
            audio.volume = value / 100;
        setVolume(value)
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (audio)
            audio.currentTime = value;
        setCurrentTime(value)
    }

    return (
        <div className={style.player}>
            <IconButton onClick={play}>
                {!pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{active?.name}</div>
                <div style={{ fontSize: 12 }}>{active?.artist}</div>
            </Grid>
            <TrackProgress left={currentTime} right={duration} onchange={changeCurrentTime} isTime={true}/>
            <VolumeUp style={{ marginLeft: 'auto' }} />
            <TrackProgress left={volume} right={100} onchange={changeVolume} isTime={false}/>
        </div>
    );
};

export default Player;