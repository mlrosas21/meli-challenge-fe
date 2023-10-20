const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/items', async (req, res) => {
  try {
    const query = req.query.search;
    const mercadoLibreURL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;
    const response = await axios.get(mercadoLibreURL);

    const items = response.data.results.map((result) => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: Math.floor(result.price),
        decimals: (result.price - Math.floor(result.price)) * 100,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    }));

    const categories = response.data.filters
      .find((filter) => filter.id === 'category')
      .values[0].path_from_root.map((category) => category.name);

    const author = {
      name: 'Martín',
      lastname: 'Rosas',
    };

    const result = {
      author,
      categories,
      items,
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la solicitud' });
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const itemURL = `https://api.mercadolibre.com/items/${id}`;
    const descriptionURL = `https://api.mercadolibre.com/items/${id}/description`;
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(itemURL),
      axios.get(descriptionURL),
    ]);

    const item = itemResponse.data;
    const description = descriptionResponse.data;

    const author = {
      name: 'Martín',
      lastname: 'Rosas',
    };

    const result = {
      author,
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: (item.price - Math.floor(item.price)) * 100,
        },
        picture: item.pictures[0].url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
      },
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la solicitud' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
