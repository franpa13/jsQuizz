
import { Container, Typography, Stack } from '@mui/material'
import Jslogo from './components/jslogo.tsx/Jslogo'
import Start from './assets/Start'

import Game from './components/Game/Game'
import './App.css'
import { useQuestionsStore } from './store/questions'

function App() {

  const questions = useQuestionsStore(state => state.questions)
  console.log(questions);

  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
            <Jslogo></Jslogo>
            <Typography variant='h2' color="white" component="h1" >Javascript Quizz</Typography>

          </Stack>
          {questions.length === 0 && <Start></Start>}
          {questions.length > 0 && <Game />}


        </Container>
      </main>
    </>
  )
}

export default App
