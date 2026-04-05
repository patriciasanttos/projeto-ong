import React from 'react';

import NavBar from '../../../components/navbar/NavBar';
import ContentHero from '../../../components/contentHero/ContentHero';
import Menu from '../../../components/menu/Menu';
import Footer from '../../../components/footer/Footer';

import maps_icon from '../../../assets/icons/contact/maps.svg';
import whatsapp_icon from "../../../assets/icons/volunteers_lp/whatsapp.svg";
import email_icon from "../../../assets/icons/contact/green_email.svg";
import instagram_icon from "../../../assets/icons/contact/green_instagram.svg";
import link_icon from "../../../assets/icons/contact/link.svg";

import './styles.css';
import ContentTitles from '../../../components/contentTitles/ContentTitles';

function Contact() {
  return (
    <div className="page_container">
      <NavBar />

      <div className="contact-page-container">
        <ContentHero
          title="Entre em contato e faça parte dessa causa"
          subtitle="Juntos podemos fazer a diferença!"
          text="Você ama os animais e deseja ajudar a proporcionar uma vida melhor para eles?"
          text2="Estamos comprometidos em cuidar e encontrar lares amorosos para animais abandonados. Precisamos do seu apoio!"
        />

        <main className="contact-page-main">
          <ContentTitles subtitle="Como nos encontrar" title="Fale Conosco"/>
          
          <section className="address">
            <div className="address-text">
              <div>
                <h4>Endereço</h4>

                <img src={maps_icon} alt="Maps" />
              </div>

              <p>
                Rua Exemplo, 123 - Centro <br /> <br />
                CEP 00000-000, Cidade - UF
              </p>
            </div>

            <div className="map-placeholder">
              <div className="map-placeholder-inner">
                <svg className="map-pin-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#26A59E"/>
                </svg>
                <div className="map-streets">
                  <div className="map-street-h map-street-1"></div>
                  <div className="map-street-h map-street-2"></div>
                  <div className="map-street-v map-street-3"></div>
                  <div className="map-street-v map-street-4"></div>
                </div>
                <span className="map-label">Google Maps</span>
              </div>
            </div>
          </section>

          <section className="contacts">
            <div className="whatsapp">
              <div className="contacts-title">
                <h4>Whatsapp</h4>

                <img
                  src={whatsapp_icon}
                  alt="Whatsapp"
                  style={{ width: "13%" }}
                />
              </div>

              <div className="whatsapp-link">
                <p>Entre em contato conosco</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                >
                  <div>
                    <img src={link_icon} alt="Link" />
                    <p>(00) 0000-0000</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="email">
              <div className="contacts-title">
                <h4>Email</h4>

                <img src={email_icon} alt="Email" />
              </div>

              <p>contato@abrigoanimal.org</p>
            </div>

            <div className="instagram">
              <div className="contacts-title">
                <h4>Instagram</h4>

                <img
                  src={instagram_icon}
                  alt="Instagram"
                  style={{ marginLeft: "5%" }}
                />
              </div>

              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                <img src={link_icon} alt="Link" />
                <p>@abrigo_animal</p>
              </a>
            </div>
          </section>

          <section className="questions">
            <h4>Dúvidas Frequentes</h4>

            <details>
              <summary>
                Eu preciso buscar o animal no abrigo ou vocês o trazem até
                minha casa?
              </summary>
              <div>
                <p>
                  Normalmente pedimos que o adotante venha buscar o animal no abrigo,
                  mas podemos combinar alternativas.
                </p>
              </div>
            </details>

            <details>
              <summary>Posso adotar mais de um animal?</summary>
              <div>
                <p>Sim, claro.</p>
              </div>
            </details>

            <details>
              <summary>Pessoas de qualquer cidade podem adotar?</summary>
              <div>
                <p>
                  Sim, pode ser de qualquer lugar, mas se não puder buscar o
                  animal, deverá custear o transporte.
                </p>
              </div>
            </details>

            <details>
              <summary>Como posso ser um patrocinador?</summary>
              <div>
                <p>
                  Patrocinadores fazem doações mensais de um determinado valor
                  ou produtos para ajudar no cuidado dos animais.
                </p>
              </div>
            </details>

            <details>
              <summary>O abrigo recebe ajuda do governo?</summary>
              <div>
                <p>
                  Somos uma organização independente e dependemos 
                  principalmente de doações da comunidade para manter
                  nosso trabalho.
                </p>
              </div>
            </details>
          </section>
        </main>
      </div>

      <Menu />
      <Footer />
    </div>
  );
}

export default Contact;