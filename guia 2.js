const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer =[];
  for (let i = 0; i < totalStars; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--space-layer", layer.join(","));
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
};
generateSpaceLayer("1px" , ".space-1", 200, "60s");
generateSpaceLayer("2px" , ".space-2", 100, "55s");
generateSpaceLayer("3px" , ".space-3", 50, "50s");
