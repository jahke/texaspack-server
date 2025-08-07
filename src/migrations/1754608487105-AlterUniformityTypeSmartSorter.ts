import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUniformityTypeSmartSorter1754608487105 implements MigrationInterface {
  name = 'AlterUniformityTypeSmartSorter1754608487105'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Change "uniformity" from integer to double precision
    await queryRunner.query(`
      ALTER TABLE "smartSorterEntries"
      ALTER COLUMN "uniformity" TYPE double precision
      USING "uniformity"::double precision
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revert back to integer (rounding to the nearest int)
    await queryRunner.query(`
      ALTER TABLE "smartSorterEntries"
      ALTER COLUMN "uniformity" TYPE integer
      USING round("uniformity")::integer
    `);
  }
}