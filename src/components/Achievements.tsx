import { motion } from "framer-motion";
import { FaTrophy, FaLanguage } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Achievements = () => (
  <section id="achievements" className="min-h-[78vh] py-24 sm:py-28 lg:py-32 px-4 flex items-center">
    <div className="container mx-auto max-w-5xl w-full">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-heading text-center mb-4 text-3xl sm:text-4xl lg:text-5xl"
      >
        Achievements & <span className="glow-text">Languages</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
      >
        Recognition from competitions and communication strengths that support collaborative work.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card-hover p-8 rounded-[32px]"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
            <FaTrophy className="text-accent text-2xl" />
          </div>
          <h3 className="font-display font-bold text-2xl mb-4">Achievements</h3>
          <ul className="space-y-3">
            {[
              "Achieved top rankings in multiple inter-collegiate coding and debugging competitions.",
              "Demonstrated strong problem-solving and programming skills in Python-focused technical events.",
              "Recognized for performance in cybersecurity and competitive programming challenges across Chennai colleges.",
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 text-base leading-relaxed">
                <span className="mt-0.5 text-accent text-xs shrink-0">•</span>
                {a}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-card-hover p-8 rounded-[32px]"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
            <FaLanguage className="text-accent text-2xl" />
          </div>
          <h3 className="font-display font-bold text-2xl mb-4">Communication</h3>
          <ul className="space-y-3">
            {[
              "English – Professional Proficiency",
              "Tamil – Native Proficiency",
            ].map((lang, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80 text-base leading-relaxed">
                <span className="mt-0.5 text-accent text-xs shrink-0">•</span>
                {lang}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Achievements;
