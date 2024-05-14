document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById('damnatio');
    audio.volume = 0.1;

    document.querySelector('#playButton').addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    const bg = document.querySelector(".dynamic-background");
    let degree = 270;

    
    var dataSpyList = [].slice.call(
    document.querySelectorAll('[data-bs-spy="scroll"]')
    );
    dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
    });


    setInterval(() => {
        degree = (degree + 1) % 360;
        const color1 = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        const color2 = "#ff0000"; // Fixed intense red
        const color3 = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        bg.style.background = `linear-gradient(${degree}deg, ${color1}, ${color2}, ${color3})`;
    }, 5000); // Change gradient every 5 seconds
});

document.addEventListener('DOMContentLoaded', function () {
    var chromaticElements = document.querySelectorAll('.chromatic');

    function randomizeAnimationDelay() {
        chromaticElements.forEach(function (element) {
            var randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
            element.style.animationDelay = randomDelay + 's';
            sharpenChromaticAberration();
        });
    }

    function sharpenChromaticAberration() {
        chromaticElements.forEach(function (element) {
            var randomOffset = Math.random() * 6 - 3; // Random offset between -3px and 3px
            element.style.textShadow = randomOffset + 'px 0 red, ' + -randomOffset + 'px 0 cyan';
        });
    }

    randomizeAnimationDelay();
    sharpenChromaticAberration(); 

    setInterval(randomizeAnimationDelay, 80);
});

