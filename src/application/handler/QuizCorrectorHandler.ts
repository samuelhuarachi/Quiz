import QuizSubmitted from "../../domain/event/QuizSubmitted";
import { Handler } from "./Handler";
import { QuizRepository } from "../../domain/repository/QuizRepository";
import Mediator from "../../infra/mediator/Mediator";
import QuizCorrected from "../../domain/event/QuizCorrected.";

export default class QuizCorrectorHandler implements Handler {
    eventName = "QuizSubmitted";

    constructor(readonly quizRepository: QuizRepository, readonly mediator: Mediator) {}

    async handle(event: QuizSubmitted): Promise<void> {
        const quiz = await this.quizRepository.get(event.idQuiz);
        let correctAnswers = 0;

        for (const question of quiz.questions) {
            if (event.answers[question.id] === question.correctAnswer) {
                correctAnswers++;
            }
        }

        const grade = (correctAnswers / quiz.questions.length) * 100;
        const quizCorrected = new QuizCorrected(event.userName, event.email, grade);
        this.mediator.publish(quizCorrected);
    }
}
