import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

interface ParticleProps {
  isDarkMode: boolean;
}

export default function Particle({ isDarkMode }: ParticleProps) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log('init');
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => {
    return Promise.resolve();
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                grab: {
                  distance: 200,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: isDarkMode
                  ? 'rgba(255, 255, 255, 0.5)'
                  : 'rgba(0, 0, 0, 0.5)',
                  
              },
              links: {
                color: isDarkMode
                  ? 'rgba(255, 255, 255, 0.5)'
                  : 'rgba(0, 0, 0, 0.5)',
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  // area: 1000,
                },
                value: 200,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
