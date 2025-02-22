export function createBasePath(domain, prefix) {
  const prefixIsValid = typeof prefix === 'string' && prefix.trim().length > 0;
  let result;
  result = `${domain || ''}${prefixIsValid ? '/' : ''}${
    prefixIsValid ? prefix : ''
  }`;
  return result;
}