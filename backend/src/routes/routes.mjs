import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API do Dress4Weather funcionando!');
});

export default router;
