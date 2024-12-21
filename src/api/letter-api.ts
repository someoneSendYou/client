import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://event-letter-rykrm.run.goorm.site', // 백엔드 api 베이스 URL
    headers: {
        'Content-Type': 'application/json',
    },
});

interface LetterContentProps {
    templete_id : number;
    imgPath: string;
    title : string;
    comment: string; 
}

export const sendLetter = async (letterContent: LetterContentProps) => {
    try {
        const response = await apiClient.post('/api/letter', letterContent);
        return response.data;
    } catch (error) {
        console.log('sending error: ', error);
        throw error;
    }
};

export const getLetter = async (hashUrl: string) => {
    try {
        const response = await apiClient.get(`/api/letter/${hashUrl}`);
        return response.data;
    } catch (error) {
        console.log('sending error:', error);
        throw error;
    }
}