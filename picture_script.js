const imageContainer = document.getElementById("image-container");

const textToDisplay = "Today is such a special day, not just because it marks the 21st year of your incredible life, but because it celebrates everything that makes you the amazing person you are. Your kindness, your strength, your unwavering spirit—all these qualities and so many more make you the extraordinary person you are. Turning 21 is a significant milestone, a time to reflect on all you've achieved and to look forward to the endless possibilities ahead. As you step into this new chapter, I want you to know just how proud I am of you amd I am so excited to see all the amazing things you will continue to achieve. As you celebrate today, I hope you feel surrounded by love and warmth from all those who care about you. You deserve every bit of happiness this world has to offer. Your heart is so full of love, your spirit so full of life, and your smile so full of sunshine. You make every day better just by being you. I'm so glad to have met you and create the countless precious memories we've shared. You have given me so much happiness, so many laughs, and so many unforgettable memories. I am endlessly grateful for your love and for the moments we share. You have shown me what it means to love and to be loved unconditionally, and for that, I will always be thankful. Today, I want to celebrate you—not just because it's your birthday, but because you are you. Here's to the beautiful memories we've created and to the love that we share. Here's to the laughter, the adventures, the quiet moments, and the shared dreams. Here's to you, Chani. Happy 21st birthday Subby. I love you with all my heart, and you will always have me \n\n With all my love - Jerrick"; // Edit the text as needed

const buttonElement = document.createElement("button");
buttonElement.textContent = "Click here!";
buttonElement.onclick = function() {
    // Pause all audio elements on the page
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => audio.pause());
    window.open("https://youtu.be/vzrg34vJ26k", "_blank");
};

let currentImageIndex = 0; // Keep track of the current image index

function generateText() {
    const displayElement = document.getElementById("rolling-text");
    displayElement.style.fontSize = '28px';
    let index = 0;

    function displayNextCharacter() {
        if (index < textToDisplay.length) {
            displayElement.innerHTML += textToDisplay.charAt(index);
            index++;
            setTimeout(displayNextCharacter, 1); // Adjust the delay (in milliseconds) to control the speed
        } else {
            // Text display finished, show the button at the bottom
            const bottomButtonContainer = document.getElementById("bottom-button-container");
            bottomButtonContainer.appendChild(buttonElement);
        }
    }

    displayNextCharacter();
}


function generateImageGallery(imageFolder) {
    // List of image filenames in the local folder
    const imageFiles = [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg",
        "27.jpg",
        "28.jpg",
        "29.jpg",
        // Add more image filenames as needed
    ];

    // Create complete image URLs and display them
    const images = imageFiles.map(file => `${imageFolder}/${file}`);
    displayNextImage(images);

    // Generate rolling text in the left half of the screen
    generateText();
}

// Function to display the next image in the loop
function displayNextImage(images) {
    // Remove previous images
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    // Display the current image
    const imgElement = document.createElement("img");
    imgElement.src = images[currentImageIndex];
    imgElement.alt = "Image";
    imageContainer.appendChild(imgElement);

    // Increment the image index for the next iteration
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Set a timeout to display the next image after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
        displayNextImage(images);
    }, 3000); // Adjust the duration as needed (in milliseconds)
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
    createMultipleShootingStars(3)
    // Change "path/to/your/image/folder" to the actual path of your image folder
    generateImageGallery("photos");
};