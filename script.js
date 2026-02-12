const yesMessages =
[
    "Are u sure babyboy?",
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
const yesImages =
[
    "https://i.giphy.com/4N1wOi78ZGzSB6H7vK.webp",
    "https://i.giphy.com/jNJW9Bj6vVXIERUgK3.webp",
    "https://i.giphy.com/qFmdpUKAFZ6rMobzzu.webp",
    "https://i.giphy.com/7W1rgKAxlDe3m.webp"
]

let messageIndex = 0;
let yesMessageIndex = 0;
let gifIndex = 0;

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
        head.style.fontSize = `${currentSize * 1.6}px`;
        image.src = yesImages[gifIndex];
        gifIndex = (gifIndex + 1) % yesImages.length;
    }
    else
    {
        head.textContent = "I knew u would say yes my langlang<3333";
        head.style.fontSize = "2.5em";
        document.body.style.backgroundImage = `url('https://i.giphy.com/qx3d4enif4rw3t5eng.webp')`;
        document.querySelector(".buttons").style.display = "none";
        yesButton.removeEventListener("click", arguments.callee);
        noButton.removeEventListener("click", arguments.callee);
    }
});

noButton.addEventListener("click", () => {
    image.src = noImages[gifIndex];
    gifIndex = (gifIndex + 1) % noImages.length;
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});