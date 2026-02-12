const noMessages = 
[
    "Are u sure?",
    "Reallyyyy?",
    "LUH TALAGA BAAAA",
    "LANGLANG PLSSSS",
    "Just think about it bb<333",
    "ill be beri beri sad bb",
    "FINE! IM NOT GONNA ASK ANYMORE!",
    "Just kidding, say yes pls"
];

const yesMessages =
[
    "Are u sure babyboy",
    "REALLYYYYYYY",
    "U SWEAR BABYY??"
]

const noImages = 
[
    "https://i.giphy.com/W4RizlO6qZWQRYw9mb.webp",
    "https://i.giphy.com/lHTJgttLitH3BKpEXr.webp",
    "https://i.giphy.com/ML1CuEfsj4CmI7jA7n.webp",
    "https://i.giphy.com/3o751ZN0aNKakEQdEY.webp",
]

let messageIndex = 0;
let yesMessageIndex = 0;
let i = 0;

const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const image = document.getElementById("img");
const head  = document.getElementById("head");

yesButton.addEventListener("click", () => {
    if (yesMessageIndex < yesMessages.length)
    {
        head.textContent = yesMessages[yesMessageIndex];
        yesMessageIndex++;
        const currentSize = parseFloat(window.getComputedStyle(head).fontSize);
        head.style.fontSize = `${currentSize * 1.8}px`;
    }
    else
    {
        head.textContent = "I knew u would say yes my langlang<3333";
        head.style.fontSize = "2.5em";
        document.body.style.backgroundImage = `url('https://i.giphy.com/qFmdpUKAFZ6rMobzzu.webp')`;
        document.querySelector(".buttons").style.display = "none";
        yesButton.removeEventListener("click", arguments.callee);
        noButton.removeEventListener("click", arguments.callee);
    }
});

noButton.addEventListener("click", () => {
    head.textContent = noMessages[messageIndex];
    messageIndex = (messageIndex + 1) % noMessages.length;
    const size = parseFloat(window.getComputedStyle(head).fontSize);
    head.style.fontSize = `${size * 1.9}px`;
});

// https://i.giphy.com/W4RizlO6qZWQRYw9mb.webp 
// https://i.giphy.com/lHTJgttLitH3BKpEXr.webp
// https://i.giphy.com/ML1CuEfsj4CmI7jA7n.webp
// https://i.giphy.com/3o751ZN0aNKakEQdEY.webp

//remove image after 6 no's because it would take up the whole screen

// use cornflower blue for background
// HSL: \(218.5^{\circ },79.2\%,66.1\%\)

// use hsl values for colors