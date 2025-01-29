import FileUpload from "@/component/FileUpload";
import StepWrapper from "@/component/StepWrapper";
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layout/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState<File | null>(null);
    const [audio, setAudio] = useState<File | null>(null);    
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const next = async() => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            console.log("send data")
            const formData = new FormData();
            formData.append('name', name.value);
            formData.append('text', text.value);
            formData.append('artist', artist.value);

            if (picture && audio) {
                formData.append('picture', picture);
                formData.append('audio', audio);
            }
            else{
                return
            }

            await axios.post('http://localhost:5000/tracks', formData, {
                withCredentials: true
            })
            .catch(e => console.log(e));
            router.push('/tracks')
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"}>
                        <TextField
                            {...name}
                            label={'name of track'}
                        />
                        <TextField
                            {...artist}
                            label={'name of artist'}
                        />
                        <TextField
                            {...text}
                            label={'words for track'}
                            multiline
                            rows={3}
                        />
                    </Grid>}
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Upload image</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Upload audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    )
}

export default Create;