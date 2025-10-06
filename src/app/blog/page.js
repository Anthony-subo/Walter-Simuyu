"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,250,0.96), rgba(255,255,250,0.96))",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        borderRadius: "22px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        margin: "60px auto",
        padding: "60px 24px",
        maxWidth: "1100px",
        fontFamily: "'Georgia', serif",
        color: "#2a1e10",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* HEADER */}
      <h2
        className="fade-in"
        style={{
          fontSize: "2.8rem",
          borderLeft: "6px solid #b87a48",
          paddingLeft: "14px",
          marginBottom: "30px",
          fontWeight: "600",
          color: "#2b1d0e",
          textShadow: "1px 1px 0 #d4c9b4",
        }}
      >
        About Mr. Walter Simuyu
      </h2>

      {/* PARAGRAPHS */}
      <p className="fade-in" style={pStyle}>
        Mr. Walter Simuyu is a distinguished teacher of English and Literature,
        celebrated for over a decade of inspiring minds through the power of
        words. His teaching goes beyond grammar and interpretation — it’s an
        invitation to think deeply, feel profoundly, and speak with conviction.
      </p>

      <p className="fade-in" style={pStyle}>
        Known for his eloquence and engaging storytelling, he transforms
        literature from mere text into living conversation. His students often
        describe his lessons as journeys — through language, culture, and the
        intricate emotions that shape the human experience.
      </p>

      <p className="fade-in" style={pStyle}>
        Beyond the classroom, Mr. Simuyu is an avid reader, writer, and mentor
        who believes that language is not just a subject to be studied but a
        bridge to understanding ourselves and others. His philosophy is simple
        yet profound:
        <span
          style={{
            display: "block",
            marginTop: "15px",
            color: "#b87a48",
            fontStyle: "italic",
          }}
        >
          “Every great reader becomes, in time, a better thinker and a kinder
          speaker.”
        </span>
      </p>

      <p className="fade-in" style={pStyle}>
        Through this platform, he shares reflections, literary insights, and
        thought pieces that celebrate the art of expression and the timeless
        beauty of words.
      </p>

      {/* MISSION SECTION */}
      <div
        className="fade-in"
        style={{
          background: "rgba(250, 247, 240, 0.9)",
          borderRadius: "18px",
          padding: "40px 30px",
          marginTop: "50px",
          border: "1px solid #d3c2a2",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "14px",
            color: "#3a2d1b",
            fontWeight: "600",
          }}
        >
          His Mission
        </h3>
        <p style={pStyle}>
          To ignite a lifelong love for language and literature in every learner
          — helping them find not only the meaning within words, but the words
          within themselves. Mr. Simuyu believes that when people learn to
          express their truth clearly and compassionately, they transform both
          their own lives and the world around them.
        </p>
      </div>

      {/* NEW SECTION: TRIPS & SPORTS */}
      <div
        className="fade-in"
        style={{
          marginTop: "50px",
          background: "rgba(255, 250, 240, 0.95)",
          borderRadius: "18px",
          padding: "40px 30px",
          border: "1px solid #e1d3b5",
          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{
            fontSize: "1.8rem",
            marginBottom: "14px",
            color: "#3a2d1b",
            fontWeight: "600",
          }}
        >
          Trips & Sports
        </h3>
        <p style={pStyle}>
          Outside the classroom, Mr. Simuyu finds great joy in organizing school
          trips and cultural excursions, where students can connect what they
          learn in books to the real world. These experiences spark curiosity,
          teamwork, and appreciation for Kenya’s rich heritage.
        </p>
        <p style={pStyle}>
          A passionate sports enthusiast, he actively encourages learners to
          take part in games and physical fitness. Whether it’s football,
          athletics, or hiking, Mr. Simuyu believes that sports build character,
          discipline, and unity — values just as important as academic success.
        </p>

        {/* Optional illustrative images */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div style={{ width: "200px", height: "130px", position: "relative" }}>
            <Image
              src="/images/trip.jpg"
              alt="Educational Trip"
              fill
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
          </div>
          <div style={{ width: "200px", height: "130px", position: "relative" }}>
            <Image
              src="/images/sports.jpg"
              alt="Sports Day"
              fill
              style={{ borderRadius: "12px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* PORTRAIT SECTION */}
      <div
        className="fade-in"
        style={{
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "160px", height: "160px", position: "relative" }}>
          <Image
            src="/images/portrait.jpg"
            alt="Mr. Walter Simuyu portrait"
            fill
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              transition: "all 0.4s ease",
            }}
            className="portrait-img"
          />
        </div>
        <div>
          <p
            style={{
              fontStyle: "italic",
              color: "#b87a48",
              fontSize: "1.2rem",
            }}
          >
            “Teaching is not the filling of a vessel, but the lighting of a
            flame.”
          </p>
          <p
            style={{
              marginTop: "10px",
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.3rem",
              color: "#2a1e10",
            }}
          >
            — Mr. Walter Simuyu
          </p>
        </div>
      </div>

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1.2s ease-out, transform 1.2s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .portrait-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

const pStyle = {
  fontSize: "1.1rem",
  lineHeight: "1.8",
  marginBottom: "24px",
  color: "#3a2d1b",
  textAlign: "justify",
};
