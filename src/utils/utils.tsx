export function swapElements<T>(array: T[], i1: number, i2: number): T[] {
  const arrCopy = [...array];
  arrCopy[i1] = arrCopy.splice(i2, 1, arrCopy[i1])[0];
  return arrCopy;
}
