import QR from "../images/discordQR.png"
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowQR(true), 400);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-full max-w-4xl bg-like-lavendar text-white bg-opacity-30 rounded-lg p-8 flex flex-col md:flex-row">
        <div className="flex-grow mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-6">Email Us</h2>
          <form action="#" className="space-y-6">
            <div>
              <label className="block  mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block  mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y overflow-auto"
                placeholder="Enter your message"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-electric-plum text-white py-2 rounded-md hover:bg-purple-900 transition duration-300"
            >
              Send Us A Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
