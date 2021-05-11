// ================================
// SECTION | IMPORTS
// ================================
import { IPermissionsModel } from '@models/permissions.types';
// ================================ !SECTION

// ================================
// SECTION | STATICS
// ================================
/**
 * Allow a specific permission for a user
 *
 * @param this
 * @param userID - ID of user to allow this permission for
 * @param permission - Permission name
 * @returns
 */
export async function allow(
  this: IPermissionsModel,
  userID: string,
  permission: string,
) {
  return await this.findOneAndUpdate(
    { userID },
    {
      userID,
      $set: {
        permissions: [{ name: permission, allowed: true }],
      },
    },
    { upsert: true, new: true },
  );
}

/**
 * Disallow a specific permission for a user
 *
 * @param this
 * @param userID - ID of user to disallow this permission for
 * @param permission - Permission name
 * @returns
 */
export async function disallow(
  this: IPermissionsModel,
  userID: string,
  permission: string,
) {
  return await this.findOneAndUpdate(
    { userID },
    {
      userID,
      $set: {
        permissions: [{ name: permission, allowed: false }],
      },
    },
    { upsert: true, new: true },
  );
}

/**
 * Check if a specific permission is allowed for a user
 *
 * @param this
 * @param userID - ID of user to check permission for
 * @param permission - Permission name
 * @returns
 */
export async function hasPermission(
  this: IPermissionsModel,
  userID: string,
  permission: string,
) {
  const perms = await this.findOne({ userID });

  if (!perms) return false;

  const perm = perms.permissions.find((p) => p.name === permission);

  if (!perm || !perm.allowed) return false;

  return true;
}
// ================================ !SECTION
