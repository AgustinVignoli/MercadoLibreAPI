import express from 'express';
import request from 'request';

const router = express.Router();
router.get('/api/items/:id', (req, res) => {
  const { params: { id } } = req;
  request({ uri: `https://api.mercadolibre.com/items/${id}` }).pipe(res);
});

router.get('/api/items/:id/description', (req, res) => {
  const { params: { id } } = req;
  request({ uri: `https://api.mercadolibre.com/items/${id}/description` }).pipe(res);
});

export default router;
