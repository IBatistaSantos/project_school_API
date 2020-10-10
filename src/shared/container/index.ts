import { container } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUserRespository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import '@modules/users/providers';
import IStudentRepository from '@modules/students/repositories/IStudentRepository';
import StudentRepository from '@modules/students/infra/typeorm/repositories/StudentRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IStudentRepository>(
  'StudentRepository',
  StudentRepository,
);
