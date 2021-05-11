// Imports
import { Document, Model } from 'mongoose';

// Interfaces
export interface IPermissions {
  userID: string; // ID of user these permissions exist for
  permissions: [IPermission];
}

export interface IPermission {
  name: string; // Name of permission
  allowed: boolean; // Is permission allowed?
}

// Document
export interface IPermissionsDocument extends IPermissions, Document {}

// Model
export interface IPermissionsModel extends Model<IPermissionsDocument> {
  allow(
    this: IPermissionsModel,
    userID: string,
    permission: string,
  ): Promise<IPermissionsDocument>;
  disallow(
    this: IPermissionsModel,
    userID: string,
    permission: string,
  ): Promise<IPermissionsDocument>;
  hasPermission(
    this: IPermissionsModel,
    userID: string,
    permission: string,
  ): Promise<boolean>;
}
