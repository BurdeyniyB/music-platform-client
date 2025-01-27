import { ITrack } from '@/types/track';
import { Box, Grid } from '@mui/material';
import React from 'react';
import TrackItem from './TrackItem';

interface TrackListProops {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProops> = ({ tracks }) => {
    return (
        <Grid container direction="column" alignItems="center">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
            >
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}

export default TrackList;
