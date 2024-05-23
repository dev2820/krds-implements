export const isNil = (value: unknown): value is null | undefined => {
  return Object.is(value, undefined) || Object.is(value, null);
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};
