import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layout/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const TrackPage = ({ serverTrack }: { serverTrack: ITrack }) => {
    const [track, setTrack] = useState(serverTrack);
    const router = useRouter();
    const username = useInput('');
    const text = useInput('');

    const addComment = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5000/tracks/comment',
                {
                    trackId: track._id,
                    username: username.value,
                    text: text.value
                },
                {
                    withCredentials: true
                }
            );
            console.log(response.data);
            setTrack(prevTrack => ({
                ...prevTrack,
                comments: [...prevTrack.comments, response.data]
            }));
        } catch (e) {
            console.error("Error adding comment:", e);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            addComment();
        }
    };

    return (
        <MainLayout 
        title={"music platform - " + track.name + " - " + track.artist}
        keywords={'Music, artist, ' + track.artist}
        >
            <Button
                variant='outlined'
                style={{ fontSize: 32, marginRight: 'auto' }}
                onClick={() => router.push('/tracks')}
            >
                To list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200} />
                <div style={{ marginLeft: '30px' }}>
                    <h1>Name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listenings - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Words of track</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField label="Your name" fullWidth {...username} />
                <TextField
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                    {...text}
                    onKeyDown={handleKeyPress}
                />
                <Button onClick={addComment}>Send</Button>
            </Grid>
            <div style={{ marginBottom: 50 }}>
                {track.comments.length > 0 ? (
                    track.comments.map(comment => (
                        <div key={comment._id}>
                            <strong>{comment.username}</strong>
                            <p>{comment.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params?.id);
    return { props: { serverTrack: response.data } };
};
