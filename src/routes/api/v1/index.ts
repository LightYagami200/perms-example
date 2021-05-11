// ================================
// SECTION | IMPORTS
// ================================
import { Application } from 'express';
import root from '@routes/v1/endpoints/root';
import permissions from './endpoints/permissions';
// ================================ !SECTION

// ================================
// SECTION | MAIN
// ================================
export default (app: Application) => {
  // -> Root
  app.use('/api/v1', root);

  // -> Permissions
  app.use('/api/v1/permissions', permissions);
};
// ================================ !SECTION
