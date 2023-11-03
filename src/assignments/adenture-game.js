let questions = [
    {
        prompt: "What is 2 + 2?",
        answer: "4"
    },
    {
        prompt: "What is the capital of France?",
        answer: "Paris"
    }
    // Add more questions as needed
];
let score = 0;
for (let i = 0; i < questions.length; i++) {
    let response = prompt(questions[i].prompt);
    if (response === questions[i].answer) {
        score++;
    }
}
console.log(`You scored ${score} out of ${questions.length}`);
export {};
