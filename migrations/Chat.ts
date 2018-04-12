import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class Chat_1523534350338 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_chat (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            type_id INT NOT NULL,
            FOREIGN KEY (type_id) REFERENCES wt_chat_type(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_chat;
        `;
    await queryRunner.query(sql);
  }
}
