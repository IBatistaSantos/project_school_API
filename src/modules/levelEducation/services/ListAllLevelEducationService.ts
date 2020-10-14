import { inject, injectable } from 'tsyringe';
import LevelEducation from '../infra/typeorm/entities/LevelEducation';
import ILevelEducationRepository from '../repositories/ILevelEducationRepository';

@injectable()
class ListAllLevelEducationService {
  constructor(
    @inject('LevelEducationRepository')
    private levelEducationRepository: ILevelEducationRepository,
  ) {}

  public async execute(): Promise<LevelEducation[]> {
    const levelEducations = await this.levelEducationRepository.findAll();
    return levelEducations;
  }
}

export default ListAllLevelEducationService;
