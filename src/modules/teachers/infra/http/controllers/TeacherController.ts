import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTeacherService from '@modules/teachers/services/CreateTeacherService';
import { classToClass } from 'class-transformer';

export default class TeacherController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      work_schedule,
      monthly_shift,
    } = request.body;

    const createTeacherService = container.resolve(CreateTeacherService);
    const teacher = await createTeacherService.execute({
      name,
      email,
      password,
      monthly_shift,
      work_schedule,
    });

    return response.json(classToClass(teacher));
  }
}
