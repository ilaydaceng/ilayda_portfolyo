import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ language, locales }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_w4kf6yl',
        'template_urzvoo6',
        form.current,
        'LN8IU4sUVri5K0UKH'
    ).then(
        (result) => {
          alert('Mailiniz başarıyla gönderildi!');
          form.current.reset();
        },
        (error) => {
          alert('Hata oluştu: ' + error.text);
        }
    );
  };

  return (
      <section id="contact" style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        <h2 style={{ textAlign: 'center' }}>İletişim</h2>
        <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '400px', margin: 'auto' }}>
          <label>
            Ad Soyad:
            <input
                type="text"
                name="name"
                required
                placeholder="Adınız ve soyadınız"
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />
          </label>
          <label>
            Mail Adresi:
            <input
                type="email"
                name="email"
                required
                placeholder="E-posta adresiniz"
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />
          </label>
          <label>
            Mail:
            <textarea
                name="message"
                required
                rows="5"
                placeholder="Mailinizi yazınız"
                style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
            />
          </label>
          <button type="submit" style={{
            padding: '0.5rem 1.5rem',
            cursor: 'pointer',
            backgroundColor: '#111',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Gönder
          </button>
        </form>
      </section>
  );
}
