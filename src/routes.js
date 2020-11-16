import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Félix Vicente',
    email: 'felixvicent1306@gmail.com',
    password_hash: '211235648',
  });

  return res.json(user);
});

export default routes;
