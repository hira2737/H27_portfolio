import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

const certs = [
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1XtzOM83zRyOxO8GbngLdDXbh927f9Hou/view",
  },
  {
    title: "Programming, DSA using Python",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/14LB1GmoznsxJ8bFCY6ac-ocUvmavHgHO/view",
  },
 {
    title: "Programming in Java",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1LD5ZKuaKJ5orx7qtlzU4arlx44TJ1peT/view?usp=sharing",
  },
  {
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/950bf7e2d490",
  },
  {
    title: "Google Cloud Generative AI",
    issuer: "SSC NASSCOM",
    link: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/HIRA%2BNANDHANI%2BM_152838419.pdf.pdf",
  },
];

const Certifications = () => (
  <section id="certifications" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-4"
      >
        <span className="glow-text">Certifications</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
      >
        Verified credentials that reflect my ongoing learning in development and modern technologies.
      </motion.p>

      <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`glass-card-hover p-6 group h-full flex flex-col sm:col-span-1 md:col-span-2 ${
              i === 3 ? "md:col-start-2" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
              <FaCertificate className="text-accent" />
            </div>
            <h3 className="font-display font-bold text-base mb-1">{cert.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow flex items-center gap-2 text-sm !px-4 !py-2 w-fit mt-auto"
            >
              <FaExternalLinkAlt size={12} /> View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
