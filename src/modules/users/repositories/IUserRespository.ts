import User from '../infra/typeorm/entities/Users';
import ICreateUserDTO from '../dtos/CreateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByMatriculation(matriculation: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(appointment: User): Promise<User>;
}
