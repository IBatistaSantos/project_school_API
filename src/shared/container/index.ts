import { container } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUserRespository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import '@modules/users/providers';

import IStudentRepository from '@modules/students/repositories/IStudentRepository';
import StudentRepository from '@modules/students/infra/typeorm/repositories/StudentRepository';

import ITeacherRepository from '@modules/teachers/repositories/ITeacherRepository';
import TeacherRepository from '@modules/teachers/infra/typeorm/repositories/TeacherRepository';

import ILevelEducationRepository from '@modules/levelEducation/repositories/ILevelEducationRepository';
import LevelEducationRepository from '@modules/levelEducation/infra/typeorm/repositories/LevelEducationRepository';

import ISubjectRepository from '@modules/subjects/repositories/ISubjectRepository';
import SubjectRepository from '@modules/subjects/infra/typeorm/repositories/SubjectRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IStudentRepository>(
  'StudentRepository',
  StudentRepository,
);

container.registerSingleton<ITeacherRepository>(
  'TeacherRepository',
  TeacherRepository,
);

container.registerSingleton<ILevelEducationRepository>(
  'LevelEducationRepository',
  LevelEducationRepository,
);

container.registerSingleton<ISubjectRepository>(
  'SubjectRepository',
  SubjectRepository,
);
