import { processTripsData } from "../helpers/data";

export const getBikeTrips = async () => {
  const bikeTripsAPIAddress =
    "https://lo-interview.s3.us-west-2.amazonaws.com/trips.json";

  const response = await fetch(bikeTripsAPIAddress);

  // Empty results if not success
  if (response.status !== 200) return [];

  const data = await response.json();

  return processTripsData(data);
};
