import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddRoleToUser1602602227638 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('users', 'role');
  }
}
