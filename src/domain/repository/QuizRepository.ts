import Quiz from "../entity/Quiz";

interface QuizRepository {
    get(idQuiz: number): Promise<Quiz>;
}

export { QuizRepository };
