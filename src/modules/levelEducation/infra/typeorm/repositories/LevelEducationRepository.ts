import { getRepository, Repository } from 'typeorm';

import ILevelEducationRepository from '@modules/levelEducation/repositories/ILevelEducationRepository';
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

  public async create(name: string): Promise<LevelEducation> {
    const levelEducation = this.ormRepository.create({ name });

    await this.ormRepository.save(levelEducation);
    return levelEducation;
  }

  public async save(levelEducation: LevelEducation): Promise<LevelEducation> {
    return this.ormRepository.save(levelEducation);
  }
}
export default LevelEducationRepository;
