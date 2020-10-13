import { container, inject, injectable } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/Users';
import CreateUserService from '@modules/users/services/CreateUserService';
import CreateUserDTO from '@modules/users/dtos/CreateUserDTO';
import Student from '../infra/typeorm/entities/Student';
import IStudentRepository from '../repositories/IStudentRepository';

interface IRequest extends Omit<CreateUserDTO, 'matriculation'> {
  date_of_birth: string;
  nationality: string;
  naturalness: string;
  religion: string;
  sex: 'M' | 'F';
}

interface IResponse {
  student: Student;
  user: User;
}

@injectable()
class CreateStudentService {
  constructor(
    @inject('StudentRepository')
    private studentRepository: IStudentRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    date_of_birth,
    nationality,
    naturalness,
    religion,
    sex,
    role,
  }: IRequest): Promise<IResponse> {
    const userService = container.resolve(CreateUserService);

    const user = await userService.execute({
      name,
      email,
      password,
      role,
    });

    const student = await this.studentRepository.create({
      date_of_birth,
      nationality,
      naturalness,
      religion,
      sex,
      user_id: user.id,
    });

    return { student, user };
  }
}

export default CreateStudentService;
