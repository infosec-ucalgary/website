// views/About.tsx
import React from "react";
import { execs } from "../data/Execs";
import Layout from "../components/Layout"; // Import the Layout component

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-lavendar">
          Executives
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {execs.map((exec) => (
          <div key={exec.id} className="max-w-sm m-4 shiny-card">
            <img
              className="w-full h-auto object-cover rounded-lg border-2 border-lavendar"
              src={exec.card}
              alt={`${exec.firstName} ${exec.lastName}`}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default About;
