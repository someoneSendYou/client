import axios from 'axios';

const apiClient = axios.create({
    baseURL: '', // 백엔드 api 베이스 URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const sendLetter = async (letterContent: string) => {
    try {
        const response = await apiClient.post('/letters', {
            letterContent
        });
        return response.data;
    } catch (error) {
        console.log('sending error: ', error);
        throw error;
    }
};

