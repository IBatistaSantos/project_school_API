import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SessionController from '../controllers/SessionController';

const sessionRouter = Router();
const sessionController = new SessionController();
sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      matriculation: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create,
);
export default sessionRouter;
