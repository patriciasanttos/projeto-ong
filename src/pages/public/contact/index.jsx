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