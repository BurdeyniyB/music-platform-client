import MainLayout from "@/layout/MainLayout";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../../style/Main.module.scss";
import { useRouter } from "next/router";
import TrackList from "@/component/TrackList";
import { useTypeSelector } from "@/hooks/useTypedSelector";
import { AppDispatch, wrapper } from "@/store";
import { fetchTracks, searchTracks } from "@/store/actions-creators/track";
import { useDispatch } from "react-redux";

const Index = () => {
    const router = useRouter();
    const { tracks, error } = useTypeSelector(state => state.track)
    const [query, setQuery] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>();
    const [timer, setTimer] = useState<number | null>(null);

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (timer) {
            clearTimeout(timer);  // Використовуємо стандартну функцію clearTimeout
        }

        const newTimer = window.setTimeout(async () => {
            await dispatch(searchTracks(value));
        }, 500);

        setTimer(newTimer);
    };


    if (error) {
        return (
            <MainLayout>
                <h1>{error}</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout title="list of tracks">
            <Grid container justifyContent="center">
                <Grid item xs={12} md={8} lg={6}>
                    <Card className={styles.card} style={{ borderBlock: "#1e1e2f" }}>
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
                <TextField
                    fullWidth
                    value={query}
                    onChange={search}
                />
                <TrackList tracks={tracks} />
            </Grid>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => { // Додано context, щоб Next.js не оптимізував цей запит
        console.log("✅getServerSideProps");
        const dispatch = store.dispatch as AppDispatch;
        await dispatch(fetchTracks());
        console.log("✅dispatch(fetchTracks())", JSON.stringify(store.getState().track, null, 2));
        return { props: {} };
    }
);
