import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/users/dtos/CreateUserDTO';

import IUserRepository from '@modules/users/repositories/IUserRespository';
import User from '../entities/Users';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.ormRepository.findOne(id);
    return user;
  }

  public async findByMatriculation(
    matriculation: string,
  ): Promise<User | undefined> {
    const user = this.ormRepository.findOne({ where: { matriculation } });
    return user;
  }

  public async create({
    name,
    email,
    password,
    matriculation,
    role,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      matriculation,
      role,
    });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}
export default UserRepository;
