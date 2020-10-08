import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUserRepository from '../repositories/IUserRepository';
import IMatriculationProvider from '../providers/MatriculationProvider/models/IMatriculationProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('MatriculationProvider')
    private matriculationProvider: IMatriculationProvider,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email já cadastrado');
    }

    const hashedPassord = await this.hashProvider.generateHash(password);
    const matriculation = await this.matriculationProvider.generateMatriculation();

    const user = await this.userRepository.create({
      name,
      email,
      matriculation,
      password: hashedPassord,
    });

    return user;
  }
}

export default CreateUserService;
