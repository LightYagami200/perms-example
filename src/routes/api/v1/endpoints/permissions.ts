// ================================
// SECTION | INIT
// ================================
import { PermissionsModel } from '@models/permissions.model';
import { Router } from 'express';
import { body, param, query } from 'express-validator';
// ================================ !SECTION

// ================================
// SECTION | INIT
// ================================
const permissions = Router();
// ================================ !SECTION

// ===========================
// SECTION | MAIN
// ===========================
permissions.get(
  '/:userID',
  param('userID')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('User ID must not be empty'),
  async (req, res) => {
    const { userID } = req.params as { userID: string };

    return res.json({
      permissions: await PermissionsModel.findOne({ userID }),
    });
  },
);

permissions.get(
  '/:userID/hasPermission',
  param('userID')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('User ID must not be empty'),
  query('permission')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Permission must not be empty'),
  async (req, res) => {
    const { userID } = req.params as { userID: string };
    const { permission } = req.query as { permission: string };

    return res.json({
      hasPermission: await PermissionsModel.hasPermission(
        userID,
        permission,
      ),
    });
  },
);

permissions.post(
  '/:userID/allow',
  param('userID')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('User ID must not be empty'),
  body('permission')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Permission must not be empty'),
  async (req, res) => {
    const { userID } = req.params as { userID: string };
    const { permission } = req.body;

    return res.json({
      permissions: await PermissionsModel.allow(userID, permission),
    });
  },
);

permissions.post(
  '/:userID/disallow',
  param('userID')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('User ID must not be empty'),
  body('permission')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Permission must not be empty'),
  async (req, res) => {
    const { userID } = req.params as { userID: string };
    const { permission } = req.body;

    return res.json({
      permissions: await PermissionsModel.disallow(userID, permission),
    });
  },
);

// -> Export
export default permissions;
// =========================== !SECTION
