import "./main.css";
import Fireworks from "fireworks-canvas";

export default () => {
  const container = document.getElementById("container");
  const options = {
    maxRockets: 200,
    rocketSpawnInterval: 5,
    numParticles: Math.floor(500 * Math.random()),
    explosionMinHeight: 0.2,
    explosionMaxHeight: 0.7,
    explosionChance: 0.01
  };
  const fireworks = new Fireworks(container, options);
  fireworks.start();
};
