//Play an animation back on second click

// let iconMenu = document.querySelector('.bodymovinanim');

// let animationMenu = bodymovin.loadAnimation({
//         container: iconMenu,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         path: "./assets/json/grumpy-cat.json"
// });

// var directionMenu = 1;
//     iconMenu.addEventListener('mouseenter', (e) => {
//     animationMenu.setDirection(directionMenu);
//     animationMenu.play();
// });

//     iconMenu.addEventListener('mouseleave', (e) => {
//     animationMenu.setDirection(-directionMenu);
//     animationMenu.play();
// });

var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets9.lottiefiles.com/packages/lf20_Zz37yH.json"
})





