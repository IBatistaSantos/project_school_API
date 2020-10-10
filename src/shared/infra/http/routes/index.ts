import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import studentsRouter from '@modules/students/infra/http/routes/student.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/students', studentsRouter);
export default routes;
