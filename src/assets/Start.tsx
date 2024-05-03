import React from 'react'
import { Button } from '@mui/material'
import { useQuestionsStore } from '../store/questions'

export default function Start() {
    const fetchQuestions = useQuestionsStore(state => state.fetchQuestion)
    const handleClick = ()=> {
      fetchQuestions(10)
    }
  return (
    <Button onClick={handleClick} variant='contained'>Start</Button>
  )
}
