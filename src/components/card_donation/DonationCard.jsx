import React from 'react';

import broom from '../../assets/icons/donation/broom.svg'
import med_kit from "../../assets/icons/donation/med_kit.svg";
import medicine from "../../assets/icons/donation/medicine.svg";

import './DonationCard.scss';

function DonationCard() {
  const handleDonate = (kit, value) => {
    alert(`Obrigado por escolher doar!\n\nKit: ${kit}\nValor: R$ ${value},00\n\nSua doação faz a diferença na vida dos animais! 🐾`);
  };

  return (
    <section className="donation_card">
      <div className="card">
        <div className="icon-container">
          <img src={broom} alt="Icone de Limpeza" className="icon_donation" />
        </div>
        <div>
          <h2>
            Kit de
            <br /> Limpeza
          </h2>
          <br />
          <h3> R$ 25 </h3>
          <br />
          <p>
            Desinfetante à base de amônia quaternária para desinfecção das
            baias. Mantenha o ambiente limpo e seguro!
          </p>
          <br />
          <button onClick={() => handleDonate('Kit de Limpeza', 25)}>Doe Agora</button>
        </div>
      </div>

      <div className="card">
        <div className="icon-container">
          <img src={med_kit} alt="kit medico" className="icon_donation" />
        </div>
        <div>
          <h2>
            Kit Preventivo <br />
            de Doenças
          </h2>
          <br />
          <h3> R$ 50 </h3>
          <br />
          <p>
            Vacina essencial para imunizar e proteger cães e gatos, garantindo a
            saúde e bem-estar dos nossos animais.
          </p>
          <br />
          <button onClick={() => handleDonate('Kit Preventivo de Doenças', 50)}>Doe Agora</button>
        </div>
      </div>

      <div className="card">
        <div className="icon-container">
          <img src={medicine} alt="seringa" className="icon_donation" />
        </div>
        <div>
          <h2>
            Kit Diária <br />
            de Internação
          </h2>
          <br />
          <h3> R$ 100 </h3> <br />
          <p>
            Soro, cateter, equipo, esparadrapo e medicação. Essencial para o
            cuidado e a recuperação dos animais.
          </p>
          <br />
          <button onClick={() => handleDonate('Kit Diária de Internação', 100)}>Doe Agora</button>
        </div>
      </div>
    </section>
  );
}

export default DonationCard;