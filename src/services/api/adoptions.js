import { axiosGet, axiosPost, axiosPut, axiosDelete } from './index';
import { mockAdoptions } from '../mockData';

//-----Adoptions
export const getAllAdoptions = async (token) => {
    try {
        return await axiosGet('/adoptions/get', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock para adoções.');
        return mockAdoptions;
    }
}

export const getAdoptionById = async (id, token) => {
    try {
        return await axiosGet(`/adoptions/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return mockAdoptions.find(a => a.id === Number(id)) || null;
    }
}

export const createAdoption = async (data, token) => {
    try {
        return await axiosPost('/adoptions', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Adoção criada (modo offline)' };
    }
}

export const updateAdoption = async (data, token) => {
    try {
        return await axiosPut('/adoptions', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Adoção atualizada (modo offline)' };
    }
}

export const deleteAdoption = async (id, token) => {
    try {
        return await axiosDelete(`/adoptions/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Adoção removida (modo offline)' };
    }
}

//-----Adoptions form
export const getAllAdoptionForms = async (token) => {
    try {
        return await axiosGet('/adoptions/forms', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return [];
    }
}

export const createAdoptionForm = async (data) => {
    try {
        return await axiosPost('/adoptions/forms', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.warn('API indisponível. Formulário simulado.');
        return { success: true, message: 'Formulário de adoção enviado (modo offline)' };
    }
}

export const acceptAdoptionForm = async (id, token) => {
    try {
        return await axiosGet(`/adoptions/forms/accept/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}

export const denyAdoptionForm = async (id, token) => {
    try {
        return await axiosDelete(`/adoptions/forms/deny/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}