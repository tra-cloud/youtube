    const container = document.getElementById("container");

  for (let i = 1; i <= 200; i++) {
    const size = Math.random() * 10 + 2; // 2px–12px

    const c = document.createElement("div");
    c.className = "circle-container";
    c.style.width = size + "px";
    c.style.height = size + "px";

    const circle = document.createElement("div");
    circle.className = "circle";

    const startY = 100 + Math.random() * 10;
    const endY = -100 - Math.random() * 30;

    const moveDuration = 7000 + Math.random() * 4000;

    c.style.animationName = `move${i}`;
    c.style.animationDuration = moveDuration + "ms";
    c.style.animationDelay = Math.random() * 11000 + "ms";

    const keyframes = `
      @keyframes move${i} {
        from {
          transform: translate3d(${Math.random() * 100}vw, ${startY}vh, 0);
        }
        to {
          transform: translate3d(${Math.random() * 100}vw, ${endY}vh, 0);
        }
      }
    `;
    document.styleSheets[0].insertRule(keyframes);

    c.appendChild(circle);
    container.appendChild(c);
  }
