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
function generatePhrase() {
    const phraseContainer = document.getElementById("phraseContainer");
    let randomIndex = Math.floor(Math.random() * phrases.length);
    phraseContainer.textContent = phrases[randomIndex];
}