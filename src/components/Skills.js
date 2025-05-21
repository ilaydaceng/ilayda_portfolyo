import React, { useState, useEffect } from "react";

// Dil içerikleri (locales) - Skills bölümü için
const locales = {
    tr: {
        skillsTitle: "Neler Yapabilirim?",
        skillsList: [
            "React ile dinamik ve hızlı web arayüzleri geliştirebilirim.",
            "JavaScript, TypeScript, HTML, CSS konularında deneyimliyim.",
            "Mobil uygulamalar için React Native ve Flutter kullanabilirim.",
            "Yapay zeka ve makine öğrenmesi projelerinde Python ile çalışabilirim.",
            "Veri analizi ve görselleştirme için pandas, matplotlib kullanırım.",
        ],
        toggleDark: "Karanlık Mod",
        toggleLight: "Aydınlık Mod",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe",
    },
    en: {
        skillsTitle: "What I Can Do?",
        skillsList: [
            "I can develop dynamic and fast web interfaces with React.",
            "I have experience with JavaScript, TypeScript, HTML, CSS.",
            "I can use React Native and Flutter for mobile applications.",
            "I work with Python on AI and machine learning projects.",
            "I use pandas and matplotlib for data analysis and visualization.",
        ],
        toggleDark: "Dark Mode",
        toggleLight: "Light Mode",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe",
    },
};

export default function Skills() {
    const [lang, setLang] = useState("tr");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const t = locales[lang];

    useEffect(() => {
        // Sayfa yenilendiğinde en üste scroll yap (isteğe bağlı)
        window.scrollTo(0, 0);
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
            <div className="skills-container">
                <div className="buttons">
                    <button
                        className="btn-lang"
                        onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                    >
                        {lang === "tr" ? t.switchToEnglish : t.switchToTurkish}
                    </button>

                    <button
                        className="btn-darkmode"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? t.toggleLight : t.toggleDark}
                    </button>
                </div>

                <section className="skills-section" id="skills">
                    <h2>{t.skillsTitle}</h2>
                    <ul>
                        {t.skillsList.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                    </ul>
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

        .skills-container {
          max-width: 800px;
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

        .skills-section {
          background: linear-gradient(135deg, #f0f0f0, #ffffff);
          padding: 2.5rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transition: background 0.3s ease;
          color: inherit;
        }

        body.dark .skills-section {
          background: linear-gradient(135deg, #1e1e1e, #292929);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
        }

        .skills-section h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-section ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .skills-section li {
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .skills-container {
            padding: 1rem 1rem;
          }

          .buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-lang, .btn-darkmode {
            width: 100%;
            margin-bottom: 0.75rem;
          }

          .skills-section h2 {
            font-size: 1.8rem;
          }

          .skills-section ul {
            font-size: 1rem;
          }
        }
      `}</style>
        </>
    );
}
