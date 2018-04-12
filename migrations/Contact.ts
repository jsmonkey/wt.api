import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class Contact_1523534485210 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_contact (
            first_user_id INT NOT NULL,
            second_user_id INT NOT NULL,
            FOREIGN KEY (first_user_id) REFERENCES wt_user(id),
            FOREIGN KEY (second_user_id) REFERENCES wt_user(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_contact;
        `;
    await queryRunner.query(sql);
  }
}
