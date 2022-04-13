import "dotenv/config";
import { DatabaseType, DataSource } from "typeorm";

const {
    TYPEORM_HOST,
    TYPEORM_USERNAME,
    TYPEORM_PASSWORD,
    TYPEORM_DATABASE,
    TYPEORM_PORT,
    TYPEORM_ENTITIES,
    TYPEORM_MIGRATIONS
} = process.env;

const dbType: DatabaseType = 'postgres';

export const AppDataSource = new DataSource({
    type: dbType,
    host: TYPEORM_HOST,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    port: Number(TYPEORM_PORT),
    synchronize: true,
    logging: false,
    entities: [
        TYPEORM_ENTITIES
    ],
    migrations: [
        TYPEORM_MIGRATIONS
    ]
});


AppDataSource.initialize()
    .then(() => console.log('DataSource initialized'))
    .catch(error => console.log('Error to initialize DataSource:', error));
