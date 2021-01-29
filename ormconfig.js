module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'amauri32',
  database: process.env.DB_NAME || 'nest_api',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNC == 'true' || true,
};
