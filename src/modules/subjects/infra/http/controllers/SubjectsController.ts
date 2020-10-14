import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateSubjectService from '@modules/subjects/services/CreateSubjectService';

export default class SubjectController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, levelMatriculations } = request.body;

    const createSujectService = container.resolve(CreateSubjectService);

    const subject = await createSujectService.execute({
      name,
      levelEducation: levelMatriculations,
    });

    return response.json(classToClass(subject));
  }
}
