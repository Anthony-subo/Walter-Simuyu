"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="max-w-5xl mx-auto py-20 px-6 text-primary"
      style={{
        background: "linear-gradient(to bottom, #fffef5 0%, #ffffff 100%)",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* HERO IMAGE */}
      <motion.div
        className="relative mb-12 overflow-hidden rounded-2xl shadow-md"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
          alt="Mr. Walter Simuyu teaching literature"
          className="w-full object-cover h-80 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* ABOUT CONTENT */}
      <motion.h2
        className="text-4xl font-serif mb-8 border-l-4 border-secondary pl-4"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Mr. Walter Simuyu
      </motion.h2>

      <motion.p
        className="text-lg leading-relaxed mb-6 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Mr. Walter Simuyu is a distinguished teacher of English and Literature,
        celebrated for over a decade of shaping young minds through the power of
        words. His teaching transcends grammar and interpretation — it’s an
        invitation to think deeply, feel profoundly, and express with purpose.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed mb-6 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Known for his eloquence and storytelling, he transforms literature into
        a living dialogue — one that connects emotion, culture, and intellect.
        His students describe his lessons as journeys through imagination and
        human experience.
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed mb-6 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Beyond the classroom, Mr. Simuyu is a devoted reader, writer, and
        mentor. He believes that language is not merely a subject, but a bridge
        — a way to understand both ourselves and others. His philosophy is
        simple yet profound:
        <span className="block italic mt-3 text-secondary text-lg font-medium">
          “Every great reader becomes, in time, a better thinker and a kinder
          speaker.”
        </span>
      </motion.p>

      <motion.p
        className="text-lg leading-relaxed mb-10 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Through this platform, he shares reflections, literary insights, and
        thought pieces that celebrate the beauty of words and the art of human
        connection.
      </motion.p>

      {/* SIGNATURE */}
      <motion.div
        className="text-right italic text-secondary font-medium text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        — Mr. Walter Simuyu
      </motion.div>
    </section>
  );
}
