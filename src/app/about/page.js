"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="max-w-5xl mx-auto py-24 px-6 text-primary"
      style={{
        background: "linear-gradient(to bottom, #fffef5 0%, #ffffff 100%)",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* HERO IMAGE */}
      <motion.div
        className="relative mb-16 overflow-hidden rounded-2xl shadow-md"
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
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-serif mb-10 border-l-4 border-secondary pl-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Mr. Walter Simuyu
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Mr. Walter Simuyu is a distinguished teacher of English and Literature,
          celebrated for over a decade of shaping minds through the power of
          words. His teaching transcends grammar and interpretation — it’s an
          invitation to think deeply, feel profoundly, and express with purpose.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Known for his eloquence and storytelling, he transforms literature into
          a living dialogue — one that connects emotion, culture, and intellect.
          His students describe his lessons as journeys through imagination and
          the human experience.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-8 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Beyond the classroom, Mr. Simuyu is a devoted reader, writer, and
          mentor. He believes that language is not merely a subject, but a bridge
          — a way to understand both ourselves and others. His philosophy is
          simple yet profound:
          <span className="block italic mt-4 text-secondary text-lg font-medium">
            “Every great reader becomes, in time, a better thinker and a kinder
            speaker.”
          </span>
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mb-12 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Through this platform, he shares reflections, literary insights, and
          thought pieces that celebrate the beauty of words and the art of human
          connection.
        </motion.p>
      </div>

      {/* TRIPS & SPORTS */}
      <motion.div
        className="mt-20 bg-gradient-to-r from-secondary/10 to-transparent p-8 rounded-2xl shadow-sm max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-serif mb-6 border-l-4 border-secondary pl-3">
          Trips & Sports
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Away from academics, Walter loves exploring new destinations and
          connecting with the world beyond the classroom. Whether it’s a serene
          countryside escape or a cultural adventure, he finds inspiration in
          travel — in observing people, nature, and stories that shape life.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          He also enjoys sports as a source of energy and balance. From football
          to long-distance running and hiking, Walter sees movement as both
          meditation and motivation — a way to stay focused, disciplined, and
          grounded.
        </p>
      </motion.div>

      {/* SIGNATURE */}
      <motion.div
        className="text-right italic text-secondary font-medium text-lg mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        — Mr. Walter Simuyu
      </motion.div>
    </section>
  );
}
