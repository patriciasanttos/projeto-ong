import React from 'react';

import NavBar from '../../../components/navbar/NavBar';
import ContentTitles from '../../../components/contentTitles/ContentTitles';
import Menu from '../../../components/menu/Menu';
import Footer from '../../../components/footer/Footer';

import './about_us.scss';
import ContentTitle from '../../../components/contentTitles/ContentTitles';

function AboutUs() {
  return (
    <div className="page-container">
      <NavBar />

      <div className="aboutus-container">
        <main className="aboutus-main">
          <ContentTitles title="Sobre Nós" subtitle="Conheça a nossa história" />

          <div className="aboutus-main-text">
            <div style={{
              width: '100%',
              maxWidth: '560px',
              height: '315px',
              border: '2px dashed #3a9e3f',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f8f0',
              marginBottom: '1.5rem',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              <span style={{ fontSize: '2.5rem' }}>📷</span>
              <p style={{ color: '#3a9e3f', fontWeight: '600', fontSize: '1.1rem', textAlign: 'center', padding: '0 1rem' }}>
                Sua foto ou vídeo aqui
              </p>
            </div>

            <p className="text-about">
              Somos uma organização dedicada ao resgate e cuidado de animais
              abandonados, oferecendo a eles segurança, cuidado e
              amor. Nosso abrigo se transformou em um lar para centenas de cães
              e gatos abandonados, onde eles podem se recuperar e encontrar
              dignidade.
              <br />
              Hoje, cuidamos de centenas de animais, todos com histórias
              marcadas pela dor, mas também pela esperança. Dependemos da 
              generosidade de pessoas como você para continuar nossa missão.
            </p>
          </div>
        </main>

        <section className="aboutus-section-team">
          <ContentTitle subtitle="Conheça quem faz acontecer" title="Nossa equipe"></ContentTitle>
 
          <section className="aboutus-team-cards">
            <div className="aboutus-team-cards-scroll">
              <p style={{padding: '2rem', textAlign: 'center', color: '#666'}}>
                Em breve você conhecerá nossa equipe!
              </p>
            </div>
          </section>
        </section>
      </div>

      <Menu />
      <Footer />
    </div>
  );
}

export default AboutUs;