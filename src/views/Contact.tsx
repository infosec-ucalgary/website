import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [from_name, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const templateParams = {
      from_name: from_name,
      message: message,
    };

    emailjs
      .send("service_v6erqod", "template_f5yrhuc", templateParams, "aHmZezj9BTHGH1L4I")
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Failed to send message. Please try again."));
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-full max-w-4xl bg-like-lavendar text-white bg-opacity-30 rounded-lg p-8 flex flex-col md:flex-row">
        <div className="flex-grow mb-6 md:mb-0 md:mr-6">
          <h2 className="text-2xl font-bold mb-6">Email Us</h2>
          <form onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2" htmlFor="email">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 black focus:ring-blue-500"
                placeholder="Enter your email"
                value={from_name}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block  mb-2" htmlFor="message">
                Message*
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y overflow-auto"
                placeholder="Enter your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

          <button
              type="submit"
              className={`w-full py-2 rounded-md transition duration-300 ${
                from_name && message
                  ? "bg-electric-plum text-white hover:bg-purple-900"
                  : "bg-gray-800 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!from_name || !message}
            >
              Send Us A Message
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
