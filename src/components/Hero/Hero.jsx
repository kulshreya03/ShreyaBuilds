"use client"; //“This component should be rendered on the client-side, not the server.”
import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import heroImage from '/assets/hero/heroImage.jpg'
import { motion } from 'motion/react';

export const Hero = () => {
  return <section className={styles.container}> 
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreya.</h1>
        <p className={styles.description}>I am a passionate Computer Engineering Student, specializing in DevOps along with Full-Stack Development. I love solving problems, building efficient solutions, and exploring cutting-edge technologies.</p>
        <motion.a
            href="mailto:kulkarnishreya04@gmail.com"
            className={styles.contactBtn}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            Contact Me
        </motion.a>
        <motion.a
        href='https://drive.google.com/file/d/1HmPEKSbAwvdg-JfsN5QNwvSUMHkjAEOM/view?usp=sharing'
        target='_blank'
        rel="noopener noreferrer"
        className={styles.contactBtn}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        >
          Resume
        </motion.a>
    </div>
    <img className={styles.heroImg} src={heroImage} alt='Hero Image of me'/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  
};
