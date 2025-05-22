import React from "react";

import styles from "./Contact.module.css";
import emailIcon from '/assets/contact/emailIcon.png'
import githubIcon from '/assets/contact/githubIcon.png'
import linkedinIcon from '/assets/contact/linkedinIcon.png'


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:kulkarnishreya04@gmail.com">kulkarnishreya04@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/shreya-kulkarni18">shreya-kulkarni18</a>
        </li>
        <li className={styles.link}>
            <img src={githubIcon} alt="Github Icon" />
          <a href="https://github.com/kulshreya03">kulshreya03</a>
        </li>
      </ul>
    </footer>
  )
}
