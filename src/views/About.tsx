import { useState, useEffect } from "react";
import { execs } from "../data/Execs";

function About() {
    const [loadedImages, setLoadedImages] = useState<number[]>([]);

    useEffect(() => {
        const imagePromises = execs.map((exec, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = exec.card;
                img.onload = () => {
                    setLoadedImages((prev) => [...prev, index]);
                    resolve(null);
                };
            });
        });

        Promise.all(imagePromises);
    }, []);

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center text-lavendar">
                    Executives
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 p-4">
                {execs.map((exec, index) => (
                    <div key={exec.id} className="max-w-sm m-4 shiny-card">
                        <img
                            className={`w-full h-auto object-cover rounded-lg border-2 border-lavendar fade-in ${loadedImages.includes(index) ? 'loaded' : ''}`}
                            src={exec.card}
                            alt={`${exec.firstName} ${exec.lastName}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;