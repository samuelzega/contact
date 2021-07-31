import api from './baseUrl';

export default async ({firstName, lastName, age, photo}) => {
  
  try {
    const response = await api({
      method: 'POST',
      url: `/contact`,
      data: {
        firstName,
        lastName,
        age,
        photo
      }
    });
    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};
