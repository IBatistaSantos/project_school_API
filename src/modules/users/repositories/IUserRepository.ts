import ICreateUserDTO from '../dtos/CreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByMatriculation(matriculation: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(appointment: User): Promise<User>;
}
