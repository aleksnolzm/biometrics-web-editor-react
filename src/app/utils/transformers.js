export function stringToKebabCase(value) {
  const trimmed = value.trim();
  let sanitized = trimmed.split(/\s+/);
  sanitized = sanitized.map(word => word.toLowerCase());
  return sanitized.join('-');
}

export function stringToSnakeCase(value) {
  const trimmed = value.trim();
  let sanitized = trimmed.split(/\s+/);
  sanitized = sanitized.map(word => word.toLowerCase());
  return sanitized.join('_');
}

export function stringToCamelCase(value) {
  const trimmed = value.trim();
  let sanitized = trimmed.split(/\s+/);
  sanitized = sanitized.map(word => word.toLowerCase());
  const firstWord = sanitized[0] || '';
  const restOfWords = sanitized
    .slice(1)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  return firstWord + restOfWords;
}