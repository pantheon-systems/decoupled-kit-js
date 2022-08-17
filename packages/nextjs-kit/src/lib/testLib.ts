// This can be removed when development starts
// in the lib directory.

/**
 *
 * @param {string} value
 * @returns {string} the value that was passed into it
 * @remarks
 * This is a test function to show library structure and prove code splitting.
 *
 * Note:
 * There is a named and default export so that we can
 * support submodules for the ESModule build and a single entrypoint for the UMD build
 */
export const testLib = (value: string): string => {
  if (typeof value !== 'string') {
    throw new Error(`Value should be a string, got ${typeof value}`);
  }
  return value;
};

// Use default export for the UMD module
export default testLib;
