import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1624645472766 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "uuid",
          },
          {
            name: "user_receiver",
            type: "uuid",
          },
          {
            name: "tag_id",
            type: "uuid",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserSenderCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKUserReceiverCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_receiver"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKTagCompliments",
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            columnNames: ["tag_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );

    //Outra forma de se fazer FK
    //dessa forma seria um pouco mais complicado excluir as FKs, teria que ser feito no async down
    /* await queryRunner.createForeignKey(
        "compliments",
        new TableForeignKey({
            name: "FKUserSenderCompliments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
        })
    ) */
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("compliments")
  }
}
