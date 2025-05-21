import React, { useState, useEffect } from 'react';

// Dil içerikleri
const locales = {
    tr: {
        title: "Portfolyo",
        tabs: {
            projects: "Projelerim",
            education: "Eğitim",
            cv: "Özgeçmiş"
        },
        subtitleProjects: "Projelerim",
        subtitleEducation: "Eğitim",
        subtitleCV: "CV / Özgeçmiş",
        cvText: "Güncel CV’me aşağıdan ulaşabilirsiniz.",
        cvButton: "CV'yi Görüntüle",
        toggleDark: "Karanlık Mod",
        toggleLight: "Aydınlık Mod",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe"
    },
    en: {
        title: "Portfolio",
        tabs: {
            projects: "My Projects",
            education: "Education",
            cv: "Resume"
        },
        subtitleProjects: "My Projects",
        subtitleEducation: "Education",
        subtitleCV: "Resume / CV",
        cvText: "You can access my updated CV below.",
        cvButton: "View CV",
        toggleDark: "Dark Mode",
        toggleLight: "Light Mode",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe"
    }
};

export default function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [lang, setLang] = useState("tr");
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
    const t = locales[lang];

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Projeler yüklenemedi:", error));
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <>
            <div className="portfolio-container" id="portfolio">
                <div className="buttons">
                    <button onClick={() => setLang(lang === "tr" ? "en" : "tr")} className="btn-lang">
                        {lang === "tr" ? t.switchToEnglish : t.switchToTurkish}
                    </button>
                    <button onClick={() => setDarkMode(!darkMode)} className="btn-darkmode">
                        {darkMode ? t.toggleLight : t.toggleDark}
                    </button>
                </div>

                <h2 className="portfolio-title">{t.title}</h2>

                <div className="tab-links">
                    <a href="#projects" className="portfolio-tab">{t.tabs.projects}</a>
                    <a href="#education" className="portfolio-tab">{t.tabs.education}</a>
                    <a href="#cv" className="portfolio-tab">{t.tabs.cv}</a>
                </div>

                <section id="projects" className="portfolio-section">
                    <h3 className="portfolio-subtitle">{t.subtitleProjects}</h3>
                    <div className="portfolio-grid">
                        {projects.map((proj, index) => (
                            <div key={index} className="portfolio-card">
                                <h4>{proj.title}</h4>
                                <p>{proj.description}</p>
                                <a href={proj.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="education" className="portfolio-section">
                    <h3 className="portfolio-subtitle">{t.subtitleEducation}</h3>
                    <div className="portfolio-grid">
                        <div className="portfolio-card">
                            <h4>Balıkesir Üniversitesi</h4>
                            <p>2022-2026 (Devam ediyor)<br /> Bilgisayar Mühendisliği Öğrencisi</p>
                        </div>
                        <div className="portfolio-card">
                            <h4>Vektörel Bilişim</h4>
                            <p>Kasım 2023<br />Java & Android Yazılım eğitimi<br />Başarı Sertifikası</p>
                        </div>
                        <div className="portfolio-card">
                            <h4>Erasmus (Polonya – Koszalin)</h4>
                            <p>Şubat 2024 - Haziran 2024 <br />Yurtdışı akademik değişim programı</p>
                        </div>
                    </div>
                </section>

                <section id="cv" className="portfolio-section" style={{ textAlign: 'center' }}>
                    <h3 className="portfolio-subtitle">{t.subtitleCV}</h3>
                    <p>{t.cvText}</p>
                    <a href="/ilaydaAkgulCV.pdf" target="_blank" rel="noopener noreferrer" className="btn-darkmode">
                        {t.cvButton}
                    </a>
                </section>
            </div>

            <style>{`
                body {
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                body.dark {
                    background-color: #121212;
                    color: #e0e0e0;
                }

                .portfolio-container {
                    max-width: 1100px;
                    margin: 2rem auto;
                    padding: 1rem 2rem;
                    font-family: Arial, sans-serif;
                }

                .buttons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .btn-lang, .btn-darkmode {
                    cursor: pointer;
                    padding: 0.5rem 1rem;
                    border: none;
                    border-radius: 5px;
                    font-weight: 600;
                    background-color: #3a6186;
                    color: white;
                    transition: background-color 0.2s ease;
                }

                .btn-lang:hover, .btn-darkmode:hover {
                    background-color: #2b4572;
                }

                .portfolio-title {
                    text-align: center;
                    font-size: 2.2rem;
                    margin-bottom: 2rem;
                }

                .tab-links {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .portfolio-tab {
                    text-decoration: none;
                    font-weight: bold;
                    color: inherit;
                    border-bottom: 2px solid transparent;
                }

                .portfolio-tab:hover {
                    border-color: #3a6186;
                }

                .portfolio-section {
                    margin-bottom: 4rem;
                    background: linear-gradient(135deg, #f0f0f0, #ffffff);
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
                    transition: background 0.3s ease;
                    color: inherit;
                }

                body.dark .portfolio-section {
                    background: linear-gradient(135deg, #1e1e1e, #292929);
                    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
                }

                .portfolio-subtitle {
                    font-size: 1.8rem;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                }

                .portfolio-card {
                    background-color: inherit;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 1rem;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }

                .portfolio-card h4 {
                    margin-bottom: 0.5rem;
                }

                @media (max-width: 768px) {
                    .portfolio-container {
                        padding: 1rem;
                    }

                    .buttons {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .btn-lang, .btn-darkmode {
                        width: 100%;
                        margin-bottom: 0.75rem;
                    }

                    .portfolio-title {
                        font-size: 1.8rem;
                    }

                    .portfolio-subtitle {
                        font-size: 1.4rem;
                    }
                }
            `}</style>
        </>
    );
}
