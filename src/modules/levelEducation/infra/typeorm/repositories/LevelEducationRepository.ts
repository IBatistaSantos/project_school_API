import { getRepository, Repository } from 'typeorm';

import ILevelEducationRepository from '@modules/levelEducation/repositories/ILevelEducationRepository';
import SubjectRepository from '@modules/subjects/infra/typeorm/repositories/SubjectRepository';
import Subject from '@modules/subjects/infra/typeorm/entities/Subject';
import LevelEducation from '../entities/LevelEducation';

class LevelEducationRepository implements ILevelEducationRepository {
  private ormRepository: Repository<LevelEducation>;

  constructor() {
    this.ormRepository = getRepository(LevelEducation);
  }

  public async findById(id: string): Promise<LevelEducation | undefined> {
    const levelEducation = await this.ormRepository.findOne(id);
    return levelEducation;
  }

  public async findByName(name: string): Promise<LevelEducation | undefined> {
    const levelEducation = await this.ormRepository.findOne({
      where: { name },
    });
    return levelEducation;
  }

  public async findAll(): Promise<LevelEducation[]> {
    const levelEducations = await this.ormRepository.find({
      relations: ['subjects'],
    });
    return levelEducations;
  }

  public async create(
    name: string,
    subjects: Subject[],
  ): Promise<LevelEducation> {
    const levelEducation = this.ormRepository.create({ name });

    let subjectsExists: any[]= [];
    if (subjects) {
      subjectsExists = await Promise.all(
        subjects.map(subject => {
          const subjectRepository = new SubjectRepository();
          const checkExists = subjectRepository.findById(subject.id);
          if (checkExists) {
            return checkExists;
          }
        }),
      );
      levelEducation.subjects = subjectsExists;
    }

    await this.ormRepository.save(levelEducation);
    return levelEducation;
  }

  public async save(levelEducation: LevelEducation): Promise<LevelEducation> {
    return this.ormRepository.save(levelEducation);
  }
}
export default LevelEducationRepository;
