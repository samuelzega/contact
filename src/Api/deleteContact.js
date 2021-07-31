import api from './baseUrl';

export default async ({contactId}) => {
  
  try {
    const response = await api({
      method: 'DELETE',
      url: `/contact/${contactId}`,
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
