/**
 *
 * @param {Array} ridesData Array of rides from little otter test
 * @returns Array of rides without whitespaces in the keys and an ui to ride
 */
export const processRidesData = (ridesData) => {
  // Remove this annoying whitespace from keys
  // replace ocurances of whitespace within " ... ": which is a key on every JSON object.
  const newRidesData = JSON.parse(
    JSON.stringify(ridesData).replace(/( +)(?=[(\w* *]*":)/g, "_")
  );

  // Include a uid to help us with indexes and data visualization
  return newRidesData.map((ride, index) => {
    // using index, since this list won't change
    // we can save some processing time by not using uuidv4
    return { ...ride, id: index + 1 };
  });
};
