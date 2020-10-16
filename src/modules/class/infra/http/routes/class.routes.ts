import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HasRole from '@shared/infra/http/middleware/hasRole';
import ClassController from '../controllers/ClassController';

const classeRouter = Router();
classeRouter.use(ensureAuthenticaded);
classeRouter.use(HasRole('adm'));

const classeController = new ClassController();

classeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      level_education_id: Joi.string().required(),
    },
  }),
  classeController.create,
);

export default classeRouter;
