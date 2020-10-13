import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateStudentService from '@modules/students/services/CreateStudentService';
import { classToClass } from 'class-transformer';

export default class StudentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      date_of_birth,
      nationality,
      naturalness,
      religion,
      sex,
    } = request.body;

    const createStudentService = container.resolve(CreateStudentService);
    const student = await createStudentService.execute({
      name,
      email,
      password,
      date_of_birth,
      nationality,
      naturalness,
      religion,
      sex,
    });

    return response.json(classToClass(student));
  }
}
