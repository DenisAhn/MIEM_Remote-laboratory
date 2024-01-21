import * as React from 'react';
import DE10 from "./DE10lite/De10";
import { Box, Card, Typography, Button, IconButton, Stack } from "@mui/material";
import { PlayArrow, Stop, Replay } from '@mui/icons-material';
import { Switch } from "components/ui/Switch";
import { MOCK } from "./MOCK";
import {useNavigate} from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type Intervals = NodeJS.Timeout | null
const DemoPage = () => {
    const navigate = useNavigate()
    const totalSeconds = MOCK.length;
    const [currentSecond, setCurrentSecond] = React.useState<number>(0);
    const [intervalId, setIntervalId] = React.useState<Intervals>(null);

    const handleGoBack = () => {
        navigate("/main/compiles");
    }
    const startEffect  = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }

        const newIntervalId = setInterval(() => {
            setCurrentSecond((prevSecond) => (prevSecond + 1) % totalSeconds);
        }, 1000);

        setIntervalId(newIntervalId);

        setTimeout(() => {
            clearInterval(newIntervalId);
        }, totalSeconds * 1000);
    };

    const stopEffect = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const restartEffect = () => {
        setCurrentSecond(0);
        startEffect();
    };

    return (
        <React.Fragment>
            <Typography variant={'h4'} sx={{ mb: 2 }}>Демо компиляция</Typography>
            <Button
                startIcon={<ArrowBackIosIcon />}
                sx={{
                    textTransform: 'none',
                    color: 'black'
                }}
                onClick={handleGoBack}
            >Назад</Button>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}
        >
            <Card
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    width: '800px',
                    borderRadius: '10px'
                }}
            >
                <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    mb: 4,
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    border: 0.5,
                    borderRadius: 2,
                }}>
                    <Button startIcon={<PlayArrow />} onClick={startEffect}></Button>
                    <Button startIcon={<Stop />} onClick={stopEffect}></Button>
                    <IconButton onClick={restartEffect} size="small">
                        <Replay />
                    </IconButton>
                </Stack>
                <Typography variant='h6' sx={{ml: 4, mb: 2}}>Время:  {currentSecond} </Typography>
                <Box
                sx={{
                    alignItems: 'center',
                    ml: 17,
                    mb: 4,
                }}>
                    <DE10 sx={{
                        alignItems: 'center',
                        position: 'relative',
                    }} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        position: 'absolute',
                        marginTop: 49,
                        marginLeft: 50,
                    }}
                >
                    {MOCK[currentSecond].map((isActive, index) => (
                        <Switch key={index} isActive={isActive} sx={{ ml: 0.01 }} />
                    ))}
                </Box>
            </Card>
          </Box>
        </React.Fragment>
    );
};

export default DemoPage;
