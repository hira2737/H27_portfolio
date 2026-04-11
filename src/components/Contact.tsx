import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-4"
        >
          Get In <span className="glow-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12"
        >
          I'm currently looking for new opportunities. My inbox is always open!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-gradient p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-xl mb-6 text-foreground">Contact Details</h3>
              <div className="space-y-4">
                {[
                  { icon: <FaMapMarkerAlt />, label: "Chennai, India" },
                  { icon: <FaEnvelope />, label: "hira270307@gmail.com" },
                  { icon: <FaPhone />, label: "+91 8825420606" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-accent text-lg">{item.icon}</span>
                    <span className="text-foreground/70">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://github.com/hira2737" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:text-accent transition-colors duration-300">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/hira2737/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass-card hover:text-accent transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-display font-bold text-xl mb-2">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-sm text-foreground"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-sm text-foreground"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all duration-300 text-sm resize-none text-foreground"
            />
            <button type="submit" className="btn-primary-glow w-full py-4 flex items-center justify-center gap-2 text-base">
              {sent ? "Message Sent! ✓" : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
