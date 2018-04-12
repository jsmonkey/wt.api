import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class ForwardMessage_1523534575025 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_forward_message (
            parent_message_id INT NOT NULL,
            forwarded_message_id INT NOT NULL,
            FOREIGN KEY (parent_message_id) REFERENCES wt_chat_message(id),
            FOREIGN KEY (forwarded_message_id) REFERENCES wt_chat_message(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_forward_message;
        `;
    await queryRunner.query(sql);
  }
}
