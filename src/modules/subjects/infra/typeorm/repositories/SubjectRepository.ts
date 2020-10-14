import { getRepository, Repository } from 'typeorm';

import ISubjectRepository from '@modules/subjects/repositories/ISubjectRepository';
import Subject from '../entities/Subject';

class SubjectRepository implements ISubjectRepository {
  private ormRepository: Repository<Subject>;

  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  public async findById(id: string): Promise<Subject | undefined> {
    const subject = await this.ormRepository.findOne(id);
    return subject;
  }

  public async findAll(): Promise<Subject[]> {
    const subjects = await this.ormRepository.find();
    return subjects;
  }

  public async findSubjectInLevelEducation(
    levelEducation: string,
  ): Promise<Subject[]> {
    const subjects = await this.ormRepository.find({ where: levelEducation });

    return subjects;
  }

  public async create(name: string): Promise<Subject> {
    const subject = this.ormRepository.create({ name });
    await this.ormRepository.save(subject);
    return subject;
  }

  public async save(subject: Subject): Promise<Subject> {
    return this.ormRepository.save(subject);
  }
}
export default SubjectRepository;
