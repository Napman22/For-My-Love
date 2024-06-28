const phrases = [
    "Hiii baby Mwahhhhh",
    "My Star, My Light, My love",
    "I love you",
    "Your smart, strong, kind, and caring",
    "I love you so much",
    "MWAHHHHHH",
    "<33333333333",
    "YEEEEEEEEEE",
    "YUHHHHHHHHH",
    "Infitiy Kises.",
    "You so Goregous shawty.",
    "My lover",
    "I love you because you are you. You bring so much joy to others i wish you could hang out with yourself because then you  would understand the joy you bring",
];

const images = [
    "https://favim.com/pd/s12/gif_previews/7/730/7302/73027/7302708.gif",
    "https://i.imgur.com/yyzW1xZ.gif",
    "https://64.media.tumblr.com/e599c49e7a3087c1482cdc32b8f54c65/48c30bae661c6fbe-4c/s540x810/9b574ba7e99fb28219074dbfd72e728482370819.gifv",
];

function generateContent() {
    generatePhrase();
    generateImage();
}

function generatePhrase() {
    
    const phraseContainer = document.getElementById("phraseContainer");
    let randomIndex = Math.floor(Math.random() * phrases.length);
    phraseContainer.textContent = phrases[randomIndex];
}


function generateImage() {
    const imageContainer = document.getElementById("imageContainer");
    let randomIndex = Math.floor(Math.random() * images.length);
    const img = document.createElement("img");
    img.src = images[randomIndex];
    img.alt = "Random Image";
    imageContainer.innerHTML = "";
    imageContainer.appendChild(img);
}