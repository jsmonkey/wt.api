import { MigrationInterface, QueryRunner, Table, TableColumn, TablePrimaryKey } from "typeorm";

export class ChatMessage_1523534560497 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<any> {
    const user = `
        CREATE TABLE wt_chat_message (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            chat_id INT NOT NULL,
            user_id INT NOT NULL,
            is_read BOOLEAN NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            edited_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP NULL DEFAULT NULL,
            body TEXT,
            FOREIGN KEY (chat_id) REFERENCES wt_chat(id),
            FOREIGN KEY (user_id) REFERENCES wt_user(id)
        );
        `;
    await queryRunner.query(user);
  }

  async down(queryRunner: QueryRunner): Promise<any> {
    const sql = `
        DROP TABLE wt_chat_type;
        `;
    await queryRunner.query(sql);
  }
}
