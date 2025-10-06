"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="max-w-5xl mx-auto py-20 px-6 text-primary space-y-12"
      style={{
        background: "linear-gradient(to bottom, #fffef5 0%, #ffffff 100%)",
        borderRadius: "20px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      {/* HERO IMAGE + TEXT OVERLAY ON SMALL SCREENS */}
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
          alt="Mr. Walter Simuyu teaching literature"
          className="w-full object-cover h-96 brightness-90"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Overlay text for small screens */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 text-white text-center sm:hidden">
          <h2 className="text-3xl font-serif font-semibold mb-2 drop-shadow-md">
            About Mr. Walter Simuyu
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto drop-shadow-sm">
            A passionate teacher of English and Literature who believes in the
            power of words to shape hearts, minds, and futures.
          </p>
        </div>
      </motion.div>

      {/* ABOUT CARD (Visible Below Image) */}
      <motion.div
        className="bg-white/70 backdrop-blur-md shadow-sm rounded-2xl p-8 space-y-6 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="hidden sm:block text-4xl font-serif border-l-4 border-secondary pl-4">
          About Mr. Walter Simuyu
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          Mr. Walter Simuyu is a distinguished teacher of English and
          Literature, celebrated for over a decade of shaping young minds
          through the power of words. His teaching transcends grammar and
          interpretation — it’s an invitation to think deeply, feel profoundly,
          and express with purpose.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Known for his eloquence and storytelling, he transforms literature
          into a living dialogue — one that connects emotion, culture, and
          intellect. His students describe his lessons as journeys through
          imagination and human experience.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Beyond the classroom, Mr. Simuyu is a devoted reader, writer, and
          mentor. He believes that language is not merely a subject, but a
          bridge — a way to understand both ourselves and others.
          <span className="block italic mt-3 text-secondary text-lg font-medium">
            “Every great reader becomes, in time, a better thinker and a kinder
            speaker.”
          </span>
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Through this platform, he shares reflections, literary insights, and
          thought pieces that celebrate the beauty of words and the art of human
          connection.
        </p>
      </motion.div>

      {/* TRIPS & SPORTS CONTAINER */}
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Soft flowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-white to-secondary/10"></div>

        <div className="relative p-8 sm:p-12 space-y-5">
          <h3 className="text-3xl font-serif mb-4 border-l-4 border-secondary pl-3">
            Trips & Sports
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            Outside academics, Walter loves exploring new places and connecting
            with nature. He often leads learning adventures where students
            experience literature and history coming alive through cultural
            visits and discovery.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            He is equally passionate about sports, often mentoring learners on
            teamwork and discipline both on and off the field. His favorite
            activities include football, hiking, and cross-country runs — all of
            which he believes nurture resilience and a sense of community.
          </p>

          {/* IMAGES IN FLOW CONTAINER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Travel and discovery"
                className="w-full h-60 object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Sports and teamwork"
                className="w-full h-60 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* SIGNATURE */}
      <motion.div
        className="text-right italic text-secondary font-medium text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        — Mr. Walter Simuyu
      </motion.div>
    </section>
  );
}
