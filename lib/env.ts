export function hasUsableDatabaseUri() {
  const databaseUri = process.env.DATABASE_URI

  if (!databaseUri) {
    return false
  }

  const placeholderParts = ['USER', 'PASSWORD', 'HOST', 'DATABASE']

  return !placeholderParts.some((part) => databaseUri.includes(part))
}
