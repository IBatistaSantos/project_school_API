import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationLevelEducationSubject1602688116321
  implements MigrationInterface {
  name = 'RelationLevelEducationSubject1602688116321';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "level_education_subjects_subjects" ("levelEducationId" uuid NOT NULL, "subjectsId" uuid NOT NULL, CONSTRAINT "PK_a8760611c16aea0d4678dc8f684" PRIMARY KEY ("levelEducationId", "subjectsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b8bc7ae01c4397e593b0cfd724" ON "level_education_subjects_subjects" ("levelEducationId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1d478d0476915a30f05409f43d" ON "level_education_subjects_subjects" ("subjectsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "level_education_subjects_subjects" ADD CONSTRAINT "FK_b8bc7ae01c4397e593b0cfd7245" FOREIGN KEY ("levelEducationId") REFERENCES "level_education"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "level_education_subjects_subjects" ADD CONSTRAINT "FK_1d478d0476915a30f05409f43d4" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "level_education_subjects_subjects" DROP CONSTRAINT "FK_1d478d0476915a30f05409f43d4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "level_education_subjects_subjects" DROP CONSTRAINT "FK_b8bc7ae01c4397e593b0cfd7245"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_1d478d0476915a30f05409f43d"`);
    await queryRunner.query(`DROP INDEX "IDX_b8bc7ae01c4397e593b0cfd724"`);
    await queryRunner.query(`DROP TABLE "level_education_subjects_subjects"`);
  }
}
