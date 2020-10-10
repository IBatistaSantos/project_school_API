import { getRepository, Repository } from 'typeorm';
import ICreateStudentDTO from '@modules/students/dtos/CreateStudentDTO';

import IStudentRepository from '@modules/students/repositories/IStudentRepository';
import Student from '../entities/Student';

class StudentRepository implements IStudentRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async findById(id: string): Promise<Student | undefined> {
    const student = this.ormRepository.findOne(id);
    return student;
  }

  public async findByMatriculation(
    matriculation: string,
  ): Promise<Student | undefined> {
    const user = this.ormRepository.findOne({ where: { matriculation } });
    return user;
  }

  public async create({
    date_of_birth,
    nationality,
    naturalness,
    religion,
    sex,
    user_id,
  }: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({
      date_of_birth,
      nationality,
      naturalness,
      religion,
      sex,
      user_id,
    });

    await this.ormRepository.save(student);
    return student;
  }

  public async save(student: Student): Promise<Student> {
    return this.ormRepository.save(student);
  }
}
export default StudentRepository;
