import { FaDiscord, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-transparent text-lavendar py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">
                    We are a group of students from the University of Calgary dedicated to learning cyber security.
                </p>
                <p className="mb-4">
                    &copy; 2019 - Present UCalgary CyberSecurity Club. All rights reserved.
                </p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://discord.com/invite/dRTqKPatTv" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-2xl hover:text-white" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCiDL68PDJUyX-CvoP6FHVcw" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-2xl hover:text-white" />
                    </a>
                    <a href="https://www.instagram.com/cybersecucalgary/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-white" />
                    </a>
                    <a href="mailto:infosec.ucalgary@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="text-2xl hover:text-white" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;