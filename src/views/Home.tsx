import { ReactTyped } from "react-typed";
import Logo from "/images/logo_alt.svg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const infoRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = () => {
    if (infoRef.current) infoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="text-lavendar">
      <header className="text-center py-12">
        <img className="max-h-[450px] mx-auto" src={Logo} alt="Logo" />
        <p className="text-4xl md:text-5xl font-bold -mt-12 animate-fade-in">
          UCalgary CyberSecurity Club
        </p>
        <svg
          className="animate-bounce w-16 h-16 mx-auto mt-12 cursor-pointer"
          onClick={handleScroll}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </header>
      <div ref={infoRef} className="flex flex-col items-center py-20">
        <section
          className="w-full bg-like-lavendar py-12 text-lavendar bg-opacity-40"
          data-aos="slide-right"
        >
          <p className="text-center text-4xl font-bold">Who We Are</p>
          <div className="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12">
            <p className="text-center text-lg">
              The mission of the Cyber Security Club is to expose and educate
              university students to the technical and theoretical skills in the
              field of cybersecurity, and to connect these students with
              industry professionals.
            </p>
          </div>
        </section>
        <section
          className="w-full bg-dark-gray py-12 text-center text-lavendar bg-opacity-40 rounded"
          data-aos="slide-left"
        >
          <p className="text-4xl font-bold mb-6">What We Do</p>
          <div className="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12">
            <p className="text-center text-lg">
              Our club organizes various activities including workshops, guest
              lectures, and capture the flag (CTF) competitions to help students
              develop their cybersecurity skills. We also provide cybersecurity
              resources for students.
            </p>
          </div>
          <div className="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12 overflow-hidden">
            <div className="border-2 bg-gray-800 rounded-full py-2 px-4 text-xl">
              <span className="text-[#9289b8]">root@magpie ~$ </span>
              <span className="text-white">echo </span>
              <ReactTyped
                className="text-white"
                strings={[
                  "SQL injection",
                  "privilege escalation",
                  "University of Calgary",
                  "XXS injection",
                  "web exploitation",
                  "capture the flag",
                  "ROP chain",
                  "cryptography",
                ]}
                typeSpeed={60}
                backSpeed={50}
                cursorChar="▮"
                loop
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
