import { mockAnimals } from '../mockData';

export const getAllAnimals = async () => {
  return mockAnimals;
};

export const getAnimalById = async (id) => {
  return mockAnimals.find(animal => animal.id === id) || null;
};