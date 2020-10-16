import LevelEducation from "@modules/levelEducation/infra/typeorm/entities/LevelEducation";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('classes')
class Classes {

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name: string;

  @Column()
  level_education_id: string;

  @ManyToOne(() => LevelEducation)
  @JoinColumn({ name: 'level_education_id'})
  level_education: LevelEducation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Classes
