/**
 * @author Julio Marin
 * @file app\commons\helper.js
 * @description Button component
 */

/**
 * Helper to generate unique id
 * @returns { string } UUID
 */
export const generateUUID = () =>
  Math.random()
    .toString(36)
    .substring(2) + Date.now().toString(36);
