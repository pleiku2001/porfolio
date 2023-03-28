import React, { useRef } from "react";
import Map from "../components/Map";
import "./styles.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!e.target[0].value || !e.target[1].value || !e.target[2].value) {
      toast.error("Please fill all information!");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            toast.success("Thank you for sending!");
          },
          (error) => {
            toast.error(error.text);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div
      className="h-[100vh]  mt-10 flex lg:flex-row justify-center items-center flex-col gap-10 relative"
      id="contact"
    >
      <form
        className="flex-1  h-full justify-center flex items-center w-full z-10"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="h-[80vh] w-[60vh]  rounded-2xl flex flex-col justify-start items-start gap-10 p-10">
          <div>
            <p className="uppercase text-gray-400 text-xl mb-5">Get In Touch</p>
            <p className="text-6xl font-extrabold">Contact.</p>
          </div>
          <div className="flex flex-col w-full gap-5">
            <label htmlFor="" className="font-medium">
              Your Name
            </label>
            <input
              type="text"
              className="rounded-lg h-[50px] pl-5 text-gray-300 bg-transparent outline-none border-[1px] border-white"
              placeholder="What's your name?"
              name="user_name"
            />
          </div>
          <div className="flex flex-col w-full gap-5">
            <label htmlFor="" className="font-medium">
              Your email
            </label>
            <input
              type="email"
              className="rounded-lg h-[50px] pl-5 text-gray-300 border-[1px] border-white  outline-none bg-transparent"
              placeholder="What's your email?"
              name="user_email"
            />
          </div>

          <div className="flex flex-col w-full gap-5">
            <label htmlFor="">Your Message</label>
            <textarea
              type="text"
              className="rounded-lg h-[150px] p-5 text-gray-300 border-[1px] border-white  outline-none bg-transparent"
              placeholder="Say something ...."
              name="user_message"
            />
          </div>
          <input
            type="submit"
            className="m-auto border-[1px] border-white px-5 py-3 rounded-lg hover:border-gray-400 hover:cursor-pointer"
          />
        </div>
      </form>
      <div className="flex-1  lg:w-full  mt-[30px] lg:relative absolute opacity-[0.5] z-0 w-full">
     
        <Map />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default Contact;
