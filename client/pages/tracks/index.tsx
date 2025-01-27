import MainLayout from "@/layout/MainLayout";
import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../../style/Main.module.scss";
import { useRouter } from "next/router";
import { ITrack } from "@/types/track";
import TrackList from "@/component/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Track 1',
            artist: 'artist 1',
            text: 'text 1',
            listens: 3,
            audio: "http://localhost:5000/audio/c4e7b34f-8b34-4dbc-b917-9c0dfa3b6708.mp3",
            picture: "http://localhost:5000/image/d422e27b-ae3b-45dc-a9d7-6c30839b6243.png",
            comments: [] 
        },
        {
            _id: '2',
            name: 'Track 2',
            artist: 'artist 2',
            text: 'text 2',
            listens: 3,
            audio: "http://localhost:5000/audio/c4e7b34f-8b34-4dbc-b917-9c0dfa3b6708.mp3",
            picture: "http://localhost:5000/image/d422e27b-ae3b-45dc-a9d7-6c30839b6243.png",
            comments: [] 
        },
        {
            _id: '3',
            name: 'Track 3',
            artist: 'artist 3',
            text: 'text 3',
            listens: 3,
            audio: "http://localhost:5000/audio/c4e7b34f-8b34-4dbc-b917-9c0dfa3b6708.mp3",
            picture: "http://localhost:5000/image/d422e27b-ae3b-45dc-a9d7-6c30839b6243.png",
            comments: [] 
        }
    ];
    
    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={8} lg={6}>
                    <Card className={styles.card} style={{borderBlock: "#1e1e2f" }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Typography variant="h4" className={styles.heading}>
                                List of Tracks
                            </Typography>
                            <Button onClick={() => router.push("/tracks/create")} variant="contained" color="primary">
                                Upload
                            </Button>
                        </Grid>
                    </Card>
                </Grid>
                <TrackList tracks={tracks}/>
            </Grid>
        </MainLayout>
    );
};

export default Index;
