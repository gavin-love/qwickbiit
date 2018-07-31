import { yelpApiKey } from '../apiKeys';

export const nearbyRestaurants = async (location, cost) => {

  let restaurants;
  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const prefix = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?`;

  const lat = `latitude=${location.lat}`;
  const long = `longitude=${location.lng}`;
  const limit = 'limit=10';
  const term = 'term=restaurants';
  const price = `price=${cost}`;
  const radius = `radius=600`;
  const sort = 'sort_by=rating';
  const open = 'open_now=true';

  let headers = new Headers();
  headers.append("Authorization", "Bearer " + yelpApiKey);

  try {
    const result =
      await fetch(`${prefix}${lat}&${long}&${term}&${price}&${limit}&${radius}&${open}&${sort}`,
        {
          headers
        });

    const data = await result.json();
    restaurants = data.businesses;
    console.log(restaurants);
    return restaurants;
  } catch (err) {
    return err;
  }
};

export default nearbyRestaurants;