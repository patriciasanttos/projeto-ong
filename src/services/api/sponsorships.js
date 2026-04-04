import { mockSponsorships } from '../mockData';

export const getAllSponsorships = async () => {
  return mockSponsorships;
};

export const getSponsorshipById = async (id) => {
  return mockSponsorships.find(s => s.id === id) || null;
};

export const createSponsorshipForm = async (data) => {
  console.log('Formulário de apadrinhamento recebido:', data);
  return { success: true, message: 'Formulário enviado com sucesso' };
};