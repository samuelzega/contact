import api from './baseUrl';

export default async () => {
  try {
    const response = await api({
      method: 'GET',
      url: `/contact`,
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
