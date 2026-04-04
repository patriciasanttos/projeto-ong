import { axiosGet, axiosPost, axiosPut, axiosDelete } from './index';
import { mockAnimals } from '../mockData';

export const getAllAnimals = async (token) => {
    try {
        return await axiosGet('/animals/get', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock para animais.');
        return mockAnimals;
    }
}

export const getAnimalById = async (id, token) => {
    try {
        return await axiosGet(`/animals/get/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível, usando dados mock.');
        return mockAnimals.find(a => a.id === Number(id)) || null;
    }
}

export const createAnimal = async (data, token) => {
    try {
        return await axiosPost('/animals', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Animal criado (modo offline)' };
    }
}

export const updateAnimal = async (data, token) => {
    try {
        return await axiosPut('/animals', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Animal atualizado (modo offline)' };
    }
}

export const deleteAnimal = async (id, token) => {
    try {
        return await axiosDelete(`/animals/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        console.warn('API indisponível. Operação simulada.');
        return { success: true, message: 'Animal removido (modo offline)' };
    }
}