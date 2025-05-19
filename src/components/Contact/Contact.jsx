import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:myemail@email.com">kulkarnishreya04@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/linkedinIcon.png" alt="Linkedin Icon" />
          <a href="https://www.linkedin.com/in/shreya-kulkarni18">linkedin.com/shreya-kulkarni18</a>
        </li>
        <li className={styles.link}>
            <img src="assets/contact/githubIcon.png" alt="Github Icon" />
          <a href="https://github.com/kulshreya03">github.com/kulshreya03</a>
        </li>
      </ul>
    </footer>
  )
}
