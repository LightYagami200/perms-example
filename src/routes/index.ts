// ================================
// SECTION | IMPORTS
// ================================
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import apiV1 from '@routes/v1/index';
// ================================ !SECTION

// ================================
// SECTION | INIT
// ================================
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
// ================================ !SECTION

// ================================
// SECTION | MAIN
// ================================
export default () => {
  // Root
  app.get('/', (req, res) =>
    res.json({
      status: 'online',

      versions: {
        1: {
          baseUrl: '/api/v1',
        },
      },
    }),
  );

  // -> API v1
  apiV1(app);

  app.listen(process.env.PORT || 4000, () =>
    console.log('API Status: Online'),
  );
};
// ================================ !SECTION
