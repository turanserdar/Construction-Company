import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="general-information">
        

        <h1>Lets Talk To Build Your Projects</h1>

        <h3>
          Thanks for your interest in FourBrothers. Whether you are looking to start
          a project, get support, or just have a general question, we want to
          hear from you.<br/> Drop us a line or call us and we will get back to you.
        </h3>
       

        <div className="services">
          <h1>Services</h1>
        </div>

        <div className="services-info">
          <div>
            <h3>Kitchen Renovation</h3>
          </div>
          <div>
            <h3>Home Renovation</h3>
          </div>
          <div>
            <h3>Bathroom Renovation</h3>
          </div>
          <div>
            <h3>Kitchen Visualizer</h3>
          </div>
          <div className="map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92198.6177281919!2d-79.60990049912843!3d43.768565800648695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fd83c715d35%3A0x5f9438bcf23a2592!2sNorth%20York%2C%20Ontario%20M3N%201T8!5e0!3m2!1str!2sca!4v1712110590394!5m2!1str!2sca"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="footer">
          <h2 className="mt-2">» Get In Touch</h2>
        <div className="contact">
          <div className="contact-info-1">
            <PlaceIcon /> <h3>North York Ontario, M3N1T8</h3>
          </div>

          <div className="contact-info-2">
            <PhoneIcon /> <h3>4168394381</h3>
          </div></div>
        
        </div>
      </div>
    </div>
  );
};
