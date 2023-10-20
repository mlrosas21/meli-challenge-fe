export const getCategory = (idCategory) => {

  return fetch(`https://api.mercadolibre.com/categories/${idCategory}`)
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`Response not OK`);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error fetching items:', error);
      throw error;
    });
}