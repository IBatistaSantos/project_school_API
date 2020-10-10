import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import UsersController from '../controllers/StudentsController';

const studentRouter = Router();
const userController = new UsersController();

studentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().required(),
      date_of_birth: Joi.string(),
      nationality: Joi.string(),
      naturalness: Joi.string(),
      religion: Joi.string(),
      sex: Joi.string().valid('M', 'F'),
    },
  }),
  userController.create,
);

export default studentRouter;
