import User from '@modules/users/infra/typeorm/entities/Users';

import { injectable, inject } from 'tsyringe';
import IUserRepository from '../repositories/IUserRespository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    role,
  }: IRequest): Promise<User> {
    const hashedPassord = await this.hashProvider.generateHash(password);
    const matriculation = String(Math.random()).slice(3, 12);
    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassord,
      matriculation,
      role,
    });

    return user;
  }
}

export default CreateUserService;
