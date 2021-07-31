import api from './baseUrl';

export default async ({dataToEdit, contactId}) => {
  
  try {
    const response = await api({
      method: 'PUT',
      url: `/contact`,
      params: {
        id: contactId
      },
      data: {
          dataToEdit
      }
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
