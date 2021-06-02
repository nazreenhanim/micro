LottieInteractivity.create({
    mode:"cursor",
    player: "#seventhLottie",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "loop",
        frames: [1, 60]
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [45],
      }
    ]
});