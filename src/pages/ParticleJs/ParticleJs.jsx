import React, { useEffect } from "react";
import "./particlejs.scss";
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";

const particleProperties = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: "#ffffff",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        // mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const ParticleJs = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particleProperties);
    }
    if (window.particlesJS) {
      window.particlesJS("particles-js2", particleProperties);
    }
  }, []);

  return (
    <>
      {/* <ParticlesComponent /> */}
      <section id="particles-js" className="particle-sec">
        <div
          id="particles-js"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            // opacity: 0.5,
          }}
        />
        <div className="content_wrapper">
          <div className="content-box">
            <h1 className="particle-heading">Section 1</h1>
          </div>
        </div>
      </section>
      <section id="section2" className="particle-sec">
        <h2 className="particle-heading">Section 2</h2>
      </section>
      <section id="particles-js" className="particle-sec">
        <div
          id="particles-js2"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
            // opacity: 0.5,
          }}
        />
        <div className="content_wrapper">
          <div className="content-box">
            <h3 className="particle-heading">Section 3</h3>
          </div>
        </div>
      </section>
      <section id="section4" className="particle-sec">
        <h4 className="particle-heading">Section 4</h4>
      </section>
    </>
  );
};

export default ParticleJs;
