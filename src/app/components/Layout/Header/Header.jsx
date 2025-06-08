'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getCookie, deleteCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'
import './header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = getCookie('authorization')

    if (token) {
      try {
        const decoded = jwtDecode(token)

        fetch('http://localhost:3001/api/user/validate', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (!res.ok) throw new Error('Token inválido')
            setUser(decoded)
          })
          .catch(() => {
            deleteCookie('authorization')
            setUser(null)
          })
      } catch (err) {
        console.error('Erro ao decodificar token:', err)
        setUser(null)
      }
    }
  }, [])

  const handleLogout = () => {
    deleteCookie('authorization')
    setUser(null)
    window.location.href = '/'
  }

  return (
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

        <img src="/Astronautas/AstronautaLogo.png" alt="logo" className="logo" />

        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href=".">Home</a></li>
          <li><a href="#Vagas">Vitrine de Vagas</a></li>
          <li><a href="#">Sobre nós</a></li>
        </ul>

        <div className={`auth-buttons ${menuOpen ? 'open' : ''}`}>
          {!user ? (
            <>
              <Link href="http://localhost:3001/login" className="login">Login</Link>
              <Link href="http://localhost:3001/cadastro" className="cadastre">Cadastre-se</Link>
            </>
          ) : (
            <>
              {user.tipo === 'empresa' ? (
                <Link href="/empresa/dashboard" className="login">Painel da Empresa</Link>
              ) : (
                <>
                  <span className="user-info">
                    {user.nome} ({user.email})
                  </span>
                  <Link href="/aluno/perfil" className="login">Perfil</Link>
                </>
              )}
              <button onClick={handleLogout} className="logout-button">Sair</button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
