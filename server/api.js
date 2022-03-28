const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 8000;

const endpoint = 'https://beta.check-mot.service.gov.uk';

const axiosInstance = axios.create({
  baseURL: endpoint,
  headers: {
    Accept: 'application/json+v6',
    'x-api-key': 'HybH0yr4Hj3eEgybT9pkn6B7PA769YDa8kt4wKdp',
  },
});

app.use(cors());

app.get('/api/mot-tests', async (req, res) => {
  const { registration } = req.query;

  try {
    const result = await axiosInstance.get('/trade/vehicles/mot-tests', {
      params: { registration },
    });

    res.send({ data: result.data });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT);
