import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateClasseService from '@modules/class/services/CreateClasseService';

export default class ClasseController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, level_education_id } = request.body;
    const createClasseService = container.resolve(
      CreateClasseService,
    );

    const classe = await createClasseService.execute({
      name,
      level_education_id,
    });

    return response.json(classToClass(classe));
  }
}
