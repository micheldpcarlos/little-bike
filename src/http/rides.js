import { processRidesData } from "../helpers/data";

export const getBikeRides = async () => {
  const bikeRidesAPIAddress =
    "https://lo-interview.s3.us-west-2.amazonaws.com/trips.json";

  const response = await fetch(bikeRidesAPIAddress);

  // Empty results if not success
  if (response.status !== 200) return [];

  const data = await response.json();

  return processRidesData(data);
};
