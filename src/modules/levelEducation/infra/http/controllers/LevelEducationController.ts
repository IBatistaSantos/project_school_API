import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateLevelEducationService from '@modules/levelEducation/services/CreateLevelEducationService';
import ListAllLevelEducationService from '@modules/levelEducation/services/ListAllLevelEducationService';

export default class LevelEducationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createLevelEducationService = container.resolve(
      CreateLevelEducationService,
    );

    const levelEducation = await createLevelEducationService.execute({
      name,
    });

    return response.json(classToClass(levelEducation));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllLevelEducationService = container.resolve(
      ListAllLevelEducationService,
    );
    const levelEducation = await listAllLevelEducationService.execute();
    return response.json(classToClass(levelEducation));
  }
}
