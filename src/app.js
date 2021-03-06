import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import proxy from 'http-proxy-middleware';
import searchRoute from './routes/searchRoute';
import productDetailRoute from './routes/productDetailRoute';

express()
  .use(bodyParser.json())
  .use(searchRoute)
  .use(productDetailRoute)
  .use(express.static('public'))
  .use(proxy('/api', { target: 'http://localhost:5000' }))

  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })

  .use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
  })

  .use((err, req, res) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
  })

  .listen(5000, () => console.info('Server has started on 5000'));
