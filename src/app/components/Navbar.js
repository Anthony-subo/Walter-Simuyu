"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">
          Mr.<span>Walter Simuyu</span>
        </h1>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="menu-item"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="menu-mobile">
          {["Home", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="menu-mobile-item"
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .navbar {
          background: linear-gradient(135deg, #fdfaf5, #f7f2e9);
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-family: "Georgia", serif;
          font-weight: bold;
          color: #1e293b;
        }

        .logo span {
          color: #c08457;
        }

        .menu-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          .menu-desktop {
            display: flex;
            gap: 32px;
          }
        }

        .menu-item {
          color: #1e293b;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .menu-item::after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #c08457;
          transition: width 0.3s ease;
        }

        .menu-item:hover {
          color: #c08457;
        }

        .menu-item:hover::after {
          width: 100%;
        }

        .menu-button {
          background: none;
          border: none;
          color: #1e293b;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .menu-button {
            display: none;
          }
        }

        .menu-mobile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          background: #fdfaf5;
          border-top: 1px solid #e2d7c5;
          padding: 20px 0;
          animation: slideDown 0.3s ease forwards;
        }

        .menu-mobile-item {
          color: #1e293b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .menu-mobile-item:hover {
          color: #c08457;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}
