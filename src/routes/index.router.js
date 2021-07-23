const { Router } = require('express');
const fetch = require('node-fetch');

const indexRouter = Router();



indexRouter.get('/', (_, res)=>{

  res.render('index')
})


module.exports = indexRouter;
