LottieInteractivity.create({
    mode:"cursor",
    player: "#grumpycat",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "loop",
        frames: [45, 60]
      },
      {
        position: { x: -1, y: -1 },
        type: 'stop',
        frames: [45],
      }
    ]
  });