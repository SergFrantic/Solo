const { Router } = require('express');
const fetch = require('node-fetch');
// const x = require('../../public/js/application');


const chicagoRouter = Router();



chicagoRouter.get('/chicago', async (_, res) => {
  // const dataChicago = await fetch ("https://api.artic.edu/api/v1/artworks");
  // const lengthArr = await dataChicago

  res.render('chicago');
  // startView(0)
  // x()
})


module.exports = chicagoRouter;
