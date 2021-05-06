import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Lucas Barroso',
    email: 'lucasbarroso23@gmail.com',
    password_hash: '1231241533221',
  });

  res.json(user);
});

export default routes;
