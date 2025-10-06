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
          "linear-gradient(rgba(255,255,248,0.97), rgba(255,255,250,0.97))",
        borderRadius: "22px",
        boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
        margin: "60px auto",
        padding: "70px 30px",
        maxWidth: "1100px",
        fontFamily: "'Georgia', serif",
        color: "#2a1e10",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
        />
      </div>

      {/* HEADER */}
      <h2
        className="fade-in"
        style={{
          fontSize: "2.8rem",
          borderLeft: "6px solid #b87a48",
          paddingLeft: "14px",
          marginBottom: "35px",
          fontWeight: "600",
          color: "#2b1d0e",
          textShadow: "1px 1px 0 #d9c9a6",
        }}
      >
        About Mr. Walter Simuyu
      </h2>

      {/* MAIN ABOUT CONTAINER */}
      <div
        className="fade-in"
        style={{
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          padding: "40px 30px",
          border: "1px solid #e7dec9",
          boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
        }}
      >
        <p style={pStyle}>
          Mr. Walter Simuyu is a distinguished teacher of English and Literature,
          celebrated for over a decade of inspiring minds through the power of
          words. His teaching goes beyond grammar and interpretation — it’s an
          invitation to think deeply, feel profoundly, and speak with conviction.
        </p>

        <p style={pStyle}>
          Known for his eloquence and engaging storytelling, he transforms
          literature from mere text into a living conversation. His sessions are
          not just lessons, but experiences — connecting language, culture, and
          emotion in a way that leaves a lasting impact.
        </p>

        <p style={pStyle}>
          Beyond the classroom, Walter is a reader, writer, and mentor who sees
          language as a bridge — one that connects people, ideas, and
          generations. His philosophy is simple yet profound:
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

        <p style={pStyle}>
          Through this platform, he shares reflections, insights, and thought
          pieces that celebrate the art of expression and the timeless beauty of
          words.
        </p>
      </div>

      {/* TRIPS & SPORTS SECTION */}
      <div
        className="fade-in"
        style={{
          marginTop: "60px",
          background: "rgba(255, 250, 240, 0.96)",
          borderRadius: "18px",
          padding: "45px 30px",
          border: "1px solid #e1d3b5",
          boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
        }}
      >
        <h3
          style={{
            fontSize: "1.9rem",
            marginBottom: "18px",
            color: "#3a2d1b",
            fontWeight: "600",
          }}
        >
          Trips & Sports
        </h3>
        <p style={pStyle}>
          Walter loves exploring new places and discovering Kenya’s natural and
          cultural beauty. Traveling offers him moments of reflection and fresh
          inspiration — each journey a chance to connect with new stories,
          landscapes, and perspectives.
        </p>
        <p style={pStyle}>
          He’s also passionate about sports and outdoor activity. Whether it’s
          football, hiking, or long-distance running, he finds joy in movement,
          seeing it as both meditation and motivation — a way to stay balanced,
          disciplined, and inspired.
        </p>

        {/* Images Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div style={{ width: "220px", height: "140px", position: "relative" }}>
            <Image
              src="/images/travel.jpg"
              alt="Travel Moments"
              fill
              style={{ borderRadius: "14px", objectFit: "cover" }}
            />
          </div>
          <div style={{ width: "220px", height: "140px", position: "relative" }}>
            <Image
              src="/images/sports.jpg"
              alt="Sports and Recreation"
              fill
              style={{ borderRadius: "14px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* PORTRAIT SECTION */}
      <div
        className="fade-in"
        style={{
          marginTop: "70px",
          background: "rgba(255,255,255,0.92)",
          borderRadius: "18px",
          padding: "40px 25px",
          border: "1px solid #e9dfc7",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
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
              marginBottom: "8px",
            }}
          >
            “Teaching is not the filling of a vessel, but the lighting of a
            flame.”
          </p>
          <p
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "1.3rem",
              color: "#2a1e10",
            }}
          >
            — Mr. Walter Simuyu
          </p>
        </div>
      </div>

      {/* ANIMATION STYLES */}
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
