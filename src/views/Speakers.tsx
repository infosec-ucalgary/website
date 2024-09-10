import { useEffect, useState } from "react";
import { speakers } from "../data/speakers";

function Speakers() {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = speakers.map((speaker, _) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = speaker.headshot;
        img.onload = () => {
          resolve(null);
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-lavendar">
          Speakers
        </h1>
        <h3 className="text-2xl text-center text-lavendar mt-4">
          Join our speaker series and learn information security topics from
          real-world industry professionals.
        </h3>
        <hr className="mt-6 border-2 border-neutral-gray rounded-lg" />
      </div>
      {allImagesLoaded ? (
        <div className="flex justify-start lg:justify-center lg:ml-0 m-4">
          <div className="relative w-full lg:w-px lg:bg-electric-plum">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "lg:justify-end"
                } mb-8`}
              >
                <div
                  className={`max-[1024px]:hidden absolute left-1/2 -ml-2 w-4 h-4 bg-lavendar rounded-full z-10 ${
                    index === 0 ? "top-0" : ""
                  }`}
                />
                <div
                  className={`p-6 bg-dark-gray bg-opacity-30 text-white rounded-lg ${
                    index % 2 === 0 ? "lg:ml-10" : "lg:mr-10"
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <img
                        src={speaker.headshot}
                        alt={speaker.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">{speaker.name}</h3>
                        <p>
                          {new Date(
                            speaker.date + "T00:00:00",
                          ).toLocaleDateString("en-us", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <p className="w-full lg:w-96">{speaker.description}</p>
                  </div>
                </div>
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

export default Speakers;
