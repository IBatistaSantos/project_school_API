import { inject, injectable } from 'tsyringe';
import Subject from '../infra/typeorm/entities/Subject';
import ISubjectRepository from '../repositories/ISubjectRepository';

interface IRequest {
  name: string;
  levelEducation: [];
}

@injectable()
class CreateSubjectService {
  constructor(
    @inject('SubjectRepository')
    private subjectRepository: ISubjectRepository,
  ) {}

  public async execute({ name, levelEducation }: IRequest): Promise<Subject> {
    const subject = await this.subjectRepository.create(name, levelEducation);
    return subject;
  }
}

export default CreateSubjectService;
