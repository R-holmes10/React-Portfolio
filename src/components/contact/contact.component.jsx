import React from "react";
import emailjs from "@emailjs/browser";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";
import gith from "../../assets/gith.png";
import Swal from "sweetalert2";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zt81w1v", //service id
        "template_blwp2st", //template id
        e.target,
        "8Gd4vAOKmVURboI9b" //user id
      )

      .then(
        (result) => {
          Swal.fire(
            "Thankyou!",
            "I will  reply as soon as possible",
            "success"
          );
        },
        (error) => {
          Swal.fire("Ops!", "Failed to send. Try Again", "error");
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div id="contact">
        {/* contact form */}
        <div className="gridlayout1 start">
          <div>
            <h2>Contact</h2>
            <p>
              Drop a message, let’s connect, will reach out as soon as possible.
            </p>
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="grid2">
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  id="name"
                  type="text"
                  name="from_name"
                  placeholder="Please enter your full name"
                  autoComplete="off"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  id="email"
                  type="email"
                  name="user_email"
                  placeholder="Please enter your email address"
                  autoComplete="off"
                />
              </div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea
                style={{ height: "12rem" }}
                id="message"
                name="message"
                placeholder="Please enter your message"
                autoComplete="off"
              />
              <button 
            
              className="sendbutton" 
              style={{padding:"0.5rem 2rem",margin:"1rem",fontWeight:"bold"}}
              type="submit" value="Send">
                Send 
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* social media */}
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          padding: "10px",
          flexDirection: "row",
        }}
      >
        <div style={{ padding: "2rem" }}>
          <div 
          className="logoeffects"
          >
            <a href="https://www.linkedin.com/in/ritu-verma-52a105228/">
              <img 
              src={linkedin} style={{ height: "2.8rem"}} alt=" " />
            </a>
          </div>
        </div>
        <div style={{ padding: "2rem" }}>
          <div 
          className="logoeffects"
          >
            <a href="https://github.com/R-holmes10">
              <img src={gith} style={{ paddingBottom:"10rem",height: "2.8rem" }} alt="" />
            </a>
          </div>
        </div>
        <div style={{ padding: "2rem" }}>
          <div 
          className="logoeffects"
          >
            <a href="https://www.facebook.com/ ">
              <img src={fb} style={{ height: "3rem" }} alt=" " />
            </a>
          </div>
        </div>
        <div style={{ padding: "2rem" }}>
          <div 
          className="logoeffects"
          >
            <a href="https://www.instagram.com/ ">
              <img src={insta} style={{ height: "2.8rem" }} alt=" " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
