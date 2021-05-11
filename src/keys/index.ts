const keys =
  process.env.NODE_ENV === 'production'
    ? require('./prod')
    : require('./dev');

const mongoConnectionString: string = keys.mongoConnectionString;

export { mongoConnectionString };
