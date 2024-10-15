import "aos/dist/aos.css";
import Slideshow from "../components/Slideshow";
import { enfocom_images } from "../data/sponsors";

function Sponsors() {

    return (
        <section className="text-lavendar">
            <div className="flex flex-col items-center">

                <div className=" mt-8">
                <Slideshow images={enfocom_images} width="40rem" height="40rem" />
                </div>
                <a href="https://www.enfocomcyber.com/" className="m-12">
                    <img src="/images/sponsors/enfocom/enfocom-cyber-logo_white-text.webp" className="w-[40rem] max-w-[95vw] hover:brightness-50 transition-all ease-linear duration-150"/>
                </a>
            

                <a href="/contact" className="p-2 bg-electric-plum rounded-sm hover:bg-like-lavendar hover:text-black transition-all ease-linear duration-300">
                    Sponsor Us!
                </a>
            </div>
        </section>
    );
}

export default Sponsors;