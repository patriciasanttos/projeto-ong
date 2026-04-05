import React, { useEffect, useState } from "react";

import "./sponsorship.scss";

import NavBar from "../../../components/navbar/NavBar";
import Footer from "../../../components/footer/Footer";
import Menu from "../../../components/menu/Menu";
import CardAnimal from "../../../components/cardAnimal/CardAnimal";
import ModalLPSponsorship from "../../../components/modal/modalLPSponsorship";
import imageDog1 from "../../../assets/images/landing_page/dog1.svg";
import imageCat from "../../../assets/images/cat-image.jpg";
import ContentHero from "../../../components/contentHero/ContentHero";
import LoadingPaw from "../../../components/loadingPaw";
import FilterSidebar from "../../../components/filterSideBar/FilterSideBar";
import { getAllAnimals } from "../../../services/api/animals";
import Pagination from "../../../components/pagination";

function Sponsorship() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [paginatedAnimals, setPaginatedAnimals] = useState([]);
  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    age: "",
    size: "",
  });

  useEffect(() => {
    const getAnimals = async () => {
      const data = await getAllAnimals();

      const formattedAnimals = data.map((animal) => {
        const isCat = animal.species === "felina";
        const defaultImage = isCat ? imageCat : imageDog1;

        return {
          ...animal,
          name: animal?.name.charAt(0).toUpperCase() + animal?.name.slice(1).toLowerCase(),
          race: animal?.race,
          image: animal?.image
            ? `data:image/jpg;base64,${animal.image}`
            : defaultImage,
        };
      });

      setAnimals(formattedAnimals);
      setFilteredAnimals(formattedAnimals);
      setLoading(false);
    };

    getAnimals();
  }, []);

  const getFilteredAnimals = (items) => {
    return items.filter((animal) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value === "") return true;
        return String(animal[key]).toLowerCase() === value.toLowerCase();
      });
    });
  };

  useEffect(() => {
    setFilteredAnimals(getFilteredAnimals(animals));
  }, [filters]);

  const onClickCardAnimal = (animal) => {
    setIsModalOpen(true);
    setSelectedAnimal(animal);
  };

  return (
    <div className="page_container">
      <NavBar />

      <ContentHero
        subtitle="Faça a diferença na vida de um animal"
        title="Seja uma madrinha ou padrinho"
        text="Apadrinhar um dos nossos animais é transformar uma vida. Com sua ajuda, eles recebem alimento, abrigo, cuidados e amor. Mesmo à distância, você faz a diferença e pode acompanhar o impacto do seu apoio. Seja parte dessa mudança e ajude a oferecer um futuro melhor para nossos amigos de quatro patas."
      />

      {loading ? (
        <LoadingPaw />
      ) : (
        <div className="contentContainer">
          <FilterSidebar
            filtersState={filters}
            setFiltersState={setFilters}
          />

          <p className="text">Conheça alguns de nossos animais</p>

          <div className="cardContainer">
            {paginatedAnimals.map((animal) => (
              <CardAnimal
                onClickButton={onClickCardAnimal}
                animal={animal}
                key={animal.id}
                image={animal.image}
                name={animal.name}
                gender={
                  ["m", "macho"].includes(animal.gender.toLowerCase()) ? "Macho" : "Fêmea"
                }
                race={animal.race}
                age={animal.age}
              />
            ))}
          </div>

          <Pagination
            listItems={filteredAnimals}
            onPaginate={(items) => setPaginatedAnimals(items)}
          />
        </div>
      )}

      <Menu currentPage="sponsorship" />
      <Footer />
      <ModalLPSponsorship
        isOpen={isModalOpen}
        onModalClose={() => setIsModalOpen(false)}
        showForm={true}
        selectedAnimal={selectedAnimal}
      />
    </div>
  );
}

export default Sponsorship;
