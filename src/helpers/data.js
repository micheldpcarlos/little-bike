/**
 *
 * @param {Array} tripsData Array of trips from little otter test
 * @returns Array of trips without whitespaces in the keys and an uid to ride
 */
export const processTripsData = (tripsData) => {
  // Remove this annoying whitespace from keys
  // replace ocurances of whitespace within " ... ": which is a key on every JSON object.
  const newTripsData = JSON.parse(
    JSON.stringify(tripsData).replace(/( +)(?=[(\w* *]*":)/g, "_")
  );

  // Include a uid to help us with indexes and data visualization
  return newTripsData.map((ride, index) => {
    // using index, since this list won't change
    // we can save some processing time by not using uuidv4
    return { ...ride, id: index + 1 };
  });
};

/**
 *
 * @param {Number} timeInSecconds
 * @returns String with formated hours, min and sec
 */
export const secondsToHms = (timeInSecconds) => {
  const secconds = Number(timeInSecconds);
  const h = Math.floor(secconds / 3600);
  const m = Math.floor((secconds % 3600) / 60);
  const s = Math.floor((secconds % 3600) % 60);

  var hDisplay = h > 0 ? h + (h === 1 ? "h " : "h ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? "m " : "m ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? "s" : "s") : "";
  return hDisplay + mDisplay + sDisplay;
};
