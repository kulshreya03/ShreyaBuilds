"use client";
import React from 'react';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';
import { motion } from "motion/react";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} id='projects'>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <motion.div
            key={id}
            whileHover={{
              scale: [null, 1, 1.1],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
