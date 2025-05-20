import React, { useState, useEffect } from 'react';

export default function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error("Projeler yüklenemedi:", error));
    }, []);

    return (
        <section id="portfolio" style={{ padding: '4rem 2rem', background: '#f8f9fa' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem' }}>Portfolyo</h2>

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem',
                    gap: '1rem',
                    flexWrap: 'wrap'
                }}>
                    <a href="#projects" className="portfolio-tab">Projelerim</a>
                    <a href="#education" className="portfolio-tab">Eğitim</a>
                    <a href="#cv" className="portfolio-tab">Özgeçmiş</a>
                </div>

                {/* Projelerim */}
                <section id="projects" style={{ marginBottom: '4rem' }}>
                    <h3 className="portfolio-subtitle">Projelerim</h3>
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

                {/* Eğitim */}
                <section id="education" style={{ marginBottom: '4rem' }}>
                    <h3 className="portfolio-subtitle">Eğitim</h3>
                    <div className="portfolio-grid">
                        <div className="portfolio-card">
                            <h4>Balıkesir Üniversitesi</h4>
                            <p>2022-2026 (Devam ediyor)<br /> Bilgisayar Mühendisliği Öğrencisi </p>
                        </div>
                        <div className="portfolio-card">
                            <h4>Vektörel Bilişim</h4>
                            <p>Kasım 2023<br />Java & Android Yazılım, Microsoft, Autodesk ve Adobe destekli eğitim/seminer programı<br />Başarı Sertifikası</p>
                        </div>
                        <div className="portfolio-card">
                            <h4>Erasmus (Polonya – Koszalin)</h4>
                            <p>Şubat 2024 - Haziran 2024 <br />Yurtdışı akademik değişim programı</p>
                        </div>
                    </div>
                </section>

                {/* Özgeçmiş */}
                <section id="cv" style={{ textAlign: 'center' }}>
                    <h3 className="portfolio-subtitle">CV / Özgeçmiş</h3>
                    <p>Güncel CV’me aşağıdan ulaşabilirsiniz.</p>
                    <a
                        href="/ilaydaAkgulCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '0.7rem 2rem',
                            backgroundColor: '#3a6186',
                            color: 'white',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            marginTop: '1rem'
                        }}
                    >
                        CV'yi Görüntüle
                    </a>
                </section>
            </div>
        </section>
    );
}
