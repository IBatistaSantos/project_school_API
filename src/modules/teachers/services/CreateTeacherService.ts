import { container, inject, injectable } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/Users';
import CreateUserService from '@modules/users/services/CreateUserService';
import CreateUserDTO from '@modules/users/dtos/CreateUserDTO';
import Teacher from '../infra/typeorm/entities/Teacher';
import ITeacherRepository from '../repositories/ITeacherRepository';

interface IRequest extends Omit<CreateUserDTO, 'matriculation'> {
  work_schedule: string;
  monthly_shift: string;
}

interface IResponse {
  teacher: Teacher;
  user: User;
}

@injectable()
class CreateStudentService {
  constructor(
    @inject('TeacherRepository')
    private teacherRepository: ITeacherRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    monthly_shift,
    work_schedule,
  }: IRequest): Promise<IResponse> {
    const userService = container.resolve(CreateUserService);

    const user = await userService.execute({
      name,
      email,
      password,
    });

    const teacher = await this.teacherRepository.create({
      monthly_shift,
      work_schedule,
      user_id: user.id,
    });

    return { teacher, user };
  }
}

export default CreateStudentService;
