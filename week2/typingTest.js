const readline = require("readline");
const { performance } = require("perf_hooks");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const testSentence = "The quick brown fox jumps over the lazy dog.";

console.log("Typing Speed Test");
console.log("Type the following sentence as fast as you can:");
console.log(`\n"${testSentence}"\n`);

rl.question("Press Enter when you're ready to start...", () => {
  console.log("\nStart typing below:\n");

  const start = performance.now();

  rl.question("> ", (typed) => {
    const end = performance.now();
    const durationInSeconds = (end - start) / 1000;

    const wordCount = typed.trim().split(/\s+/).length;
    const wpm = Math.round((wordCount / durationInSeconds) * 60);

    console.log("\n--- Results ---");
    console.log(`Time: ${durationInSeconds.toFixed(2)} seconds`);
    console.log(`Words typed: ${wordCount}`);
    console.log(`WPM: ${wpm}`);

    // Optional accuracy check
    if (typed.trim() === testSentence) {
      console.log("Great job! You typed it exactly right.");
    } else {
      console.log("There were some mistakes in your typing.");
    }

    rl.close();
  });
});
