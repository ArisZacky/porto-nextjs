"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  async function sendMessage(email: string, content: string) {
    const resp = await fetch(
      `https://api.telegram.org/bot6440689546:AAF084Alpd1E1spytcEtNWBywrmQdPlp3pE/sendMessage?chat_id=1183847149&text=Email From:${email} Message:${content}`
    );
    if (resp.ok) {
      Toast.fire({
        icon: "success",
        title: "Thanks for connecting with Zacky 😉",
      });
      setInputEmail("");
      setInputContent("");
    } else {
      Toast.fire({
        icon: "error",
        title: "Failed to connecting with Zacky :(",
      });
    }
  }
  return (
    <>
      <div className={"flex flex-col"}>
        <div className="pl-4">
          <h1 className={"text-4xl text-gray-800"}>Connect with Zacky</h1>
          <div className="h-fit py-5 flex flex-col  w-[75%] ">
            <form action="">
              <div className="nes-field ms-7 mt-4">
                <label htmlFor="email_field">Email address</label>
                <input
                  id="email_field"
                  type="email"
                  className="nes-input"
                  placeholder="your.name@company.com"
                  required
                  value={inputEmail}
                  onChange={(e) => {
                    setInputEmail(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="textarea_field ms-7 mt-4">
                <label htmlFor="textarea_field">Your Message</label>
                <textarea
                  id="textarea_field"
                  className="nes-textarea"
                  value={inputContent}
                  required
                  onChange={(e) => {
                    setInputContent(e.currentTarget.value);
                  }}
                ></textarea>
              </div>
              <div className="ms-7 mt-4">
                <button
                  type="submit"
                  className="nes-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    sendMessage(inputEmail, inputContent);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
