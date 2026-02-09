/**
 * Utility to prepend the Vite base path to asset URLs
 * This ensures assets work correctly both in development and when deployed to a subdirectory
 */
export const getAssetPath = (path) => {
  // Only prepend base if the path starts with /
  if (path && path.startsWith('/')) {
    return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
  }
  return path;
};
