// ================================
// SECTION | IMPORTS
// ================================
import 'module-alias/register';
import { mongoConnectionString } from '@keys';
import routes from './routes';
import { connect, connection } from 'mongoose';
// ================================ !SECTION

// ================================
// SECTION | MAIN
// ================================

// -> Connect with DB
connect(mongoConnectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// -> When connected to MongoDB
connection.once('open', async () =>
  console.log('Database Status: Online'),
);

// -> Routes
routes();
// ================================ !SECTION
