document.addEventListener('DOMContentLoaded', function () {
    console.log("Snowflakes script loaded");
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var numberOfSnowflakes = 50;
    var snowflakes = [];

    for (var i = 0; i < numberOfSnowflakes; i++) {
        snowflakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
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

            // Speed is inversely proportional to the radius (smaller snowflakes fall faster)
            var speed = (3 - snowflake.radius) / 2; // Adjust the denominator to control max speed

            snowflake.y += speed;
            if (snowflake.y > canvas.height) {
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
