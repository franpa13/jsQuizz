import { Button } from "@mui/material"
import { useQuestionsStore } from "../../store/questions"

export default function Footer() {
    const questions = useQuestionsStore(state => state.questions)
    const reset = useQuestionsStore(state => state.reset)
    let correct = 0
    let incorrect = 0
    let unanswered = 0
    questions.forEach((question) => {
        const { userSelectedAnswer, correctAnswer } = question
        if (userSelectedAnswer == null) {
            unanswered++
        } else if (userSelectedAnswer === correctAnswer) {
            correct++
        } else {
            incorrect++
        }
    })
    return (
        <footer style={{ marginTop: "16px" ,display:"flex", flexDirection:"column", justifyContent:"center" , alignItems:"center"}}>
            <strong>
                {`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder `}
            </strong>
            <Button variant="outlined" sx={{marginTop:"18px" ,width:"50%"}} onClick={() => reset()}>
              Resetear Juego
            </Button>

        </footer>
    )
}
