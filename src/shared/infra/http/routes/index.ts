import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import studentsRouter from '@modules/students/infra/http/routes/student.routes';
import teacherRouter from '@modules/teachers/infra/http/routes/teacher.routes';
import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';
import levelEducationRouter from '@modules/levelEducation/infra/http/routes/levelEducation.routes';
import subjectRouter from '@modules/subjects/infra/http/routes/subjects.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/sessions', sessionRouter);

routes.use('/students', studentsRouter);
routes.use('/teachers', teacherRouter);

routes.use('/levelEducation', levelEducationRouter);
routes.use('/subjects', subjectRouter);
export default routes;
