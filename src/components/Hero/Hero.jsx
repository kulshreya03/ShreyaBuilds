import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return <section className={styles.container}> 
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreya.</h1>
        <p className={styles.description}>I am a passionate computer engineering student, specializing in DevOps along with Full-Stack Development. I love solving problems, building efficient solutions, and exploring cutting-edge technologies.</p>
        <a className={styles.contactBtn} href="mailto:kulkarnishreya04@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg} src="assets/hero/heroImage.jpg" alt='Hero Image of me'/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  
};
