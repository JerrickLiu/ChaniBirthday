const textToDisplay = "Chani, Happy 21st Birthday! You're finally 21 and you can drink legally now HAHHAHA. No Jack Daniels or Tequila though :p. I thought really hard what I wanted to give to you for your 21st birthday and I wanted something that can last forever, something that reminds you that you are heard and love, something that makes you smile when you are at your lowest, which is why I created this website for you! Watching you grow and blossom into the amazing person you are has been one of the greatest joys of my life. I am so incredibly grateful to have met you, and I am truly extremely lucky to be able to love you and have you love me. I sincerely hope you have a lovely birthday, and I am sending you all my happiness. You will always have a special place in my heart Subby and I hope this gift makes you smile. Happy 21st Birthday, Chani \n\n\n With love - Jerrick"; // Edit the text as needed
const buttonElement = document.createElement("button");
buttonElement.textContent = "Click here!";
buttonElement.onclick = function() {
    window.location.href = "pictures_page.html";
};

function generateText() {
    const displayElement = document.getElementById("rolling-text");
    let index = 0;

    function displayNextCharacter() {
        if (index < textToDisplay.length) {
            displayElement.innerHTML += textToDisplay.charAt(index);
            index++;
            setTimeout(displayNextCharacter, 100); // Adjust the delay (in milliseconds) to control the speed
        } else {
            // Text display finished, show the button at the bottom
            const bottomButtonContainer = document.getElementById("bottom-button-container");
            bottomButtonContainer.appendChild(buttonElement);
        }
    }

    displayNextCharacter();
}

function createMultipleShootingStars(numStars) {
    // Create regular stars to fill the background
    createStars();

    for (let i = 0; i < numStars; i++) {
        const shootingStar = document.createElement("div");
        shootingStar.className = "shooting-star";
        shootingStar.style.animationDuration = `${Math.random() * 2 + 1}s`; // Randomize animation duration

        // Randomize starting position
        shootingStar.style.left = `${Math.random() * window.innerWidth}px`; // Randomize horizontal position
        shootingStar.style.top = `${Math.random() * window.innerHeight}px`; // Randomize vertical position

        shootingStar.style.animationTimingFunction = "linear"; // Use linear animation timing function for a constant speed

        // Randomize trajectory
        const angle = Math.random() * 360; // Random angle in degrees
        const distance = window.innerWidth + window.innerHeight; // Ensure the star crosses the entire screen
        const radians = angle * (Math.PI / 180); // Convert angle to radians

        const deltaX = Math.cos(radians) * distance;
        const deltaY = Math.sin(radians) * distance;

        // Set the transform property to move the shooting star along the trajectory
        shootingStar.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

        document.body.appendChild(shootingStar);
    }
}


function createStars() {
    const numberOfStars = 100;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Randomize animation duration
        star.style.left = `${Math.random() * window.innerWidth}px`; // Randomize horizontal position
        star.style.top = `${Math.random() * window.innerHeight}px`; // Randomize vertical position
        document.body.appendChild(star);
    }
}


// Call the functions when the window has finished loading
window.onload = function () {
    generateText();
    createMultipleShootingStars(3);

};
