import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IClassRepository from '@modules/class/repositories/IClassRepository';
import Class from '../infra/typeorm/entities/Classes';
import LevelEducationRepository from '@modules/levelEducation/infra/typeorm/repositories/LevelEducationRepository';

interface IRequest {
  name: string;
  level_education_id: string;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClasseRepository')
    private classRepository: IClassRepository,
  ) {}

  public async execute({ name, level_education_id }: IRequest): Promise<Class> {

    const levelEducationRepository = new LevelEducationRepository()

    const levelEducationExists = await levelEducationRepository.findById(level_education_id);

    if (!levelEducationExists) {
      throw new AppError('Nível de escolaridade não encontrado')
    }

    const classeExists = await this.classRepository.findByName(name)

    if (classeExists) {
      throw new AppError('Nome de classe já utilizada')
    }

    const classe = await this.classRepository.create(
      name,
      level_education_id
    );

    return classe;
  }
}

export default CreateClassService;


