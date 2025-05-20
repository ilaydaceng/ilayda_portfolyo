import React, { useState, useEffect } from "react";

// Dil içerikleri (locales) - Skills ile aynı yapıya göre hizalandı
const locales = {
    tr: {
        aboutTitle: "Ben Kimim?",
        aboutText1:
            "Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Mobil uygulama geliştirme ve yapay zeka alanlarına ilgi duyuyor, bu alanlarda kendimi geliştirmeye çalışıyorum.",
        aboutText2:
            "Avrupa’da eğitim alma fırsatı yakaladığım Erasmus deneyimim, farklı kültürleri tanımamı ve uluslararası bir bakış açısı kazanmamda yardımcı oldu. Akademik olarak da hedeflerimin arasında; mezuniyet sonrası yüksek lisans yaparak uzmanlık alanımı derinleştirmek yer alıyor.",
        toggleDark: "Karanlık Mod",
        toggleLight: "Aydınlık Mod",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe",
    },
    en: {
        aboutTitle: "About Me",
        aboutText1:
            "I am a 3rd-year Computer Engineering student. I am interested in mobile app development and artificial intelligence, and I am working on improving myself in these areas.",
        aboutText2:
            "My Erasmus experience, where I had the opportunity to study in Europe, helped me get to know different cultures and gain an international perspective. Academically, my goals include pursuing graduate studies after graduation to deepen my expertise.",
        toggleDark: "Dark Mode",
        toggleLight: "Light Mode",
        switchToEnglish: "English",
        switchToTurkish: "Türkçe",
    },
};

export default function About() {
    const [lang, setLang] = useState("tr");
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const t = locales[lang];

    useEffect(() => {
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
            <div className="about-container">
                <div className="buttons">
                    {/* Dil değiştirme butonu */}
                    <button
                        className="btn-lang"
                        onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                    >
                        {lang === "tr" ? t.switchToEnglish : t.switchToTurkish}
                    </button>

                    {/* Dark mode butonu */}
                    <button className="btn-darkmode" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? t.toggleLight : t.toggleDark}
                    </button>
                </div>

                {/* Hakkımda metni */}
                <section className="about-section">
                    <h2>{t.aboutTitle}</h2>
                    <p>{t.aboutText1}</p>
                    <p>{t.aboutText2}</p>
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

        .about-container {
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

        .about-section {
          background: linear-gradient(135deg, #f0f0f0, #ffffff);
          padding: 2.5rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transition: background 0.3s ease;
          color: inherit;
        }

        body.dark .about-section {
          background: linear-gradient(135deg, #1e1e1e, #292929);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
        }

        .about-section h2 {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .about-section p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .about-container {
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

          .about-section h2 {
            font-size: 1.8rem;
          }

          .about-section p {
            font-size: 1rem;
          }
        }
      `}</style>
        </>
    );
}
