import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class ContactRequest_1523534440354 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_contact_request (
            from_user_id INT NOT NULL,
            to_user_id INT NOT NULL,
            status_id INT NOT NULL,
            FOREIGN KEY (from_user_id) REFERENCES wt_user(id),
            FOREIGN KEY (to_user_id) REFERENCES wt_user(id),
            FOREIGN KEY (status_id) REFERENCES wt_contact_request_status(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_contact_request;
        `;
    await queryRunner.query(sql);
  }
}
