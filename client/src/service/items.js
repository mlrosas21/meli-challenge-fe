export const getItems = (query) => {

  return fetch(`/api/items?search=${query}`)
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

export const getItem = (idItem) => {
  return fetch(`/api/items/${idItem}`)
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
