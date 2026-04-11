import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaReact,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiRender,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { HiCog, HiDatabase } from "react-icons/hi";
import type { IconType } from "react-icons";

// ========== Types ==========
interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: SkillItem[];
}

interface SkillPillProps {
  skill: SkillItem;
  index: number;
}

interface CategoryCardProps {
  category: SkillCategory;
  categoryIndex: number;
}

// ========== Reusable SkillPill Component ==========
const SkillPill = ({ skill, index }: SkillPillProps) => {
  const Icon = skill.icon;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, y: -2 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: index * 0.05,
        duration: 0.3,
        ease: "easeOut",
      }}
      className="skill-pill inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/40 bg-card/50 text-foreground/80 text-sm font-medium backdrop-blur-sm hover:border-accent/60 hover:bg-accent/5 transition-all duration-200 will-change-transform"
    >
      <Icon className={`w-4 h-4 flex-shrink-0 ${skill.color}`} />
      <span>{skill.name}</span>
    </motion.span>
  );
};

// ========== Reusable CategoryCard Component ==========
const CategoryCard = ({ category, categoryIndex }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: categoryIndex * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass-card group flex flex-col gap-4 p-6 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-lg hover:shadow-xl hover:border-accent/20 transition-all duration-300 will-change-transform"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-md group-hover:shadow-lg group-hover:from-accent/30 group-hover:to-accent/10 transition-all duration-300"
        >
          {category.icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <SkillPill key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

// ========== Data ==========
const categories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <FaCode className="text-xl" />,
    skills: [
      { name: "Python", icon: FaPython, color: "text-[#306998]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
    ],
  },
  {
    title: "Frameworks",
    icon: <HiCog className="text-xl" />,
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
    icon: <HiDatabase className="text-xl" />,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    title: "Tools",
    icon: <HiCog className="text-xl" />,
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      { name: "Netlify", icon: SiNetlify, color: "text-accent" },
      { name: "Render", icon: SiRender, color: "text-foreground" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
    ],
  },
];

// ========== Main Skills Component ==========
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      {/* Background Gradient Effect (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4 text-3xl sm:text-4xl md:text-5xl">
            My <span className="glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            A comprehensive overview of my technical expertise spanning languages, frameworks,
            databases, and development tools with hands-on experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              categoryIndex={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

