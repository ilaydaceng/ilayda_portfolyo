import React, { useState, useEffect } from 'react';

export default function Navbar({ lang, toggleLang, text }) {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { id: 'home', label: text.home },
        { id: 'about', label: text.about },
        { id: 'skills', label: text.skills },
        { id: 'portfolio', label: text.portfolio },
        { id: 'contact', label: text.contact }
    ];

    useEffect(() => {
        function onScroll() {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            for (let section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
                    const bottom = top + el.offsetHeight;
                    if (scrollPos >= top && scrollPos < bottom) {
                        setActive(section.id);
                        break;
                    }
                }
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [sections]);

    function handleClick(id) {
        setActive(id);
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <button
                        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menüyü aç/kapat"
                        aria-expanded={menuOpen}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {sections.map(({ id, label }) => (
                            <li key={id}>
                                <button
                                    className={`nav-link ${active === id ? 'active' : ''}`}
                                    onClick={() => handleClick(id)}
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleLang}
                        className="lang-btn"
                        aria-label="Dil değiştir"
                        title="Dil değiştir"
                    >
                        {lang === 'tr' ? 'EN' : 'TR'}
                    </button>
                </div>
            </nav>

            <style>{`
                * {
                  box-sizing: border-box;
                }
                body {
                  margin: 0;
                  font-family: Arial, sans-serif;
                }

                .navbar {
                  position: fixed;
                  top: 0;
                  width: 100%;
                  background-color: #2c3e50;
                  padding: 1rem 2rem;
                  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                  z-index: 1000;
                }

                .navbar-container {
                  max-width: 1100px;
                  margin: 0 auto;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  gap: 1rem;
                }

                .nav-links {
                  list-style: none;
                  display: flex;
                  gap: 2rem;
                  margin: 0;
                  padding: 0;
                  flex: 1;
                  justify-content: center;
                }

                .nav-link {
                  background: none;
                  border: none;
                  color: white;
                  font-weight: 500;
                  font-size: 1rem;
                  cursor: pointer;
                  padding: 0 0 4px 0;
                  border-bottom: 2px solid transparent;
                  transition: color 0.3s ease, border-bottom-color 0.3s ease;
                }

                .nav-link:hover,
                .nav-link.active {
                  color: #ff6f61;
                  border-bottom-color: #ff6f61;
                  font-weight: 700;
                }

                .menu-toggle {
                  display: none;
                  flex-direction: column;
                  justify-content: space-between;
                  width: 25px;
                  height: 20px;
                  background: transparent;
                  border: none;
                  cursor: pointer;
                  padding: 0;
                  flex-shrink: 0;
                }

                .bar {
                  height: 3px;
                  width: 100%;
                  background-color: white;
                  border-radius: 2px;
                  transition: all 0.3s ease;
                }

                .menu-toggle.open .bar:nth-child(1) {
                  transform: rotate(45deg) translate(5px, 5px);
                }
                .menu-toggle.open .bar:nth-child(2) {
                  opacity: 0;
                }
                .menu-toggle.open .bar:nth-child(3) {
                  transform: rotate(-45deg) translate(5px, -5px);
                }

                .lang-btn {
                  background: transparent;
                  border: 2px solid white;
                  color: white;
                  padding: 0.3rem 0.7rem;
                  border-radius: 5px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: background-color 0.3s ease, color 0.3s ease;
                  user-select: none;
                }

                .lang-btn:hover {
                  background-color: white;
                  color: #2c3e50;
                }

                @media (max-width: 768px) {
                  .menu-toggle {
                    display: flex;
                  }

                  .nav-links {
                    position: fixed;
                    top: 60px;
                    left: 0;
                    right: 0;
                    background-color: #2c3e50;
                    flex-direction: column;
                    gap: 1.5rem;
                    padding: 1rem 0;
                    margin: 0;
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                    transform: translateY(-150%);
                    transition: transform 0.3s ease;
                    text-align: center;
                    z-index: 999;
                  }

                  .nav-links.active {
                    transform: translateY(0);
                  }

                  .navbar-container {
                    justify-content: space-between;
                  }

                  .lang-btn {
                    order: 1;
                    margin-left: auto;
                  }
                }
            `}</style>
        </>
    );
}
