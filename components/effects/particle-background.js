import { loadFull } from "tsparticles";
import Particles from 'react-particles';
import particlesConfig from '../config/particlesConfig';

const particlesInit = async (engine) => {
    console.log("Particle Init, Engine: ", engine, " loadFull: ", loadFull);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}

const particlesLoaded = async (container) => {
    await console.log("Particle Init: ", container);
}

const ParticleBackground = () => {
    return <Particles
    style={{
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      width: "100%",
      height: "100%",
      zIndex: 1,
    }}
    sx={{position: "absolute", width: "100%", height: "100vh"}}
    id="tsparticles"
    // init={particlesInit}
    // loaded={particlesLoaded}
    options={particlesConfig}
  />
}

export default ParticleBackground;