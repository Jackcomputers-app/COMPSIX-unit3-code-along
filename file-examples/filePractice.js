
const fs = require('fs');
const path = require('path');


const {
    calculateAverage,
    findHighest,
    sumArr
} = require('../math-examples/mathUtils');


const responsesPath = path.join(__dirname, 'student-responses.txt');
const scoresPath = path.join(__dirname, 'quiz-scores.txt');


const content = fs.readFileSync(responsesPath, 'utf8');

console.log("STUDENT RESPONSES:");

const lines = content.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

console.log("Number of responses:", lines.length);
console.log("First response:", lines[0]);
console.log("Last response:", lines[lines.length - 1]);


console.log("\nQUIZ SCORES:");

const scoresText = fs.readFileSync(scoresPath, 'utf8');

const scoreLines = scoresText.split('\n');
const scores = [];

for (let i = 0; i < scoreLines.length; i++) {
    const line = scoreLines[i].trim();

    if (line.length > 0) {
        const score = parseFloat(line);

        if (!Number.isNaN(score)) {
            scores.push(score);
        }
    }
}

console.log("Scores:", scores);
console.log("Number of scores:", scores.length);


console.log("\nSCORE ANALYSIS:");

console.log("Average score:", calculateAverage(scores));
console.log("Highest score:", findHighest(scores));
console.log("Total score:", sumArr(scores));
