// Dependencies
import { Schema } from 'mongoose';
import {
  IPermissionsDocument,
  IPermissionsModel,
} from '@models/permissions.types';
import { allow, disallow, hasPermission } from './permissions.statics';

// Schema
const PermissionsSchema = new Schema<
  IPermissionsDocument,
  IPermissionsModel
>({
  userID: {
    unique: true,
    type: String,
  },
  permissions: [
    {
      name: String,
      allowed: Boolean,
    },
  ],
});

// Statics
PermissionsSchema.statics.allow = allow;
PermissionsSchema.statics.disallow = disallow;
PermissionsSchema.statics.hasPermission = hasPermission;

// Methods

// Export
export default PermissionsSchema;
