import { DataSource } from 'typeorm';
import { UserEntity } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [UserEntity],
        synchronize: true,
        logging: false,
        subscribers: [],
        migrations: [],
      });

      return dataSource.initialize();
    },
  },
];
