import React from 'react';

import NavBar from '../../../components/navbar/NavBar';
import Menu from '../../../components/menu/Menu';
import Footer from '../../../components/footer/Footer';

import './donation.css';
import DonationCard from '../../../components/card_donation/DonationCard';
import ContentHero from '../../../components/contentHero/ContentHero';
import ContentTitle from '../../../components/contentTitles/ContentTitles';

function Donation() {
  return (
    <div className="page_container">
      <NavBar />

      <ContentHero
        subtitle="Faça a diferença na vida de um animal"
        title="Faça uma doação"
        text="Nos dedicamos incansavelmente a cuidar dos animais, oferecendo alimentação, abrigo, cuidados veterinários e, acima de tudo, muito amor. No entanto, para continuarmos esse trabalho essencial, precisamos de você. Sua doação, por menor que seja, faz uma diferença imensa na vida desses animais."
        text2="Junte-se a nós nessa missão. Doe agora e ajude a transformar a vida de um animal abandonado. Eles contam com você!"
      />

      <section className="section-information">
        <div className="cards-donation">
          <ContentTitle title="Faça uma doação" subtitle="Faça a diferença na vida de um animal"></ContentTitle>
          <DonationCard />

          <div className="ways-to-donate">
            <div className="left">
              <h3>Doações de Itens</h3>
              <p>
                Para doações de rações, <br />
                remédios, cobertores e outros itens, <br />
                entre em contato para <br />
                combinar a entrega.
              </p>
              <br />
              <h3>Outras formas de ajudar:</h3>
              <p>
                Cada feira de adoção tem custos com <br />
                banho e transporte dos animais. <br />
                Se você pode nos ajudar, <br />
                entre em contato conosco!
              </p>
            </div>

            <div className="right">
              <h3>Pix</h3>
              <p>Chave Pix: contato@abrigoanimal.org</p>
              <br />
              <h3>Transferência Bancária:</h3>
              <h4>Banco</h4>
              <p>
                Conta corrente
                <br />
                Agência: 0000-0
                <br />
                Conta: 00000-0
              </p>
            </div>
          </div>
        </div>
      </section>

      <Menu currentPage="donation" />
      <Footer />
    </div>
  );
}

export default Donation;