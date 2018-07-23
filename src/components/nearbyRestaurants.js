export const nearbyRestaurants = async (latitude, longitude) => {

  let restaurants;



  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const prefix = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?`;

  const lat = `latitude=${latitude}`;
  const long = `longitude=${longitude}`;
  const limit = 'limit=10';
  const term = 'term=restaurants';
  const price = 'price=1'
  const radius = `radius=1609`;
  const sort = 'sort_by=rating';
  const open = 'open_now=true';
  const reservation = ''

  let headers = new Headers();
  headers.append("Authorization", "Bearer " + yelpApiKey);

  try {
    const result =
      await fetch(`${prefix}${lat}&${long}&${term}&${price}&${limit}&${radius}&${open}&${reservation}&${sort}`,
        {
          headers
        });

    const data = await result.json();
    restaurants = data.businesses;
    return restaurants;
  } catch (err) {

    return [];
  }
};

export default nearbyRestaurants;