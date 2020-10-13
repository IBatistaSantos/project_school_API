import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticaded from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import HasRole from '@shared/infra/http/middleware/hasRole';
import TeacherController from '../controllers/TeacherController';

const teacherRouter = Router();
teacherRouter.use(HasRole('adm'));
teacherRouter.use(ensureAuthenticaded);

const teacherController = new TeacherController();

teacherRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().required(),
      monthly_shift: Joi.string(),
      work_schedule: Joi.string(),
    },
  }),
  teacherController.create,
);

export default teacherRouter;
