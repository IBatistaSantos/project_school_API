import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import studentsRouter from '@modules/students/infra/http/routes/student.routes';
import teacherRouter from '@modules/teachers/infra/http/routes/teacher.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

routes.use('/students', studentsRouter);
routes.use('/teachers', teacherRouter);

export default routes;
