import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6j0agtn",
        "template_mwfdsdt",
        form.current,
        "vl9X09t71MQ7k0aOL"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-20" id="contact">
      <div className="text-center text-6xl font-Poppins px-2 py-1 font-medium text-purple mb-10">
        Contact
      </div>

      <div className="flex flex-col gap-3 justify-center text-center items-ceter text-grey">
        <form
          action=""
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-8 font-Poppins py-5"
        >
          <input
            type="text"
            placeholder="Name"
            className="outline-none p-3 text-xl rounded-lg placegholder-grey bg-transparent border-2 border-grey  focus:border-purple w-4/6 md:w-2/5 text-white"
            name="from_name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="outline-none p-3 text-xl rounded-lg placegholder-grey bg-transparent border-2 border-grey  focus:border-purple w-4/6 md:w-2/5 text-white"
            name="from_email"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="outline-none  p-3 text-xl rounded-lg placegholder-grey bg-transparent border-2 border-grey  focus:border-purple w-4/6 md:w-2/5 text-white"
            name="subject"
            required
          />
          <textarea
            placeholder="Message"
            className="outline-none p-3 text-xl rounded-lg placegholder-grey bg-transparent border-2 border-grey  focus:border-purple w-4/6 md:w-2/5 text-white"
            name="message"
            required
          />
          <input
            type="submit"
            value="Send message"
            className="border-2 border-purple px-4 py-3 text-xl text-white rounded-lg cursor-pointer bg-purple"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
