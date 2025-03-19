// Variables for spaceship movement
let spaceship = document.getElementById('spaceship');
let spaceshipPosition = 0;
let interval;
let isJourneying = false;

// Start the interstellar journey (movement)
function startJourney() {
    if (!isJourneying) {
        isJourneying = true;
        interval = setInterval(moveSpaceship, 20); // Move every 20ms
    }
}

// Stop the interstellar journey
function stopJourney() {
    if (isJourneying) {
        isJourneying = false;
        clearInterval(interval);
    }
}

// Move the spaceship upwards and simulate motion
function moveSpaceship() {
    if (spaceshipPosition <= -1000) {
        spaceshipPosition = 0; // Reset position after crossing the screen
    }
    spaceshipPosition -= 2; // Move spaceship upwards (negative Y direction)
    spaceship.style.transform = `translateX(-50%) translateY(${spaceshipPosition}px)`;
}
