'use client'


import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full shadow-lg bg-cyan-900 text-white text-center py-2 text-sm hidden sm:block">
        Atendimento 24h | Telefone: (11) 1234-5678
      </div>
      <header className="w-full bg-gray-300">
        <nav className="relative px-4 py-3 flex items-center max-w-7xl mx-auto flex-wrap">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded-md text-cyan-900 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul
            className={`sm:flex flex-col sm:flex-row items-center sm:space-x-16 text-black font-semibold w-full sm:w-auto mx-auto ${menuOpen ? "block" : "hidden"
              } sm:block`}
          >
            <li>
              <a href="#" className="block px-4 py-2 hover:underline text-center sm:text-left">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:underline text-center sm:text-left">
                Fale Conosco
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:underline text-center sm:text-left">
                Especialistas
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:underline text-center sm:text-left">
                Sobre nós
              </a>
            </li>
          </ul>

          <div
            className={`flex flex-col sm:flex-row sm:space-x-5 mt-4 sm:mt-0 ml-auto w-full sm:w-auto ${menuOpen ? "block" : "hidden"
              } sm:flex`}
          >
            <Link
              href="/login"
              className="cursor-pointer rounded-2xl w-full sm:w-40 py-2 mb-3 sm:mb-0 text-cyan-600 hover:bg-cyan-600 hover:text-white transition text-center block"
            >
              Login
            </Link>

            <a
              href="#"
              className="bg-cyan-700 rounded-2xl w-full sm:w-40 py-2 text-white hover:bg-cyan-900 transition text-center block"
            >
              Cadastre-se
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}