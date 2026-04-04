import { mockAdoptions } from '../mockData';

export const getAllAdoptions = async () => {
  return mockAdoptions;
};

export const getAdoptionById = async (id) => {
  return mockAdoptions.find(adoption => adoption.id === id) || null;
};

export const createAdoptionForm = async (data) => {
  console.log('Formulário de adoção recebido:', data);
  return { success: true, message: 'Formulário enviado com sucesso' };
};