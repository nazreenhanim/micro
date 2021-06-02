let select = function(s) {
  return document.querySelector(s);
};

let selectAll = function(s) {
  return document.querySelectorAll(s);
};

var container = document.getElementById('robotLottie');
// Set up our animation
var animData = {
 container: container,
 renderer: 'svg',
 autoplay: false,
 loop: true,
 path: './assets/json/robot.json',
};

var robotAnim = bodymovin.loadAnimation(animData);
robotAnim.addEventListener('DOMLoaded', onRobotDOMLoaded);

var tl = new TimelineMax();

function onRobotDOMLoaded(e) {
  tl.to({
    frame: 0
  }, 3, {
    frame: robotAnim.totalFrames - 1,
    onUpdate: function() {
      robotAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

let notRobotScene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: '800%'
  })
  .setTween(tl)
  .addTo(controller);