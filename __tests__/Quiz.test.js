// const { Quiz } = require("../src/domain/entity/Quiz");

import Quiz from "../src/domain/entity/Quiz";

describe("Quiz", () => {
    const questions = [
        {
            id: 1,
            description: "Javascript é legal?",
            answers: [
                { id: "a", description: "Sim" },
                { id: "b", description: "Não" },
            ],
            correctAnswer: "a",
        },
        {
            id: 2,
            description: "Typescript é melhor que javascript?",
            answers: [
                { id: "a", description: "Sim" },
                { id: "b", description: "Não" },
            ],
            correctAnswer: "a",
        },
    ];

    test("Deve criar um quiz", () => {
        const quiz = new Quiz(1, questions);
        expect(quiz.idQuiz).toBe(1);
        expect(quiz.questions[0].id).toBe(1);
        expect(quiz.questions).toHaveLength(2);
    });
});
