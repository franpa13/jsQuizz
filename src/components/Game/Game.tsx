import React from 'react'
import { IconButton, Stack, Box, Card, Typography, List, ListItem, ListItemText, ListItemButton } from '@mui/material'
import { useQuestionsStore } from '../../store/questions'
import SintaxHighlighter from "react-syntax-highlighter"
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Footer from '../Footer.tsx/Footer'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
const getBackgroundColor = (info: QuestionType, i: number) => {
    const { userSelectedAnswer, correctAnswer } = info
    console.log(info, "saddasdaw");

    if (userSelectedAnswer == null) {
        return "transparent"
    }
    if (i !== correctAnswer && i !== userSelectedAnswer) return "transparent"


    if (i === correctAnswer) return "green"


    if (i === userSelectedAnswer) return "red"


    return "transparent"
}
const Question = ({ info }: { info: QuestionType }) => {
    // console.log(info.answers, "esto es info");
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)


    const handleClick = (answerIndex: number) => () => {
        selectAnswer(info.id, answerIndex)
    }

    return (
        <Card variant='outlined' sx={{ bgcolor: "#222", textAlign: "left", marginTop: 4 }}>
            <Typography variant='h5'>
                {info.question}
            </Typography>
            <SintaxHighlighter language='javascript' style={gradientDark}>
                {info.code}
            </SintaxHighlighter>
            <List sx={{ bgcolor: "#333", fontWeight: "bold" }} disablePadding>
                {info.answers.length > 0 && info.answers.map((answer: string, i: number) => {
                    return (
                        <ListItem
                            key={i}
                            divider
                            disablePadding>
                            <ListItemButton
                                disabled={info.userSelectedAnswer != null}
                                sx={{
                                    backgroundColor: getBackgroundColor(info, i)
                                }}
                                onClick={handleClick(i)}>
                                <ListItemText primary={answer} />
                            </ListItemButton>
                        </ListItem>
                    )

                })}



            </List>
        </Card>
    )
}
export default function Game() {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviewQuestion = useQuestionsStore(state => state.goPreviousQuestion)
    const questionInfo = questions[currentQuestion]



    return (
        <>
            <Stack direction="row" gap={2} alingItems="center" justifyContent="center">

                <IconButton onClick={goPreviewQuestion} disabled={currentQuestion == 0}>
                    <ArrowBackIosNew />
                </IconButton>
                <Box  display="flex" flexDirection="row" alignItems="center" justifyContent="start">
                    {currentQuestion + 1} / {questions.length}

                </Box>
                <IconButton onClick={goNextQuestion} disabled={currentQuestion > questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} />
             <Footer></Footer>

        </>
    )
}
