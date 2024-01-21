import * as React from 'react';
import { Card, Stack, Typography } from "@mui/material";
const AboutPage = () => {
    return (<React.Fragment>
            <Typography variant={'h4'} sx={{ mb: 3, ml: 2 }}> Инструкция по использованию:</Typography>

            <Stack sx={{
            flexDirection: 'column',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <Card sx={{
            width: '1000px',
            minHeight: '2000px',
        }}>
                    <Typography variant={'h5'} sx={{ m: 1 }}>
                    </Typography>
                </Card>
            </Stack>
        </React.Fragment>);
};
export default AboutPage;
