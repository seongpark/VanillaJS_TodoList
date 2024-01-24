const quotes = [
    {
        quote: "Success is not the optimal result but stems from repeated everyday efforts.",
        author: "A. P. J. Abdul Kalam",
    },
    {
        quote: "You cannot change the world. One small action can change the world.",
        author: "Jeffrey Trotter",
    },
    {
        quote: "All mountains start from small stones.",
        author: "Chinese Proverb",
    },
    {
        quote: "Whether you believe you can or you can't, you are right.",
        author: "Henry Ford",
    },
    {
        quote: "When the mind changes, the world changes.",
        author: "Nathan Hale",
    },
    {
        quote: "Good plans shape the future, but good actions shape the present.",
        author: "Peter Drucker",
    },
    {
        quote: "The time you have is not taken from someone else; it's given to you.",
        author: "John C. Maxwell",
    },
    {
        quote: "Without enduring pain, you cannot bring about change.",
        author: "Richard Nixon",
    },
    {
        quote: "Persisting in effort is sometimes better than failure.",
        author: "Albert Einstein",
    },
    {
        quote: "Every problem has a solution eventually.",
        author: "Winston Churchill",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;