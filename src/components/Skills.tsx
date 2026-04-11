import { motion } from "framer-motion";
import {
  FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaBootstrap,
  FaGitAlt, FaReact, FaCode,
} from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiMysql, SiNetlify, SiRender, SiTailwindcss } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { HiCog, HiDatabase } from "react-icons/hi";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

const PythonLogo = () => (
  <img
    src="/python-logo.svg"
    alt="Python logo"
    className="python-logo-img"
    aria-hidden="true"
  />
);

const categories = [
  {
    title: "Languages",
    icon: <FaCode className="text-accent text-xl" />,
    skills: [
      { name: "Python", icon: FaPython, color: "python-logo-color" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <HiCog className="text-accent text-xl" />,
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
  {
    title: "Databases",
    icon: <HiDatabase className="text-accent text-xl" />,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <HiCog className="text-accent text-xl" />,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Netlify", icon: SiNetlify, color: "text-accent" },
      { name: "Render", icon: SiRender, color: "text-foreground" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-4"
      >
        My <span className="glow-text">Skills</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-12"
      >
        Skills grouped by category for a clearer view of my current toolkit.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="glass-card skills-card p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                {cat.icon}
              </div>
              <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((s: Skill) => {
                const Icon = s.icon;
                return (
                  <span key={s.name} className="skill-pill">
                    {s.name === "Python" ? (
                      <PythonLogo />
                    ) : (
                      <Icon className={`skill-icon ${s.color.startsWith("text-") ? s.color : ""}`} />
                    )}
                    <span>{s.name}</span>
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
