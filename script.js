// LOVES ME, LOVES ME NOT 🌼
// Romantic interactive flower animation

const flower = document.getElementById("flower");
const petalsContainer = document.getElementById("petals");
const message = document.getElementById("message");
const instruction = document.getElementById("instruction");
const replay = document.getElementById("replay");
const heartsContainer = document.getElementById("hearts");

const totalPetals = 9;

let currentPetal = 0;
let finished = false;
let heartTimer = null;

// ==========================
// CREATE STARS
// ==========================

function createStars() {
    const starsContainer = document.getElementById("stars");

    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 70 + "%";

        star.style.animationDelay = Math.random() * 3 + "s";
        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        starsContainer.appendChild(star);
    }
}

// ==========================
// CREATE FLOWER FIELD
// ==========================

function createFlowerField() {
    const field = document.getElementById("flowerField");

    const colors = [
        "#ff91c8",
        "#d49aff",
        "#a8baff",
        "#ffc0e5",
        "#b18cff",
        "#ffe4a8"
    ];

    for (let i = 0; i < 450; i++) {
        const flower = document.createElement("div");

        flower.className = "field-flower";

        const x = Math.random() * 100;
        const y = 65 + Math.random() * 35;

        const size = 3 + Math.random() * 7;

        flower.style.left = x + "%";
        flower.style.top = y + "%";

        flower.style.setProperty("--size", size + "px");
        flower.style.setProperty(
            "--color",
            colors[Math.floor(Math.random() * colors.length)]
        );

        field.appendChild(flower);
    }
}

// ==========================
// CREATE DAISY PETALS
// ==========================

function createPetals() {
    petalsContainer.innerHTML = "";

    for (let i = 0; i < totalPetals; i++) {
        const petal = document.createElement("div");

        petal.className = "petal";
        petal.dataset.index = i;

        const angle = i * (360 / totalPetals);

petal.style.setProperty("--angle", angle + "deg");
petal.style.transform = "rotate(" + angle + "deg)";

petalsContainer.appendChild(petal);
    }
}

// ==========================
// PICK ONE PETAL
// ==========================

function pickPetal() {
    if (finished) return;

    const petals = petalsContainer.querySelectorAll(".petal");

    if (currentPetal >= totalPetals) return;

    const petal = petals[currentPetal];

    petal.classList.add("falling");

    currentPetal++;

    // Alternate love messages
    if (currentPetal % 2 === 1) {
        message.textContent = "LOVES ME 💗";
        message.style.color = "#ff9ed8";
    } else {
        message.textContent = "LOVES ME NOT";
        message.style.color = "#ffffff";
    }

    // Final petal
    if (currentPetal === totalPetals) {
        finished = true;

       setTimeout(() => {
    message.textContent = "I LOVE YOU, KOKO! ❤️";

    instruction.innerHTML = `
        <div class="love-letter">
            <h2>To My KoKo 💗</h2>

            <p>
                May I have the honor of seeing you bloom
                forever in the garden of my life?
            </p>
                
            <p>Forever yours, Su ❤️
        </div>
    `;

    replay.style.display = "block";
    startHearts();
}, 1000);
    }
}

// ==========================
// FLOATING HEARTS
// ==========================

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "💗" : "💕";

    heart.style.left = (20 + Math.random() * 60) + "%";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function startHearts() {
    if (heartTimer !== null) return;

    heartTimer = setInterval(createHeart, 200);
}

// ==========================
// RESET GAME
// ==========================

function resetGame() {
    currentPetal = 0;
    finished = false;

    clearInterval(heartTimer);
    heartTimer = null;

    heartsContainer.innerHTML = "";

    message.textContent = "LOVES ME?";
    message.style.color = "#ff9ed8";

    instruction.textContent = "Tap the flower to pick a petal 🌸";

    replay.style.display = "none";

    createPetals();
}

// ==========================
// CLICK AND KEYBOARD
// ==========================

flower.addEventListener("click", pickPetal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !finished) {
        pickPetal();
    }

    if (event.code === "Space") {
        event.preventDefault();
        resetGame();
    }
});

// ==========================
// START WEBSITE
// ==========================

createStars();
createFlowerField();
createPetals();
// ==========================
// MUSIC ON / OFF BUTTON
// ==========================

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

backgroundMusic.volume = 0.4;

// Start music
async function playMusic() {
    try {
        await backgroundMusic.play();

        musicButton.textContent = "♫";
        musicButton.classList.add("playing");
        musicButton.title = "Pause Music";

    } catch (error) {
        console.log("Music could not play:", error);
    }
}

// Pause music
function pauseMusic() {
    backgroundMusic.pause();

    musicButton.textContent = "♪";
    musicButton.classList.remove("playing");
    musicButton.title = "Play Music";
}

// Music button click
musicButton.addEventListener("click", function(event) {
    event.stopPropagation();

    if (backgroundMusic.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
});

// Initial button state
musicButton.textContent = "♪";
musicButton.title = "Play Music";
// ==========================
// MAGICAL NIGHT GARDEN
// ==========================

function createNightGarden() {

    const grass = document.getElementById("nightGrass");
    const stars = document.getElementById("nightStars");

    if (!grass || !stars) return;

    grass.innerHTML = "";
    stars.innerHTML = "";

    // Create grass blades
    for (let i = 0; i < 180; i++) {

        const blade = document.createElement("div");

        blade.className = "grass-blade";

        blade.style.left = Math.random() * 100 + "%";

        blade.style.height =
            (15 + Math.random() * 65) + "px";

        blade.style.animationDelay =
            Math.random() * 3 + "s";

        blade.style.opacity =
            0.4 + Math.random() * 0.6;

        grass.appendChild(blade);
    }

    // Create tiny glowing flowers
    for (let i = 0; i < 100; i++) {

        const flower = document.createElement("div");

        flower.className = "grass-flower";

        flower.style.left =
            Math.random() * 100 + "%";

        flower.style.bottom =
            Math.random() * 85 + "px";

        flower.style.animationDelay =
            Math.random() * 3 + "s";

        grass.appendChild(flower);
    }

    // Create twinkling stars
    for (let i = 0; i < 100; i++) {

        const star = document.createElement("div");

        star.className = "night-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 65 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        stars.appendChild(star);
    }
}

// Start the magical garden
createNightGarden();
