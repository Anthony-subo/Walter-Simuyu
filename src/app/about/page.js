"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="max-w-5xl mx-auto py-20 px-6 text-primary"
      style={{
        background: "linear-gradient(to bottom, #fffbee 0%, #ffffff 100%)",
        borderRadius: "18px",
      }}
    >
      {/* HERO IMAGE */}
      <motion.div
        className="mb-10 overflow-hidden rounded-2xl shadow-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
          alt="Mr. Walter Simuyu teaching literature"
          width={1200}
          height={400}
          className="w-full h-80 object-cover"
          priority
        />
      </motion.div>

      {/* ABOUT CONTENT */}
      <motion.h2
        className="text-4xl md:text-5xl font-serif mb-8 border-l-4 border-secondary pl-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Mr. Walter Simuyu
      </motion.h2>

      <AboutParagraph delay={0.1}>
        Mr. Walter Simuyu is a distinguished teacher of English and Literature,
        celebrated for over a decade of inspiring minds through the power of
        words. His teaching goes beyond grammar and interpretation — it’s an
        invitation to think deeply, feel profoundly, and speak with conviction.
      </AboutParagraph>

      <AboutParagraph delay={0.2}>
        Known for his eloquence and engaging storytelling, he transforms
        literature from mere text into living conversation. His students often
        describe his lessons as journeys — through language, culture, and the
        intricate emotions that shape the human experience.
      </AboutParagraph>

      <AboutParagraph delay={0.3}>
        Beyond the classroom, Mr. Simuyu is an avid reader, writer, and mentor
        who believes that language is not just a subject to be studied but a
        bridge to understanding ourselves and others. His philosophy is simple
        yet profound:
        <span className="block italic mt-3 text-secondary">
          “Every great reader becomes, in time, a better thinker and a kinder
          speaker.”
        </span>
      </AboutParagraph>

      <AboutParagraph delay={0.4}>
        Through this platform, he shares reflections, literary insights, and
        thought pieces that celebrate the art of expression and the timeless
        beauty of words.
      </AboutParagraph>

      {/* SIGNATURE */}
      <motion.div
        className="text-right italic text-secondary font-medium mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        — Mr. Walter Simuyu
      </motion.div>
    </section>
  );
}

/* ====== REUSABLE PARAGRAPH COMPONENT ====== */
function AboutParagraph({ children, delay }) {
  return (
    <motion.p
      className="text-lg leading-relaxed mb-6 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.p>
  );
}
