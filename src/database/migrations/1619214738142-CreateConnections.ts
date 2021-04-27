import {
	MigrationInterface,
	QueryRunner,
	Table,
	TableForeignKey,
} from "typeorm";

export class CreateConnections1619214738142 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "connections",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
					},
					{
						name: "admin_id",
						type: "uuid",
						isNullable: true,
					},
					{
						name: "user_id",
						type: "uuid",
					},
					{
						name: "socket_id",
						type: "varchar",
					},
					{
						name: "updated_at",
						type: "timestamp",
						default: "now()",
					},
					{
						name: "created_at",
						type: "timestamp",
						default: "now()",
					},
				],
			})
		);

		await queryRunner.createForeignKey(
			"connections",
			new TableForeignKey({
				name: "FKConnections",
				referencedTableName: "users",
				referencedColumnNames: ["id"],
				columnNames: ["user_id"],
				onDelete: "SET NUll",
				onUpdate: "SET NUll",
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey("connections", "FKConnections");
		await queryRunner.dropTable("connections");
	}
}
