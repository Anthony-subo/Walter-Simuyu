"use client";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <main
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(255,255,255,0.97))",
          color: "#1e293b",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* HERO SECTION */}
        <section
          style={{
            padding: "100px 20px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "3.2rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "700",
              lineHeight: "1.2",
            }}
          >
            Discover the Power of <br />
            <span style={{ color: "#fbbf24" }}>Language</span> &{" "}
            <span style={{ color: "#fcd34d" }}>Literature</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "20px auto",
              color: "#e2e8f0",
            }}
          >
            Welcome to the world of{" "}
            <b>Mr. Walter Simuyu</b> — an educator and thinker who transforms
            literature into a journey of voice, vision, and soul.
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/about"
              style={{
                background: "#fbbf24",
                color: "#1e293b",
                padding: "12px 28px",
                borderRadius: "40px",
                fontWeight: "600",
                transition: "0.3s",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.background = "#fff")}
              onMouseOut={(e) => (e.target.style.background = "#fbbf24")}
            >
              Learn More
            </a>

            <a
              href="/blog"
              style={{
                background: "transparent",
                border: "2px solid #fbbf24",
                color: "#fbbf24",
                padding: "12px 28px",
                borderRadius: "40px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "#fbbf24";
                e.target.style.color = "#1e293b";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#fbbf24";
              }}
            >
              Read Blog
            </a>
          </div>
        </section>

        {/* FEATURED SECTION */}
        <section style={{ padding: "80px 20px", background: "#ffffff" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "40px",
              color: "#1e293b",
            }}
          >
            Featured Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, #f8fafc, #fff)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  padding: "24px",
                  transition: "transform 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  The Art of Expression {i}
                </h3>
                <p style={{ color: "#475569", marginBottom: "14px" }}>
                  A deep reflection on how words shape our world and mirror our
                  humanity.
                </p>
                <a
                  href="/blog"
                  style={{
                    color: "#b45309",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section
          style={{
            background: "linear-gradient(120deg, #1e293b, #334155)",
            color: "white",
            padding: "80px 20px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              marginBottom: "20px",
            }}
          >
            His Teaching Philosophy
          </h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto 30px",
              lineHeight: "1.7",
              fontSize: "1.1rem",
              color: "#e2e8f0",
            }}
          >
            “Literature is a mirror of life — and education, the art of polishing
            that mirror. I teach to awaken minds, not to fill them.”
          </p>
          <a
            href="/about"
            style={{
              background: "#fbbf24",
              color: "#1e293b",
              padding: "12px 30px",
              borderRadius: "40px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Explore More
          </a>
        </section>
      </main>
    </div>
  );
}
