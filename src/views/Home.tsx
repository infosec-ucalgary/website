import Logo from "@/assets/logo.svg";
import DiscordLogo from "@/assets/discord-logo.png";
import YoutubeLogo from "@/assets/youtube-logo.png";
import MagpieCTFLogo from "@/assets/CTF2023.png";

function Home() {
  return (
    <section>
      <header className="text-center pb-12">
        <img className="max-h-[600px] mx-auto" src={Logo} />
        <p className="text-center text-4xl"> UofC CyberSecurity Club</p>
        <svg
          className="animate-bounce w-16 h-16 text-gray-900 mx-auto mt-12"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </header>
      <div>
        <div className="flex flex-col">
          <section className="w-full bg-like-lavendar py-12">
            <p className="text-center text-4xl">Who We Are</p>
            <div className="w-5/6 md:w-2/3 xl:w-2/5 mx-auto py-12">
              <p className="text-center text-lg">
                The mission of the Information Security Club is to expose and
                educate university students to the technical and theoretical
                skills in the field of cybersecurity, and to connect these
                students with industry professionals.
              </p>
            </div>
          </section>
          <div className="w-2/3 mx-auto my-6  text-center">
            <p className="text-center text-4xl">Email us at:</p>
            <p className="text-center text-3xl md:text-5xl font-bold break-all">
              infosec.ucalgary@gmail.com
            </p>
          </div>
          <div className="w-2/3 mx-auto my-4">
            <p className="text-center text-4xl">Find us on Discord</p>
            <a href="https://discord.gg/dRTqKPatTv" target="_blank">
              <img className="mx-auto w-[40%]" src={DiscordLogo} />
            </a>
          </div>
          <div className="w-2/3 mx-auto my-4">
            <p className="text-center text-4xl">Subscribe on Youtube</p>
            <a
              href="https://www.youtube.com/channel/UCiDL68PDJUyX-CvoP6FHVcw"
              target="_blank"
            >
              <img className="mx-auto w-[40%]" src={YoutubeLogo} />
            </a>
          </div>
          <div className="w-2/3 mx-auto my-4">
            <p className="text-center text-4xl my-6">Check Out Our CTF</p>
            <a href="http://magpiectf.ca" target="_blank">
              <img
                className="mx-auto w-[40%] rounded-3xl"
                src={MagpieCTFLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
