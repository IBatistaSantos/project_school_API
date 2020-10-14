import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HasRole from '@shared/infra/http/middleware/hasRole';
import SubjectController from '../controllers/SubjectsController';

const subjectRouter = Router();
subjectRouter.use(ensureAuthenticaded);
subjectRouter.use(HasRole('adm'));

const subjectController = new SubjectController();

subjectRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      levelMatriculations: Joi.array(),
    },
  }),
  subjectController.create,
);

export default subjectRouter;
