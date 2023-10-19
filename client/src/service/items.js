export const getItems = (query) => {

  console.log(query)

  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`)
    .then(response => {
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