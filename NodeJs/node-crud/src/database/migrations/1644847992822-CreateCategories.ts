import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1644847992822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "song_name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "artist",
                        type: "varchar"
                    },
                    {
                        name: "album",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }


}
