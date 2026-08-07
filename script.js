const cards = document.querySelectorAll(".card");

const albumImg = document.querySelector(".album-pic img");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".song-by");

const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".current-time");

let timer;

// Click a song
cards.forEach((card) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        // Remove active card
        cards.forEach(c => c.classList.remove("active-song"));

        // Highlight current card
        card.classList.add("active-song");

        // Update player
        albumImg.src = card.querySelector(".card-img").src;
        songName.textContent = card.querySelector(".card-title").textContent;
        artistName.textContent = card.querySelector(".card-info").textContent;

        // Reset progress
        clearInterval(timer);
        progressBar.value = 0;
        currentTime.textContent = "00:00";

        let progress = 0;

        timer = setInterval(() => {

            if (progress >= 100) {
                clearInterval(timer);
                return;
            }

            progress++;
            progressBar.value = progress;

            const seconds = Math.floor((progress * 3.33) / 100 * 60);

            const min = String(Math.floor(seconds / 60)).padStart(2, "0");
            const sec = String(seconds % 60).padStart(2, "0");

            currentTime.textContent = `${min}:${sec}`;

        }, 100);

    });
});