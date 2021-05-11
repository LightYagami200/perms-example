// Dependencies
import { model } from 'mongoose';
import {
  IPermissionsDocument,
  IPermissionsModel,
} from '@models/permissions.types';
import PermissionsSchema from '@models/permissions.schema';

// Export
export const PermissionsModel = model<
  IPermissionsDocument,
  IPermissionsModel
>('Permissions', PermissionsSchema);
