var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import { Card, Box, Typography, Button, Stack, Divider, IconButton, Paper, InputLabel } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from 'axios';
import { observer } from "mobx-react-lite";
import TableDataStore from "stores/local/TableDataStore/TableDataStore";
const AsyncPage = () => {
    const buttonsData = [
        "Switch1", "Switch2", "Switch3", "Switch4", "Switch5",
        "Switch6", "Switch7", "Switch8", "Switch9", "Switch10"
    ];
    const [buttonClicks, setButtonClicks] = useState([]);
    const [textFile, setTextFile] = useState(null);
    const [sofFile, setSofFile] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const validateForm = () => {
        const isValid = !!textFile && !!sofFile;
        setIsFormValid(isValid);
    };
    const handleScriptChange = (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        setSofFile(file || null);
        validateForm();
        console.log('Selected File:', file);
    };
    const handleFileChange = (event) => {
        var _a;
        const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        setTextFile(file || null);
        validateForm();
        console.log('Selected File:', file);
    };
    const handleButtonClick = (buttonName) => {
        const newButtonClicks = [...buttonClicks, { id: Date.now(), name: buttonName, counter: 0 }];
        setButtonClicks(newButtonClicks);
    };
    const handleIncrement = (id) => {
        const updatedButtonClicks = buttonClicks.map((button) => button.id === id ? Object.assign(Object.assign({}, button), { counter: button.counter + 5 }) : button);
        setButtonClicks(updatedButtonClicks);
    };
    const handleDecrement = (id) => {
        const updatedButtonClicks = buttonClicks.map((button) => button.id === id && button.counter > 0 ? Object.assign(Object.assign({}, button), { counter: button.counter - 5 }) : button);
        setButtonClicks(updatedButtonClicks);
    };
    const handleResetCounter = (id) => {
        const updatedButtonClicks = buttonClicks.map((button) => button.id === id ? Object.assign(Object.assign({}, button), { counter: 0 }) : button);
        setButtonClicks(updatedButtonClicks);
    };
    const handleDeleteRow = (id) => {
        const updatedButtonClicks = buttonClicks.filter((button) => button.id !== id);
        setButtonClicks(updatedButtonClicks);
    };
    const handleClearList = () => {
        setButtonClicks([]);
    };
    const handleGenerateTextFile = () => {
        const content = [];
        buttonClicks.forEach((button) => {
            content.push(`${button.name}`);
            if (button.counter > 0) {
                const delay = button.counter;
                const delayString = delay % 1 === 0 ? `del${delay}` : `del${delay}`;
                content.push(delayString);
            }
        });
        content.push('end');
        const blob = new Blob([content.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'script.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };
    const handleCombinedSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        if (isFormValid) {
            try {
                const backendUrl = '';
                const formData = new FormData();
                formData.append('textFile', textFile);
                formData.append('sofFile', sofFile);
                const response = yield axios.post(backendUrl, formData);
                if (response.status === 200) {
                    const { dataFiles, dataArray } = response.data;
                    TableDataStore.setTextFile(dataFiles.textFile);
                    TableDataStore.setSofFile(dataFiles.sofFile);
                    TableDataStore.setOtherTextFile(dataFiles.otherTextFile);
                    TableDataStore.setOtherSofFile(dataFiles.otherSofFile);
                    TableDataStore.setDataArray(dataArray);
                    handleClearList();
                    setTextFile(null);
                    setSofFile(null);
                }
                else {
                    console.error('Form submission failed');
                }
            }
            catch (error) {
                console.error('Error submitting form:', error);
            }
        }
        else {
            alert("Please upload both .txt and .sof files before submitting.");
        }
    });
    return (<React.Fragment>
            <Typography variant={'h4'} sx={{ mb: 2 }}>Сценарий для компиляции ПЛИС</Typography>
            <Box sx={{
            gap: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                <Paper sx={{
            width: '1000px',
            borderRadius: 4,
        }}>
                    <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
        }}>
                        <Card sx={{
            width: '200px',
            height: 'auto',
            borderRadius: '10px',
            backgroundColor: 'primary',
            color: 'primary',
            mt: 3, mb: 2, ml: 14,
        }}>
                            <Typography variant={'h6'} sx={{ ml: 4, mb: 1, mt: 2 }}>
                                Кнопки:
                            </Typography>
                            <Divider />
                            <Stack spacing={1} sx={{
            mb: 2, mt: 2, ml: 2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                                {buttonsData.map((buttonName, index) => (<React.Fragment key={index}>
                                        <Button variant={'text'} size={'small'} sx={{
                width: 'calc(20vh - 50px)',
                border: 0.4,
                color: 'primary',
                borderRadius: '5px',
                textTransform: 'none',
            }} onClick={() => handleButtonClick(buttonName)}>
                                            {buttonName}
                                        </Button>
                                        <Divider />
                                    </React.Fragment>))}
                            </Stack>
                        </Card>
                        <Card sx={{
            width: '440px',
            height: 'auto',
            borderRadius: '10px',
            backgroundColor: 'primary',
            color: 'primary',
            mt: 3, mb: 2, ml: 2,
        }}>
                            <Stack>
                                <Typography variant={'h6'} sx={{ ml: 4, mb: 1, mt: 2 }}>Список нажатий и задержек:</Typography>
                                <Divider />
                                <Button variant="contained" color="primary" onClick={handleGenerateTextFile} sx={{ textTransform: 'none',
            mb: 2, mt: 2,
        }}>
                                    Экспорт в .txt
                                </Button>
                                {buttonClicks.map((button) => (<React.Fragment key={button.id}>
                                        <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                ml: 1,
                mr: 1,
            }}>
                                            <Typography variant={'body2'}>{`${button.name}: Задержка: ${button.counter} секунд`}</Typography>
                                            <Box>
                                                <Button variant={'outlined'} size={'small'} sx={{
                minWidth: '30px',
                m: 1,
            }} onClick={() => handleIncrement(button.id)}>
                                                    +
                                                </Button>
                                                <Button variant={'outlined'} size={'small'} sx={{
                minWidth: '30px',
                mx: 1,
            }} onClick={() => handleDecrement(button.id)}>
                                                    -
                                                </Button>
                                                <Button variant={'outlined'} size={'small'} sx={{
                minWidth: '40px',
                mx: 1,
                textTransform: 'none'
            }} onClick={() => handleResetCounter(button.id)}>
                                                    Reset
                                                </Button>
                                                <IconButton size="small" color="error" onClick={() => handleDeleteRow(button.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </React.Fragment>))}
                                <Button variant={'contained'} color={'error'} size={'small'} sx={{
            textTransform: 'none',
            mt: 2,
        }} onClick={handleClearList}>
                                    Очистить список
                                </Button>

                            </Stack>
                        </Card>
                    </Box>
                    <Box sx={{
            display: 'flex',
            flexDirection: 'space-evenly',
            ml: 10
        }}>
                        <Card sx={{
            width: '300px',
            height: 'auto',
            borderRadius: '10px',
            backgroundColor: 'primary',
            color: 'primary',
            mt: 3,
            mb: 2,
            ml: 14, p: 2,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                            <InputLabel htmlFor="script-upload">
                                <input accept=".txt" id="script-upload" type="file" style={{ display: 'none' }} onChange={handleFileChange}/>
                                <Button sx={{ textTransform: 'none' }} variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
                                    Загрузить .txt
                                </Button>
                            </InputLabel>
                            <Stack>
                                <Typography variant={'h6'} sx={{}}>Файл .txt:</Typography>
                                {textFile && <Typography variant={'body2'}>{textFile.name}</Typography>}
                            </Stack>
                        </Card>
                        <Card sx={{
            width: '300px',
            height: 'auto',
            borderRadius: '10px',
            backgroundColor: 'primary',
            color: 'primary',
            mt: 3,
            mb: 2,
            ml: 2, p: 2,
            display: 'inline-flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                            <InputLabel htmlFor="sof-upload">
                                <input id="sof-upload" type="file" style={{ display: 'none' }} onChange={handleScriptChange}/>
                                <Button sx={{ textTransform: 'none' }} variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
                                    Загрузить .sof
                                </Button>
                            </InputLabel>

                            <Stack>
                                <Typography variant={'h6'}>Файл .sof:</Typography>
                                {sofFile && <Typography variant={'body2'}>{sofFile.name}</Typography>}
                            </Stack>
                        </Card>
                    </Box>

                    <Stack>
                        <Button sx={{
            width: '100%',
            height: '70px',
            textTransform: 'none',
        }} onClick={handleCombinedSubmit}>
                            Отправить на компиляцию
                        </Button>
                    </Stack>
                </Paper>

            </Box>
        </React.Fragment>);
};
export default observer(AsyncPage);
