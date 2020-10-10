import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStudent1602265655986 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'date_of_birth',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'nationality',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'naturalness',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'religion',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sex',
            type: 'enum',
            enum: ['M', 'F'],
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'StudentUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('students');
  }
}
