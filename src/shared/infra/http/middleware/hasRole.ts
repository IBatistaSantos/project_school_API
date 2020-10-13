import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export default function HasRole(role: string) {
  return async function (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    const { id } = request.user;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user.role !== role) {
      throw new AppError('User is not allowed to access this feature', 401);
    }

    return next();
  };
}
