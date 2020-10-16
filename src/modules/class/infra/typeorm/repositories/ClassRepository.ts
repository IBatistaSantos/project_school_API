import IClassRepository from '@modules/class/repositories/IClassRepository'
import { getRepository, Repository } from 'typeorm';
import Class from '../entities/Classes';

class ClasseRepository implements IClassRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async findById (id:string): Promise<Class | undefined> {
    const classe = await this.ormRepository.findOne(id);
    return classe
  }

  public async findAll(): Promise<Class[]> {
    const classes = await this.ormRepository.find()
    return classes
  }


  public async findByName(name: string): Promise<Class | undefined> {
    const classe = await this.ormRepository.findOne({where: {name: name}});
    return classe;
  }
  public async create(name: string, level_education_id: string): Promise<Class> {
    const classe = this.ormRepository.create({name, level_education_id})
    await this.ormRepository.save(classe)
    return classe
  }

  public async save(classe: Class): Promise<Class> {
    const classes = await this.ormRepository.save(classe)
    return classes
  }

}

export default ClasseRepository;
