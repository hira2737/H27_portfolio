import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaUniversity } from "react-icons/fa";

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

const Education = () => (
  <section id="education" className="py-16 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-heading text-center mb-3"
      >
        Education <span className="glow-text">Background</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto"
      >
        Academic foundation that supports my steady growth in software development.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* College - slides from left */}
        <motion.div
          variants={slideFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card-hover p-7"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
            <FaGraduationCap className="text-accent text-2xl" />
          </div>
          <h3 className="font-display font-bold text-lg mb-3">BSc Computer Science</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <FaUniversity className="text-accent/60" />
            <span>M.O.P. Vaishnav College for Women</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <FaCalendarAlt className="text-accent/60" />
            <span>2024 – Present</span>
          </div>
          <div className="space-y-1 text-sm text-foreground/60">
            <p>– CGPA: 9.3 (till Semester 3)</p>
            <p>– Year of Graduation: 2027</p>
          </div>
        </motion.div>

        {/* School - slides from right */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-card-hover p-7"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
            <FaSchool className="text-accent text-2xl" />
          </div>
          <h3 className="font-display font-bold text-lg mb-3">Higher Secondary Education</h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <FaUniversity className="text-accent/60" />
            <span>St. Ursula's Anglo Indian Hr. Sec. School</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <FaCalendarAlt className="text-accent/60" />
            <span>2022 – 2024</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
