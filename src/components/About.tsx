import { useState } from "react";
import { motion } from "framer-motion";
import { FaCrosshairs } from "react-icons/fa";
import { HiHeart, HiUser } from "react-icons/hi";

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleEnter = (key: string) => setHoveredCard(key);
  const handleLeave = () => setHoveredCard(null);

  return (
    <section id="about" className="py-14 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading text-center mb-3"
        >
          About <span className="glow-text">Me</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          I am focused on learning by building practical projects and improving step by step.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={() => handleEnter("who")}
            onMouseLeave={handleLeave}
            className={`glass-card about-card who-card${hoveredCard === "who" ? " card-hovered" : ""}`}
          >
            <div className="card-icon mb-3">
              <HiUser className="text-accent text-xl" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">Who I Am</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Computer Science undergraduate with strong foundations in development and problem solving.
              I can adapt to new technologies and I am eager to apply my skills in a real-world
              environment while continuously learning. I am dedicated, responsible, and always ready
              to improve based on project requirements and industry standards.
            </p>
            <p className="text-foreground/70 leading-relaxed text-sm mt-3">
              I enjoy solving real-world problems, adapting quickly to new tools, and improving continuously through hands-on
              project work.
            </p>
          </motion.div>

          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-5"
          >
            <div
              className={`glass-card about-card${hoveredCard === "technical" ? " card-hovered" : ""}`}
              onMouseEnter={() => handleEnter("technical")}
              onMouseLeave={handleLeave}
            >
              <div className="card-icon card-icon-accent mb-3">
                <HiHeart className="text-accent text-xl" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Technical Focus</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Currently building a stronger foundation in Python, JavaScript, HTML, CSS, and Bootstrap
                while continuing to improve in React and Tailwind CSS.
              </p>
            </div>

            <div
              className={`glass-card about-card${hoveredCard === "goal" ? " card-hovered" : ""}`}
              onMouseEnter={() => handleEnter("goal")}
              onMouseLeave={handleLeave}
            >
              <div className="card-icon card-icon-accent mb-3">
                <FaCrosshairs className="text-accent text-xl" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">Current Goal</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                My current goal is to secure internships and gain hands-on experience so I can grow faster by learning through practical work, not just theory.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
