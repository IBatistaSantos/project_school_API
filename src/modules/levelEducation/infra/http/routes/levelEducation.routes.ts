import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HasRole from '@shared/infra/http/middleware/hasRole';
import LevelEducationController from '../controllers/LevelEducationController';

const levelEducationRouter = Router();
levelEducationRouter.use(ensureAuthenticaded);
levelEducationRouter.use(HasRole('adm'));

const levelEducationController = new LevelEducationController();

levelEducationRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      subjects: Joi.array(),
    },
  }),
  levelEducationController.create,
);

levelEducationRouter.get('/', levelEducationController.index);

export default levelEducationRouter;
