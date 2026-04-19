import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";

const Projects = () => (
  <section id="projects" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-4"
      >
        Featured <span className="glow-text">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-12"
      >
        A selection of projects I have built and shipped.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-hover p-8"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-display text-2xl font-bold">SustainHire</h3>
            <FaGraduationCap className="text-accent text-3xl" />
          </div>
          <p className="text-foreground/70 leading-relaxed mb-5 text-sm">
            Built a student project platform connecting students with sustainability-focused
            internships, with emphasis on usability and practical implementation.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MongoDB", "Netlify", "Render"].map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
          <a
            href="https://sustainhiresoftware.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-glow flex items-center gap-2 text-sm !px-5 !py-2.5 w-fit"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-8 border border-dashed border-border/50"
        >
          <h3 className="font-display text-2xl font-bold mb-4">More Projects Coming Soon</h3>
          <p className="text-foreground/70 leading-relaxed mb-5 text-sm">
            Currently working on new and practical applications to showcase here. Stay tuned.
          </p>
          <p className="text-muted-foreground text-sm italic">In progress...</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Projects;
