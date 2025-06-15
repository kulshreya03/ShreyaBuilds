import styles from './App.module.css'
import {Experience} from './components/Experience/Experience'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { motion,useScroll } from 'motion/react'

function App() {

  const { scrollYProgress } = useScroll() 

  return (
    <>
  <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
    

    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#C70039",
                }}
    />

    </>
    
  )
};

export default App
