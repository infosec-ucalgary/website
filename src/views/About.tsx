import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { execs } from "../data/execs";
import { associatExecs } from "../data/associateExecs";
import { juniorExecs } from "../data/juniorexecs";

function About() {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const execCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const associateExecCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const juniorExecCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const imagePromises = [
      ...execs,
      ...associatExecs,
      ...juniorExecs,
    ].map((exec, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = exec.card;
        img.onload = () => {
          setLoadedImages((prev) => [...prev, index]);
          resolve(null);
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (allImagesLoaded) {
      const initTilt = (cards: (HTMLDivElement | null)[]) => {
        cards.forEach((card) => {
          if (card) {
            VanillaTilt.init(card, {
              max: 25,
              speed: 400,
              glare: true,
              "max-glare": 0.5,
            });
          }
        });
      };

      initTilt(execCardRefs.current);
      initTilt(associateExecCardRefs.current);
      initTilt(juniorExecCardRefs.current);
    }
  }, [allImagesLoaded]);

  return (
    <div>
      <div className="container mx-auto p-4"></div>
      {allImagesLoaded ? (
        <div>
          <h1 className="text-4xl font-bold text-center text-lavendar">
            Senior Executives
          </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {execs.map((exec, index) => (
              <div
                key={exec.id}
                className="max-w-sm m-4 shiny-card"
                ref={(el) => (execCardRefs.current[index] = el)}
                data-aos="flip-left"
              >
                <img
                  className={`w-full h-auto object-cover rounded-lg border-2 border-lavendar fade-in ${
                    loadedImages.includes(index) ? "loaded" : ""
                  }`}
                  src={exec.card}
                  alt={`${exec.firstName} ${exec.lastName}`}
                />
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-center text-lavendar">
            Associate Executives
          </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {associatExecs.map((exec, index) => (
              <div
                key={exec.id}
                className="max-w-sm m-4 shiny-card"
                ref={(el) => (associateExecCardRefs.current[index] = el)}
                data-aos="flip-left"
              >
                <img
                  className={`w-full h-auto object-cover rounded-lg border-2 border-lavendar fade-in ${
                    loadedImages.includes(index + execs.length)
                      ? "loaded"
                      : ""
                  }`}
                  src={exec.card}
                  alt={`${exec.firstName} ${exec.lastName}`}
                />
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-bold text-center text-lavendar">
            Junior Executives
          </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {juniorExecs.map((exec, index) => (
              <div
                key={exec.id}
                className="max-w-sm m-4 shiny-card"
                ref={(el) => (juniorExecCardRefs.current[index] = el)}
                data-aos="flip-left"
              >
                <img
                  className={`w-full h-auto object-cover rounded-lg border-2 border-lavendar fade-in ${
                    loadedImages.includes(
                      index + execs.length + associatExecs.length
                    )
                      ? "loaded"
                      : ""
                  }`}
                  src={exec.card}
                  alt={`${exec.firstName} ${exec.lastName}`}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}

export default About;
