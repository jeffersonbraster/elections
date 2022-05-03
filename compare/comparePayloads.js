function isEmptyObject(obj) {
  var name;

  for (name in obj) {
    return false;
  }
  return true;
}

function updatedComparePayloads(a, b) {
  const isSameCandidate = (a, b) => a.name !== b.name && a.idade === b.idade;

  // Get items that only occur in the left array,
  // using the compareFunction to determine equality.
  const onlyInLeft = (left, right, compareFunction) =>
    left.filter(
      (leftValue) =>
        !right.some((rightValue) => compareFunction(leftValue, rightValue))
    );

  const onlyInA = onlyInLeft(a, b, isSameCandidate);
  //const onlyInB = onlyInLeft(b, a, isSameCandidate);

  return [...onlyInA];
}

function createDiffPayloads(a, b) {
  const isSameCandidate = (a, b) => a.name === b.name && a.idade === b.idade;

  // Get items that only occur in the left array,
  // using the compareFunction to determine equality.
  const onlyInLeft = (left, right, compareFunction) =>
    left.filter(
      (leftValue) =>
        !right.some((rightValue) => compareFunction(leftValue, rightValue))
    );

  const onlyInA = onlyInLeft(a, b, isSameCandidate);
  //const onlyInB = onlyInLeft(b, a, isSameCandidate);

  return [...onlyInA];
}

export { createDiffPayloads, updatedComparePayloads };
