function arrayContainNumber(array: number[], number: number) {
  const result = array.find((item) => item === number);

  return !!result;
}

export { arrayContainNumber };
