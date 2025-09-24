// src/utils/quizEngine.js
// Basic grading - compare answers with quiz model
const gradeQuiz = (quiz, answers) => {
  // answers = array of indexes
  let correct = 0;
  quiz.questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) correct++;
  });
  const percent = (correct / quiz.questions.length) * 100;
  return { correct, total: quiz.questions.length, percent, passed: percent >= (quiz.passingPercent || 70) };
};

module.exports = { gradeQuiz };
