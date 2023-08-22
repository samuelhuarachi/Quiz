import { DomainEvent } from "src/domain/event/DomainEvent";
import { Handler } from "./Handler";
import QuizCorrected from "../../domain/event/QuizCorrected.";
import { Mailer } from "../service/Mailer";

export default class QuizCommunicatorHandler implements Handler {
    eventName = "QuizCorrected";

    constructor(readonly mailer: Mailer) {}

    async handle(event: QuizCorrected): Promise<void> {
        this.mailer.send(event.email, `Olá ${event.userName}, sua nota do quiz é ${event.grade}`);
    }
}
