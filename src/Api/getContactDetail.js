import api from './baseUrl';

export default async ({contactId}) => {
  
  try {
    const response = await api({
      method: 'GET',
      url: `/contact/${contactId}`,
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
