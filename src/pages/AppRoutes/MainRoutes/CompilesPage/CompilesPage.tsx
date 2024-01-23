import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Link, Stack, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


function createData(
    number: number,
    date: string,
    time: string,
    compile: string,
    video: string,
    details: string
) {
    return { number, date, time, compile, video, details };
}




const rows = [
    createData(1,'10.01.2024', '19:20', 'log.txt', 'video.mp4', 'Демо '),
    createData(2, '11.01.2024', '20:30', 'log2.txt', 'video2.mp4', 'Демо'),
    createData(3, '12.01.2024', '21:40', 'log3.txt', 'video3.mp4', 'Демо'),
    createData(4, '17.01.2024', '20:30', 'log2.txt', 'video2.mp4', 'Демо'),
    createData(5, '18.01.2024', '21:40', 'log3.txt', 'video3.mp4', 'Демо'),
    createData(6,'19.01.2024', '19:20', 'log.txt', 'video.mp4', 'Демо '),
    createData(7, '21.01.2024', '20:30', 'log2.txt', 'video2.mp4', 'Демо'),


];

export default function AccessibleTable() {

    const navigate = useNavigate()

    const handleGoToDemo = () => {
        navigate('/main/demo')
    }
    return (
        <React.Fragment>
            <Typography variant={'h4'}>Мои компиляции</Typography>
            <Stack
                sx={{
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'Column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TableContainer component={Paper} sx={{ mt: 4, ml: 2 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={'left'}>Номер</TableCell>
                                <TableCell align='center'>Дата компиляции</TableCell>
                                <TableCell align="center">Время</TableCell>
                                <TableCell align="center">Лог компиляции</TableCell>
                                <TableCell align="center">Видео</TableCell>
                                <TableCell align="center">Демо Компиляции</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.time}>
                                    <TableCell component="th" scope="row">{row.number}</TableCell>
                                    <TableCell align='center'>{row.date}</TableCell>
                                    <TableCell align="center">{row.time}</TableCell>
                                    <TableCell align="center">
                                        <Link
                                            href={`URL_TO_LOG_FILE/${row.compile}`}
                                            download={row.compile}>
                                            Лог комиляции
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Link
                                            href={`URL_TO_VIDEO_FILE/${row.video}`}
                                            download={row.video}
                                        >
                                            Видео
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button sx={{textTransform: 'none'}}
                                        onClick={handleGoToDemo}>
                                            {row.details}
                                        </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </React.Fragment>
    );
}
