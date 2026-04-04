import { mockVolunteers } from '../mockData';

export const getAllVolunteers = async () => {
  return mockVolunteers;
};

export const getVolunteerById = async (id) => {
  return mockVolunteers.find(v => v.id === id) || null;
};

export const createVolunteerForm = async (data) => {
  console.log('Formulário de voluntário recebido:', data);
  return { success: true, message: 'Formulário enviado com sucesso' };
};