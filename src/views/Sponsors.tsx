import { ReactTyped } from "react-typed";
import Logo from "/images/logo_alt.svg";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slideshow from "../components/Slideshow";
import { enfocom_images } from "../data/sponsors";

function Sponsors() {

    return (
        <section className="text-lavendar">
            <div className="flex flex-col items-center">
                <Slideshow images={enfocom_images} width="40rem" height="40rem" />
            

                <a href="/contact" className=" p-2 bg-electric-plum rounded-sm mt-12 hover:bg-like-lavendar hover:text-black transition-all ease-linear duration-300">
                    Sponsor Us!
                </a>
            </div>
        </section>
    );
}

export default Sponsors;