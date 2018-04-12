import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class ChatUserRole_1523534243235 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_chat_user_role (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_chat_user_role;
        `;
    await queryRunner.query(sql);
  }
}
