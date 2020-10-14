import Subject from '../infra/typeorm/entities/Subject';

export default interface ILevelEducationRepository {
  findById(id: string): Promise<Subject | undefined>;
  findAll(): Promise<Subject[]>;
  findSubjectInLevelEducation(levelEducation: string): Promise<Subject[]>;
  create(name: string, levelEducation: []): Promise<Subject>;
  save(subject: Subject): Promise<Subject>;
}
