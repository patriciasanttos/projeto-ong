import { axiosGet, axiosPost, axiosPut, axiosDelete } from './index';
import { mockVolunteers } from '../mockData';

//-----Volunteers
export const getAllVolunteers = async (token) => {
    try {
        return await axiosGet('/volunteers/get', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock para voluntários.');
        return mockVolunteers;
    }
}

export const getVolunteerById = async (id, token) => {
    try {
        return await axiosGet(`/volunteers/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return mockVolunteers.find(v => v.id === Number(id)) || null;
    }
}

export const createVolunteer = async (data, token) => {
    try {
        return await axiosPost('/volunteers', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Voluntário criado (modo offline)' };
    }
}

export const updateVolunteer = async (data, token) => {
    try {
        return await axiosPut('/volunteers', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Voluntário atualizado (modo offline)' };
    }
}

export const deleteVolunteer = async (id, token) => {
    try {
        return await axiosDelete(`/volunteers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Voluntário removido (modo offline)' };
    }
}

//-----Volunteers forms
export const getAllVolunteersForms = async (token) => {
    try {
        return await axiosGet('/volunteers/forms', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return [];
    }
}

export const createVolunteerForm = async (data) => {
    try {
        return await axiosPost('/volunteers/forms', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.warn('API indisponível. Formulário simulado.');
        return { success: true, message: 'Formulário de voluntário enviado (modo offline)' };
    }
}

export const acceptVolunteerForm = async (id, token) => {
    try {
        return await axiosGet(`/volunteers/forms/accept/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}

export const denyVolunteerForm = async (id, token) => {
    try {
        return await axiosDelete(`/volunteers/forms/deny/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}