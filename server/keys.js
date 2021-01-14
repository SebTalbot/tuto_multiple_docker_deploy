module.exports = {
  pgDatabase: process.env.PG_DATABASE,
  pgHost: process.env.PG_HOST,
  pgPassword: process.env.PG_PASSWORD,
  pgPort: parseInt(process.env.PG_PORT),
  pgUser: process.env.PG_USER,
  redisHost: process.env.REDIS_HOST,
  redisPort: parseInt(process.env.REDIS_PORT),
}
