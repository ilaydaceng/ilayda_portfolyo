import React, { useState, useEffect } from "react";
import myPhoto from "../assets/1660732775717.jpeg";

export default function Home() {
    const fullText = "Merhaba, Ben İlayda Nur Akgül";
    const roles = [
        "Yazılımcı",
        "Takım Arkadaşı",
        "Mobil Geliştirici",
        "Yapay Zeka Meraklısı",
        "Problem Çözücü",
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [showRoles, setShowRoles] = useState(false);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [showRoleText, setShowRoleText] = useState(true);

    // Yazı animasyonu
    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(fullText.slice(0, index + 1));
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => setShowRoles(true), 500);
        }
    }, [index, fullText]);

    // Roller animasyonu
    useEffect(() => {
        if (!showRoles) return;

        const timeout1 = setTimeout(() => setShowRoleText(false), 1500);
        const timeout2 = setTimeout(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            setShowRoleText(true);
        }, 2000);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
    }, [currentRoleIndex, showRoles]);

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #3a6186, #89253e)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <img
                src={myPhoto}
                alt="Benim Fotoğrafım"
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    marginBottom: "1rem",
                    objectFit: "cover",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                }}
            />
            <h1
                style={{
                    fontSize: "2.5rem", // Font boyutunu küçülttüm!
                    marginBottom: "1rem",
                    fontWeight: "700",
                    minHeight: "60px",
                    whiteSpace: "normal",
                    borderRight: "4px solid white",
                    animation: "blink 1s step-end infinite",
                }}
            >
                {displayedText}
            </h1>

            {showRoles && (
                <p
                    style={{
                        fontSize: "2rem",
                        height: "50px",
                        color: "#ff6f61",
                        fontWeight: "600",
                        transition: "opacity 0.5s ease",
                        opacity: showRoleText ? 1 : 0,
                    }}
                >
                    {roles[currentRoleIndex]}
                </p>
            )}

            <a
                href="#contact"
                style={{
                    backgroundColor: "#ff6f61",
                    color: "white",
                    padding: "0.8rem 2rem",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(255,111,97,0.6)",
                    transition: "background-color 0.3s ease",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff8a75")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6f61")}
            >
                İletişime Geç
            </a>

            <style>{`
                @keyframes blink {
                    0%, 100% { border-color: transparent }
                    50% { border-color: white; }
                }
            `}</style>
        </section>
    );
}
