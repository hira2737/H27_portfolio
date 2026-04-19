import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="py-8 px-4 border-t border-border/30">
    <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-accent font-medium">Hira Nandhani M</span> &bull; Chennai, India.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: <FaGithub size={18} />, href: "https://github.com/hira2737" },
          { icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/hira2737/" },
          { icon: <FaEnvelope size={18} />, href: "mailto:hira270307@gmail.com" },
        ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
