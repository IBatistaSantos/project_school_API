import LevelEducation from '../infra/typeorm/entities/LevelEducation';

export default interface ILevelEducationRepository {
  findById(id: string): Promise<LevelEducation | undefined>;
  findByName(name: string): Promise<LevelEducation | undefined>;
  findAll(): Promise<LevelEducation[]>;
  create(name: string, subjects?: []): Promise<LevelEducation>;
  save(levelEducation: LevelEducation): Promise<LevelEducation>;
}
