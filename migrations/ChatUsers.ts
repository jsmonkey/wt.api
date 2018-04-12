import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class ChatUsers_1523534394035 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_chat_users (
            user_id INT NOT NULL,
            chat_id INT NOT NULL,
            role_id INT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES wt_user(id),
            FOREIGN KEY (chat_id) REFERENCES wt_chat(id),
            FOREIGN KEY (role_id) REFERENCES wt_chat_user_role(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_chat_users;
        `;
    await queryRunner.query(sql);
  }
}
