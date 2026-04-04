import { axiosGet, axiosPost, axiosPut, axiosDelete } from './index';
import { mockSponsorships } from '../mockData';

//-----Sponsorships
export const getAllSponsorships = async (token) => {
    try {
        return await axiosGet('/sponsorships/get', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock para apadrinhamentos.');
        return mockSponsorships;
    }
}

export const getSponsorshipById = async (id, token) => {
    try {
        return await axiosGet(`/sponsorships/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return mockSponsorships.find(s => s.id === Number(id)) || null;
    }
}

export const createSponsorship = async (data, token) => {
    try {
        return await axiosPost('/sponsorships', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Apadrinhamento criado (modo offline)' };
    }
}

export const updateSponsorship = async (data, token) => {
    try {
        return await axiosPut('/sponsorships', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Apadrinhamento atualizado (modo offline)' };
    }
}

export const deleteSponsorship = async (id, token) => {
    try {
        return await axiosDelete(`/sponsorships/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Apadrinhamento removido (modo offline)' };
    }
}

//-----Sponsorships forms
export const getAllSponsorshipsForms = async (token) => {
    try {
        return await axiosGet('/sponsorships/forms', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return [];
    }
}

export const createSponsorshipForm = async (data) => {
    try {
        return await axiosPost('/sponsorships/forms', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.warn('API indisponível. Formulário simulado.');
        return { success: true, message: 'Formulário de apadrinhamento enviado (modo offline)' };
    }
}

export const acceptSponsorshipForm = async (id, token) => {
    try {
        return await axiosGet(`/sponsorships/forms/accept/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}

export const denySponsorshipForm = async (id, token) => {
    try {
        return await axiosDelete(`/sponsorships/forms/deny/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true };
    }
}