import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log("Form sumbitted:", formData);
      await emailjs.send(
        "service_gncq3aw",
        "template_8htvobw",
        {
          from_name: formData.name,
          to_name: "Alpin",
          from_email: formData.email,
          to_email: "alpindevs@gmail.com",
          message: formData.message,
        },
        "SCzv-7FncDpSafIo6"
      );
      setIsLoading(false);
      SetFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been deliver!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Opss, Something went wrong!");
    }
  };
  //   Email Service ID for Email.js (service_gncq3aw)
  //   template_8htvobw
  return (
    <section
      className="relative flex items-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Chat</h2>
          <p className="font-normal text-neutral-400">
            My inbox is always open, if you have a project to work on together
            or just to say hello. Feel free to contact me and I will get back to
            you.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSumbit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="field-input field-input-focus"
              placeholder="example@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              className="field-input field-input-focus"
              placeholder="Type something here ...."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="subnit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending ..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
