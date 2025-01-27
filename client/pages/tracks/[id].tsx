import MainLayout from '@/layout/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const TrackPage = () => {
    const router = useRouter()
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
    return (
        <MainLayout>
            <Button
                variant='outlined'
                style={{fontSize: 32, marginRight: 'auto'}}
                onClick={() => router.push('/tracks')}
            >
                To list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: '30px'}}>
                    <h1>Name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listenings - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Words of track</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField label="Your name" fullWidth/>
                <TextField 
                label="Comment"
                fullWidth
                multiline
                rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>{comment.username}</div>
                        <div>{comment.text}</div>
                    </div>
                    )}
            </div>
        </MainLayout>
    )
}

export default TrackPage