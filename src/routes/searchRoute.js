import express from 'express';
import request from 'request';

const router = express.Router();
router.get('/api/items', (req, res) => {
  const { query: { search } } = req;
  request({ uri: `https://api.mercadolibre.com/sites/MLA/search?q=${search}` }).pipe(res);
});

export default router;
