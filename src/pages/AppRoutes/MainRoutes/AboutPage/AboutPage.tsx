import * as React from 'react';
import { Card, Stack, Typography, Box } from "@mui/material";
import AsyncPageImage from 'assets/AsyncPage.jpg';
import Form from 'assets/Form.png'
import CompilesPage from 'assets/CompilesPage.png'
import gif1 from 'assets/gif1.gif'
import gif2 from 'assets/gif2.gif'
const AboutPage: React.FC = () => {
    return (
        <React.Fragment>
            <Typography variant={'h4'} sx={{ mb: 3, ml: 2 }}>Инструкция по использованию:</Typography>
            <Stack
                sx={{
                    flexDirection: 'column',
                    gap: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Card
                    sx={{
                        maxWidth: '900px',
                        mx: 'auto',
                        overflow: 'hidden', // Скрываем текст, который может выходить за границы
                    }}
                >
                    <Box
                        sx={{
                            mx: 2,
                            display: 'flex',
                            width: '800px',
                            flexDirection: 'column',
                            ml: 3, mt: 2, mb: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Typography
                            sx={{
                                ml: 2, mt: 4,
                                justifyContent: 'left',
                                fontSize: 23,
                                fontWeight: 'bold',
                            }}
                            variant={'h5'}
                        >
                            1. Страница Загрузить код:
                        </Typography>
                        <Box sx={{ml: -12, fontSize: 22, mb: 2, mt: 2,
                            textAlign: 'left',
                        }}>

                            На данной странице можно задать компиляцию для ПЛИС DE10-Lite:
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                width: '80%',
                                maxHeight: { xs: 600, md: 1000 },
                                maxWidth: { xs: 800, md: 800 },
                                objectFit: 'cover',
                            }}
                            alt="Async Page."
                            src={AsyncPageImage}
                        />
                        <Box sx={{
                            wordWrap: 'break-word', textTransform: 'none', fontSize: 22,
                            textAlign: 'left', fontWeight: 'medium', ml: 0, mt: 2, mb: 2,
                        }}>
                            С помощью форм и генерации команд, доступных на левой панели "Кнопки", вы можете создать текстовый файл, который содержит последовательность нажатий на переключатели (Switch кнопки), эмулирующую реальное взаимодействие с платой.
                        </Box>

                        <Box
                            component="img"
                            sx={{
                                width: '90%',
                                maxHeight: { xs: 600, md: 1000 },
                                maxWidth: { xs: 800, md: 800 },
                                objectFit: 'cover',
                            }}
                            alt="Async Page."
                            src={gif1}
                        />
                        <Box sx={{

                            wordWrap: 'break-word', textTransform: 'none', fontSize: 22, textAlign: 'left', fontWeight: 'medium', m: 2,
                        }}>
                            Взаимодействие с левой панелью приводит к отображению нажатий в правой части в разделе "Список нажатий" и соответствующих задержек. Каждый элемент в списке нажатий и задержек можно легко удалить или добавить, просто нажав на соответствующую кнопку слева.
                            Дополнительно предусмотрен функционал для инкрементации или декрементации счетчика задержек. После того как все необходимые элементы добавлены в список, вы можете нажать кнопку "Экспорт в .txt", что мгновенно приведет к скачиванию файла в формате .txt, соответствующего вашему списку.
                        </Box>
                        <Box
                            component="img"
                            sx={{
                                width: '90%',
                                maxHeight: { xs: 600, md: 1000 },
                                maxWidth: { xs: 800, md: 800 },
                                objectFit: 'cover',
                            }}
                            alt="Async Page."
                            src={Form}
                        />
                        <Box
                            sx={{
                                wordWrap: 'break-word',
                                textTransform: 'none',
                                fontSize: 22,
                                textAlign: 'left',
                                fontWeight: 'medium',
                                m: 2,}}>
                            В нижней части страницы предоставлена форма для загрузки двух файлов (.sof и .txt). После успешной загрузки всех файлов, нажатие на кнопку "Отправить на компиляцию" приведет к очистке полей формы, а затем файлы будут отправлены на удаленный стенд лаборатории.
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            mx: 2,
                            display: 'flex',
                            width: '800px',
                            flexDirection: 'column',
                            ml: 3, mt: 2, mb: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                    <Typography
                        sx={{
                            ml: 2, mt: 4,
                            justifyContent: 'left',
                            fontSize: 23,
                            fontWeight: 'bold',
                        }}
                        variant={'h5'}
                    >
                        2. Страница Мои компиляции:
                    </Typography>
                        <Box sx={{ml: -12, fontSize: 22, mb: 2, mt: 2,
                            textAlign: 'left',
                        }}>

                            На данной странице можно посмотреть результаты своих компиляций:
                        </Box>
                    <Box
                        component="img"
                        sx={{
                            width: '90%',
                            maxHeight: { xs: 600, md: 1000 },
                            maxWidth: { xs: 800, md: 800 },
                            objectFit: 'cover',
                        }}
                        alt="Async Page."
                        src={CompilesPage}
                    />
                    <Box
                        sx={{
                            wordWrap: 'break-word',
                            textTransform: 'none',
                            fontSize: 22,
                            textAlign: 'left',
                            fontWeight: 'medium',
                            m: 2,}}>
                    </Box>
                        <Box sx={{
                            wordWrap: 'break-word', textTransform: 'none', fontSize: 22,
                            textAlign: 'left', fontWeight: 'medium', ml: 0, mt: 2, mb: 2,
                        }}>
                            В данной таблице предоставлена информация о каждой отдельной компиляции платы. Включены следующие данные: номер компиляции, дата, время, лог компиляции, видео, а также демонстрационная версия компиляции, которая эмулирует поведение платы после загрузки прошивки.
                            При активации видео и лога через щелчок мыши, автоматически загружаются соответствующие видео и логи для конкретной компиляции. По нажатию на "Демо" открывается новая страница, где представлена демонстрационная компиляция прошивки.
                        </Box>

                        <Box
                            component="img"
                            sx={{
                                width: '90%',
                                maxHeight: { xs: 600, md: 1000 },
                                maxWidth: { xs: 800, md: 800 },
                                objectFit: 'cover',
                            }}
                            alt="Async Page."
                            src={gif2}
                        />
                    </Box>
                </Card>
            </Stack>
        </React.Fragment>
    );
};

export default AboutPage;
