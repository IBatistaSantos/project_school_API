import Class from '../infra/typeorm/entities/Class';

export default interface ILevelEducationRepository {
  findById(id: string): Promise<Class | undefined>;
  findByName(name: string): Promise<Class | undefined>;
  findAll(): Promise<Class[]>;
  create(name: string, level_education_id: string): Promise<Class>;
  save(classe: Class): Promise<Class>;
}
