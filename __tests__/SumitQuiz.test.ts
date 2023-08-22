import SubmitQuiz from "../src/application/usercase/SubmitQuiz";
import QuizCorretorHandler from "../src/application/handler/QuizCorrectorHandler";
import QuizCommunicatorHandler from "../src/application/handler/QuizCommunicatorHandler";
import Mediator from "../src/infra/mediator/Mediator";
import QuizRepositoryMemory from "../src/infra/repository/QuizRepositoryMemory";
import MailerMemory from "../src/infra/service/MailerMemory";


// test("Um usuário deve submter um quiz respondido, e a nota deve ser calculada", async function() {
//     const quizRepository = new QuizRepositoryMemory();
//     const submitQuiz = new SubmitQuiz(quizRepository);

//     const input = {
//         name: "John Doe",
//         email: "john.doe@mail.com",
//         idQuiz: 1,
//         answers: {
//             1: "a",
//             2: "b",
//         },
//     };
//     const output = await submitQuiz.execute(input);
//     expect(output.grade).toBe(50);
// });


test("Um usuário deve submter um quiz respondido, a nota deve ser calculada, e uma notificacao por email de ser enviada", async function() {
    const mediator = new Mediator();
    const quizRepository = new QuizRepositoryMemory();
    const quizCorrectorHandler = new QuizCorretorHandler(quizRepository, mediator);
    mediator.register(quizCorrectorHandler);

    const mailer = new MailerMemory();
    const quizCommunicatorHandler = new QuizCommunicatorHandler(mailer);
    mediator.register(quizCommunicatorHandler);

    const submitQuiz = new SubmitQuiz(mediator);

    const input = {
        name: "John Doe",
        email: "john.doe@mail.com",
        idQuiz: 1,
        answers: {
            1: "a",
            2: "a",
        },
    };
    await submitQuiz.execute(input);

    expect(mailer.messages[0].message).toBe("Olá John Doe, sua nota do quiz é 100");
});
