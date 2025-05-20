import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#111',
            color: 'white',
            textAlign: 'center',
            padding: '1.5rem 1rem',
            width: '100%',
            marginTop: '4rem'
        }}>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Beni sosyal medyada takip edin:</p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                fontSize: '1.5rem'
            }}>
                <span style={{ color: '#555', cursor: 'not-allowed' }} title="X hesabı yok"><FaTwitter /></span>
                <a href="https://github.com/ilaydaceng" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                    <FaGithub />
                </a>
                <span style={{ color: '#555', cursor: 'not-allowed' }} title="Facebook hesabı yok"><FaFacebook /></span>
                <a href="https://www.linkedin.com/in/ilayda-akg%C3%BCl-80baab248/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                    <FaLinkedin />
                </a>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>
                &copy; {new Date().getFullYear()} İlayda Akgül. Tüm hakları saklıdır.
            </p>
        </footer>
    );
}
