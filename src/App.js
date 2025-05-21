import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import locales from "./locales";

function App() {
    const [lang, setLang] = useState("tr");

    const toggleLang = () => {
        setLang((prev) => (prev === "tr" ? "en" : "tr"));
    };

    // Sayfa yüklendiğinde scroll en başa gitsin
    useEffect(() => {
        // Sayfa yüklendikten hemen sonra scroll'u sıfırla
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);

        // Sayfa yenilenirken de scroll'u en başa çek
        const handleBeforeUnload = () => {
            window.scrollTo(0, 0);
        };
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <div className="App">
            <Navbar lang={lang} toggleLang={toggleLang} text={locales[lang].nav} />
            <Home lang={lang} text={locales[lang].home} />
            <About lang={lang} text={locales[lang].about} />
            <Skills lang={lang} text={locales[lang].skills} />
            <Portfolio lang={lang} text={locales[lang].portfolio} />
            <Contact lang={lang} text={locales[lang].contact} />
            <Footer lang={lang} text={locales[lang].footer} />
        </div>
    );
}

export default App;
