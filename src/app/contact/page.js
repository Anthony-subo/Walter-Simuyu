"use client";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Simple fade-in effect on scroll
    const elements = document.querySelectorAll(".fade-up");
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
    <section className="contact-wrapper">
      {/* Floating decorative circles */}
      <div className="decor decor1"></div>
      <div className="decor decor2"></div>
      <div className="decor decor3"></div>

      <div className="contact-content fade-up">
        <h2>Let’s Connect</h2>

        <p>
          Whether you’re a student, fellow educator, or lifelong lover of literature,
          Mr. Walter Simuyu would be delighted to hear from you. Share your thoughts,
          invite collaboration, or simply start a conversation about the art and beauty
          of language.
        </p>

        <div className="buttons">
          <a href="mailto:wsimiyu200@gmail.com" className="email-btn">
            ✉️ Send Email
          </a>
          <a
            href="https://wa.me/254769209046"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 WhatsApp
          </a>
        </div>

        <div className="info-box fade-up">
          <h3>Office Hours</h3>
          <p>📚 Monday – Friday: 9:00 AM – 5:00 PM</p>
          <p>📖 Saturday: By Appointment</p>
          <p>📍 Nakuru, Kenya</p>
        </div>

        <p className="quote fade-up">
          “Words connect hearts — reach out, and let’s share ideas worth speaking.”
        </p>
      </div>

      <style jsx>{`
        .contact-wrapper {
          position: relative;
          min-height: 100vh;
          background: 
            linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          overflow: hidden;
          font-family: "Georgia", serif;
        }

        /* Floating background decor */
        .decor {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          z-index: 0;
          animation: float 10s infinite ease-in-out alternate;
        }
        .decor1 {
          width: 150px;
          height: 150px;
          background: #b87a48;
          top: 10%;
          left: 5%;
        }
        .decor2 {
          width: 200px;
          height: 200px;
          background: #4b6cb7;
          bottom: 10%;
          right: 8%;
        }
        .decor3 {
          width: 100px;
          height: 100px;
          background: #128c7e;
          bottom: 30%;
          left: 40%;
        }
        @keyframes float {
          to {
            transform: translateY(20px) translateX(10px);
          }
        }

        .contact-content {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          padding: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
          z-index: 2;
          transform: translateY(20px);
          opacity: 0;
          transition: all 1s ease;
        }

        .fade-up.visible {
          transform: translateY(0);
          opacity: 1;
        }

        h2 {
          font-size: 2.6rem;
          margin-bottom: 20px;
          color: #1a120b;
          border-bottom: 3px solid #b87a48;
          display: inline-block;
          padding-bottom: 8px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 24px;
          color: #3a2d1b;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        a {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        a:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .email-btn {
          background: linear-gradient(135deg, #4b6cb7, #182848);
        }

        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366, #128c7e);
        }

        .info-box {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          padding: 24px;
          margin: 20px 0;
          text-align: left;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .info-box h3 {
          font-size: 1.6rem;
          color: #2b1d0e;
          margin-bottom: 10px;
        }

        .quote {
          margin-top: 30px;
          font-style: italic;
          color: #5c4c36;
        }

        @media (max-width: 600px) {
          h2 {
            font-size: 2rem;
          }
          .contact-content {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
}
