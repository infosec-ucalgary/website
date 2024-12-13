import Slideshow from "../components/Slideshow";
import { ccsa_images } from "../data/courses";

function Courses() {
  return (
    <section className="text-lavendar">
      <div className="flex flex-col items-center">
        <div className=" mt-8">
          <Slideshow images={ccsa_images} width="40rem" height="40rem" />
        </div>
      </div>
    </section>
  );
}

export default Courses;
