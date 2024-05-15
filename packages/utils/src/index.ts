export const isNil = (data: unknown): data is null | undefined => {
  return Object.is(data, undefined) || Object.is(data, null);
};
