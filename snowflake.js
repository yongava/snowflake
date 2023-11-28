document.addEventListener('DOMContentLoaded', function () {
    console.log("Snowflakes script loaded");
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var numberOfSnowflakes = 100;
    var snowflakes = [];

    for (var i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 1,
            density: Math.random() * numberOfSnowflakes
        });
    }

    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < numberOfSnowflakes; i++) {
            var snowflake = snowflakes[i];
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // Red color
            ctx.fill();
        }
    }

    function moveSnowflakes() {
    for (var i = 0; i < numberOfSnowflakes; i++) {
        var snowflake = snowflakes[i];

        // Ensure speed is positive so snowflakes always fall downwards
        var speed = Math.abs((4 - snowflake.radius) / 2); // Adjust for desired speed

        // Add horizontal movement
        var wind = Math.sin(Date.now() / 1000) * 0.5; // Change 0.5 to adjust the strength of the wind effect

        // Update position
        snowflake.y += speed;
        snowflake.x += wind;

        // Respawn snowflake at top if it goes below the screen or drifts too far horizontally
        if (snowflake.y > canvas.height || snowflake.x > canvas.width || snowflake.x < 0) {
            snowflakes[i] = { x: Math.random() * canvas.width, y: 0, radius: snowflake.radius, density: snowflake.density };
        }
    }
}



    function updateSnowflakes() {
        moveSnowflakes();
        drawSnowflakes();
    }

    setInterval(updateSnowflakes, 50);
});
