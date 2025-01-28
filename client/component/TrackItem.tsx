import { ITrack } from "@/types/track";
import { Card, Grid, IconButton } from "@mui/material";
import React from "react";
import styles from '../style/TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useAction } from "@/hooks/useActions";

interface TrackItemProp {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProp> = ({ track, active = true }) => {
    const router = useRouter()
    const {playTrack, pauseTrack, setActiveTrack} = useAction();

    const play = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setActiveTrack(track);
        playTrack();
    }    

    return (
        <Card className={styles.track} onClick={() => router.push('tracks/' + track._id)}>
            <IconButton onClick={play}>
                {active
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <img width={70} height={70} src={track.picture} />
            <Grid container direction="column" style={{ width: 200, margin: '0 20px' }}>
                <div>{track.name}</div>
                <div style={{ fontSize: 12, color: 'gray' }}>{track.artist}</div>
                {active && <div className={styles.time}>02:42 / 03:22</div>}
            </Grid>
            <div className={styles.rightContainer}>
                <IconButton>
                    <Delete />
                </IconButton>
            </div>
        </Card>
    )
}

export default TrackItem;
