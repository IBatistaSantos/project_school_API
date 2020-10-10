import Student from '../infra/typeorm/entities/Student';
import ICreateStudentDTO from '../dtos/CreateStudentDTO';

export default interface IStudentRepository {
  findById(id: string): Promise<Student | undefined>;
  create(data: ICreateStudentDTO): Promise<Student>;
  save(appointment: Student): Promise<Student>;
}
