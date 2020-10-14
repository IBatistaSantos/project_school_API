import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import LevelEducation from '../infra/typeorm/entities/LevelEducation';
import ILevelEducationRepository from '../repositories/ILevelEducationRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateLevelEducationService {
  constructor(
    @inject('LevelEducationRepository')
    private levelEducationRepository: ILevelEducationRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<LevelEducation> {
    const checkLevelEducationExists = await this.levelEducationRepository.findByName(
      name,
    );

    if (checkLevelEducationExists) {
      throw new AppError('Level Education already exists');
    }

    const levelEducation = await this.levelEducationRepository.create(name);

    return levelEducation;
  }
}

export default CreateLevelEducationService;
