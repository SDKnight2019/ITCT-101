// bobDarkJoke.js
const oneLinerJoke = require('one-liner-joke');

// Optional: filter jokes by "dark" category if available
// Otherwise, just grab random jokes and let fate decide
const getDarkJoke = () => {
    const joke = oneLinerJoke.getRandomJoke({
        'category': 'dark'
    });
    return joke.body;
};

console.log("Bob's dark humor moment:");
console.log(getDarkJoke());