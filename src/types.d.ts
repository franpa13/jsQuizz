export interface Question {
    id:Number,
    question :string,
    code:string, 
    answers : string[],
    correctAnswer : number,
    userSelectedAnswer?: number,
    isCorrectUserAnswer ?: boolean 
}