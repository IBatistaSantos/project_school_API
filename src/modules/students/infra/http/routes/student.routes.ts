import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HasRole from '@shared/infra/http/middleware/hasRole';
import StudentsController from '../controllers/StudentsController';

const studentRouter = Router();
studentRouter.use(ensureAuthenticaded);
studentRouter.use(HasRole('adm'));
const studentController = new StudentsController();

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
  studentController.create,
);

export default studentRouter;
