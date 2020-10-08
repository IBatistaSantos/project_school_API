import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import IMatriculationProvider from './MatriculationProvider/models/IMatriculationProvider';
import BcryptHashProvider from './HashProvider/implementations/BcryptHashProvider';
import RandomJsProvider from './MatriculationProvider/implementations/RandomJSProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);

container.registerSingleton<IMatriculationProvider>(
  'MatriculationProvider',
  RandomJsProvider,
);
