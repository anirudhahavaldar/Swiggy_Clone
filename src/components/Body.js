import { useState } from 'react';
import { restaurants } from '../utils/mockData';
import RestaurantCard from './RestaurantCard';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div>
      <div className="search">
        <div className="filter">
          <button
            id="top-restaurants"
            onClick={() => {
              filterRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4
              );
              setListOfRestaurants(filterRestaurants);
            }}
          >
            Top Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
