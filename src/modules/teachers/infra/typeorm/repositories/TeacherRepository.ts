import { getRepository, Repository } from 'typeorm';
import ITeacherRepository from '@modules/teachers/repositories/ITeacherRepository';
import ICreateTeacherDTO from '@modules/teachers/dtos/CreateTeacherDTO';
import Teacher from '../entities/Teacher';

class TeacherRepository implements ITeacherRepository {
  private ormRepository: Repository<Teacher>;

  constructor() {
    this.ormRepository = getRepository(Teacher);
  }

  public async findById(id: string): Promise<Teacher | undefined> {
    const teacher = this.ormRepository.findOne(id);
    return teacher;
  }

  public async create({
    monthly_shift,
    work_schedule,
    user_id,
  }: ICreateTeacherDTO): Promise<Teacher> {
    const teacher = this.ormRepository.create({
      monthly_shift,
      work_schedule,
      user_id,
    });

    await this.ormRepository.save(teacher);
    return teacher;
  }

  public async save(teacher: Teacher): Promise<Teacher> {
    return this.ormRepository.save(teacher);
  }
}
export default TeacherRepository;
