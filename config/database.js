module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd83jcen6mpnkgh8rdf0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarcol'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Dy7hPEmP4MT1zUexfABNj7AWHsM6WMfC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
