import { container } from 'tsyringe';
import RandomJsProvider from './implementations/RandomJsProvider';
import IMatriculationProvider from './models/IMatriculationProvider';

const providers = {
  randomJs: RandomJsProvider,
};
container.registerSingleton<IMatriculationProvider>(
  'MatriculationProvider',
  providers.randomJs,
);
