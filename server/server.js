require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000; // Default port if no defined
const API = process.env.MERCADOLIBRE_API;

app.use(express.json());

app.get("/api/items", async (req, res) => {
  try {
    const query = req.query.search;
    const mercadoLibreURL = `${API}/sites/MLA/search?q=${query}&limit=4`;
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
      location: {
        city: result.address.city_name,
        state: result.address.state_name,
      }
    }));

    const categoryFilter = response.data.filters.find(
      (filter) => filter.id === "category"
    );
    const categories = categoryFilter
      ? categoryFilter.values[0].path_from_root.map((category) => category.name)
      : [];

    const author = {
      name: "Martín",
      lastname: "Rosas",
    };

    const result = {
      author,
      categories,
      items,
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la solicitud" });
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const itemURL = `${API}/items/${id}`;
    const descriptionURL = `${API}/items/${id}/description`;
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(itemURL),
      axios.get(descriptionURL),
    ]);

    const item = itemResponse.data;
    const description = descriptionResponse.data;

    const author = {
      name: "Martín",
      lastname: "Rosas",
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
        description: description.plain_text
      },
    };

    if (item.category_id) {
      const categoryURL = `${API}/categories/${item.category_id}`;
      const categoryResponse = await axios.get(categoryURL);
      const categoriesPath = categoryResponse.data.path_from_root.map((category) => category.name);
      result.item.categories = categoriesPath;
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la solicitud" });
  }
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
