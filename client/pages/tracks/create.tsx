import FileUpload from "@/component/FileUpload";
import StepWrapper from "@/component/StepWrapper";
import MainLayout from "@/layout/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import React, { act, useState } from "react";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
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
                            label={'name of track'}
                        />
                        <TextField
                            label={'name of artist'}
                        />
                        <TextField
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