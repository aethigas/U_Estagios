'use client'
import Link from "next/link";
import { useState } from "react";
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <header className="main-header">
        <nav className="navbar">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        <img src="/logoSemFundo.png" alt="logo"  className="logo"/>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
        
            <li><a href="#">Home</a></li>
            <li><a href="#Vagas">Vitrine de Vagas</a></li>

            <li><a href="#">Sobre nós</a></li>
          </ul>

          <div className={`auth-buttons ${menuOpen ? "open" : ""}`}>
            <Link href="/Empresa.jsx" className="login">Login</Link>
            <a href="#" className="cadastre">Cadastre-se</a>
          </div>
        </nav>
      </header>
    </>
  );
}
