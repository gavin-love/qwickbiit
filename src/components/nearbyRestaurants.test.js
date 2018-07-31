import nearbyRestaurants from './nearbyRestaurants';
import { yelpApiKey } from '../apiKeys';

describe("nearbyRestaurants", () => {
  describe("yelpApiFetch", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve([{
            id: 'saldkjasdf',
            coordinates: { latitude: 40, longitude: -40 },
            name: 'John/s',
            image_url: "url",
            rating: 4.5
          }])
        })
      );

    });

    it("should call nearbyRestaurants with the correct params", async () => {
      const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
      const prefix = `${corsAnywhereUrl}https://api.yelp.com/v3/businesses/search?`;

      const lat = `latitude=40`;
      const long = `longitude=-40`;
      const limit = 'limit=10';
      const term = 'term=restaurants';
      const price = `price=1`;
      const radius = `radius=600`;
      const sort = 'sort_by=rating';
      const open = 'open_now=true';

      const headers = new Headers();
      headers.append("Authorization", "Bearer " + yelpApiKey);

      const expected = [`${prefix}${lat}&${long}&${term}&${price}&${limit}&${radius}&${open}&${sort}`,
      {
        headers
      }]

      const mockLocation = {
        lat: 40,
        lng: -40
      }

      nearbyRestaurants(mockLocation, '1');

      await expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("should return an array of objects if status: 200", async () => {

      const mockLocation = {
        lat: 40,
        lng: -40
      }

      const data = [{
        id: 'saldkjasdf',
        coordinates: { latitude: 40, longitude: -40 },
        name: 'John/s',
        image_url: "url",
        rating: 4.5
      }]

      await expect(nearbyRestaurants(mockLocation, '1')).resolves.toEqual(data);
    });
  });
});