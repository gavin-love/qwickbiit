export const nearbyRestaurants = async (location) => {

  let restaurants;

  const yelpApiKey = 'Dy1whqeBla6eVA7q4irOM-bi8QNVgda5nwcAuhJHkSdhJogs1AqY_Qgs78YrfJITrQ99tbzSQpLZ7kT6ndXN_Iw4-Q-oKr9dxXqC2ihe7cqWwDAsWbY_yGxbixdRW3Yx'

  const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  const prefix = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?`;

  const lat = `latitude=${location.lat}`;
  const long = `longitude=${location.lng}`;
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