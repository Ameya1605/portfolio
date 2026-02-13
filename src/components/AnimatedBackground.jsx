import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // slim = faster
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        responsive: [
  {
    maxWidth: 768,
    options: {
      particles: {
        number: { value: 60 },
      },
    },
  },
],

        fullScreen: { enable: true, zIndex: -1 },

        fpsLimit: 60, // 🔥 prevents overdraw

        background: {
          color: "#020617",
        },

        particles: {
          number: {
            value: 120, // ✅ sweet spot
            density: {
              enable: true,
              area: 1000,
            },
          },

          color: {
            value: ["#ffffff", "#60a5fa", "#a78bfa"],
          },

          size: {
            value: { min: 0.6, max: 1.8 },
          },

          opacity: {
            value: { min: 0.3, max: 0.8 },
          },

          move: {
            enable: true,
            speed: 0.2, // 🔥 slower = smoother
            random: true,
            straight: false,
            outModes: "out",
          },

          shape: {
            type: "circle",
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: false, // ❌ hover is expensive
            },
            onClick: {
              enable: false,
            },
            resize: true,
          },
        },

        detectRetina: true,
      }}
    />
  );
}
