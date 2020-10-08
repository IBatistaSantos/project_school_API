import IUserRepository from '@modules/users/repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import IMatriculationProvider from '../models/IMatriculationProvider';

@injectable()
class RandomJsProvider implements IMatriculationProvider {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async generateMatriculation(): Promise<string> {
    const matriculation = String(Math.random()).slice(3, 12);

    const checkMatriculationExists = await this.userRepository.findByMatriculation(
      matriculation,
    );

    if (checkMatriculationExists) {
      this.generateMatriculation();
    }

    return matriculation;
  }
}

export default RandomJsProvider;
