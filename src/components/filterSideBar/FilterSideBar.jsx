import React from 'react';
import styles from './styles.module.css';

const FilterSidebar = ({ filtersState, setFiltersState }) => {

  const handleFilterChange = (filterName, value) => {
    setFiltersState({
      ...filtersState,
      [filterName]: value,
    });
  };

  const clearFilters = () => {
    setFiltersState({
      species: "",
      gender: "",
      age: "",
      size: "",
    });
  };

  const hasActiveFilters = Object.values(filtersState).some((v) => v !== "");

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Animal</label>
        <select
          className={styles.filterSelect}
          value={filtersState.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">Selecionar</option>
          <option value="canina">Cão</option>
          <option value="felina">Gato</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Sexo</label>
        <select
          className={styles.filterSelect}
          value={filtersState.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">Selecionar</option>
          <option value="M">Macho</option>
          <option value="F">Fêmea</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Porte</label>
        <select
          className={styles.filterSelect}
          value={filtersState.size}
          onChange={(e) => handleFilterChange("size", e.target.value)}
        >
          <option value="">Selecionar</option>
          <option value="pequeno">P (até 10kg)</option>
          <option value="medio">M (até 25kg)</option>
          <option value="grande">G (mais de 25kg)</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Idade</label>
        <select
          className={styles.filterSelect}
          value={filtersState.age}
          onChange={(e) => handleFilterChange("age", e.target.value)}
        >
          <option value="">Selecionar</option>
          <option value="Filhote">Filhote</option>
          <option value="Adulto">Adulto</option>
          <option value="Idoso">Idoso</option>
        </select>
      </div>

      {hasActiveFilters && (
        <div className={styles.filterActions}>
          <button className={styles.clearButton} onClick={clearFilters}>
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
