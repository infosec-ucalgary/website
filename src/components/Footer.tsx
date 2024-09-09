import { FaDiscord,FaInstagram, FaYoutube} from 'react-icons/fa';

function Footer() {
    return (
        <div className="mt-16">
            <div className="pb-6 w-full text-center inline-block align-middle text-lavendar">
        <span>
          We are a group of students from the University of Calgary who are
          dedicated to learning cyber security.
          <br /> &copy; 2021 - Present
        </span>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="https://discord.com/invite/dRTqKPatTv" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-2xl text-lavendar hover:text-white" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCiDL68PDJUyX-CvoP6FHVcw" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl text-lavendar hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/cybersecucalgary/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl text-lavendar hover:text-white" />
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Footer;