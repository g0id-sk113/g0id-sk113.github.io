document.addEventListener('DOMContentLoaded', function () {


    const backgrounds = [
        'url(/static/backgrounds/bg1.jpg)',
        'url(/static/backgrounds/bg2.jpg)',
        'url(/static/backgrounds/bg3.jpg)',
        'url(/static/backgrounds/bg4.jpg)',
        'url(/static/backgrounds/bg5.jpg)'
    ];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBg = backgrounds[randomIndex];
    document.body.style.backgroundImage = selectedBg;
});