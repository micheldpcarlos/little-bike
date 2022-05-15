import { v4 as uuid } from "uuid";

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
  return newRidesData.map((ride) => {
    return { ...ride, id: uuid() };
  });
};
