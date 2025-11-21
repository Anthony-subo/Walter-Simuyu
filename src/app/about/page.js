"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
        max-w-5xl mx-auto py-20 px-6 lg:px-10
        text-primary space-y-12
        bg-gradient-to-b from-[#fffef5] to-white
        rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.05)]
      "
    >
      {/* HERO IMAGE */}
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-md"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
          alt="Mr. Walter Simuyu teaching literature"
          className="w-full h-64 sm:h-72 md:h-80 object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* ABOUT CARD */}
      <motion.div
        className="
          bg-white/70 backdrop-blur-md shadow-sm rounded-2xl p-6 sm:p-8 
          space-y-6 border border-gray-100
        "
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl sm:text-4xl font-serif border-l-4 border-secondary pl-4">
          About Mr. Walter Simuyu
        </h2>

        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Mr. Walter Simuyu is a distinguished teacher of English and Literature,
          celebrated for over a decade of shaping young minds through the power
          of words. His teaching transcends grammar and interpretation — it’s an
          invitation to think deeply, feel profoundly, and express with purpose.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Known for his eloquence and storytelling, he transforms literature into
          a living dialogue — one that connects emotion, culture, and intellect.
          His students describe his lessons as journeys through imagination and
          human experience.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Beyond the classroom, Mr. Simuyu is a devoted reader, writer, and mentor.
          He believes that language is not merely a subject, but a bridge — a way
          to understand both ourselves and others.
          <span className="block italic mt-3 text-secondary text-lg font-medium">
            “Every great reader becomes, in time, a better thinker and a kinder
            speaker.”
          </span>
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          Through this platform, he shares reflections, literary insights, and
          thought pieces that celebrate the beauty of words and the art of human
          connection.
        </p>
      </motion.div>

      {/* TRIPS & SPORTS CARD */}
      <motion.div
        className="
          bg-gradient-to-r from-secondary/10 via-white to-transparent 
          p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl sm:text-3xl font-serif mb-6 border-l-4 border-secondary pl-3">
          Trips & Sports
        </h3>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          Outside academics, Walter loves exploring new places and connecting
          with nature. He often leads learning adventures where students
          experience literature and history coming alive through cultural visits
          and discovery.
        </p>

        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          He is equally passionate about sports, often mentoring learners on
          teamwork and discipline both on and off the field. His favorite
          activities include football, hiking, and cross-country runs — all of
          which he believes nurture resilience and a sense of community.
        </p>
      </motion.div>

      {/* SIGNATURE */}
      <motion.div
        className="text-right italic text-secondary font-medium text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        — Mr. Walter Simuyu
      </motion.div>
    </section>
  );
}
